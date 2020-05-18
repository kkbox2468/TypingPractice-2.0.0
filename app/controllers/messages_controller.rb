class MessagesController < ApplicationController

  def create
    @msg = Message.new(msg_params)
    @msg.user_id = current_user.id
    ActionCable.server.broadcast "room_channel_#{@msg.room_id}", content: @msg.content, message: @msg
  end

  private
  def msg_params
    params.require(:message).permit(:content, :room_id, :user_id)
  end
end
