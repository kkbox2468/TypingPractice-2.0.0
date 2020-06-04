class InvitationController < ApplicationController
  def new
    user_id = current_user.id
    content = params[:invitation][:content]
    room_id = params[:invitation][:room_id]
    ActionCable.server.broadcast "invitation_channel", user_id: user_id, room_id: room_id, content: content
  end
end
