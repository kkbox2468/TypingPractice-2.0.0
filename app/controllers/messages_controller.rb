class MessagesController < ApplicationController

  def create
    @msg = Message.new(msg_params)
    @msg.user_id = current_user.id
    ActionCable.server.broadcast "room_channel_#{@msg.room_id}", content: @msg.content, message: @msg
  end
  
  def new
    # render json: {name: 'aaa', age: 18} #for AJAX
    user_id = current_user.id
    ActionCable.server.broadcast "room_channel_40", check: params[:check][:content], user_id: user_id
    

    
  end

  private
  def msg_params
    params.require(:message).permit(:content, :room_id, :user_id)
  end
end
