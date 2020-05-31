class MessagesController < ApplicationController

  def create
    msg = Message.new(msg_params)
    msg.user_id = current_user.id
    ActionCable.server.broadcast "room_channel_#{msg.room_id}", content: msg.content, message: msg
  end
  
  def new
    user_id = current_user.id
    if params[:check]
      room_id = params[:check][:room_id]
      ActionCable.server.broadcast "room_channel_#{room_id}", check: params[:check][:content], user_id: user_id, user_name: current_user.nickname
    elsif params[:records]
      room_id = params[:records][:room_id]
      correct_points = params[:records][:accuracy]
      ActionCable.server.broadcast "room_channel_#{room_id}", type: "records",user_id: user_id, accuracy: correct_points
      # debugger
    end

  end

  private
  def msg_params
    params.require(:message).permit(:content, :room_id, :user_id)
  end

end
