class MessagesController < ApplicationController

  def create
    @msg = Message.new(msg_params)
    @msg.user_id = current_user.id
  end

  private
  def msg_params
    params.require(:message).permit(:content, :room_id, :user_id)
  end
end
