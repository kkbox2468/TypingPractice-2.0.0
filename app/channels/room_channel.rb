class RoomChannel < ApplicationCable::Channel

  def subscribed
    if params[:room_id]
      room = Room.find(params[:room_id])
      stream_from "room_channel_#{params[:room_id]}"
      room.members += 1
      room.save

      ActionCable.server.broadcast(
        "player_counter_channel",
        room: room,
        room_id: room.id,
        room_members: room.members
      )
    end
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
    stop_all_streams
    room = Room.find(params[:room_id])
    room.members -= 1
    room.save

    ActionCable.server.broadcast(
      "player_counter_channel",
      room: room,
      room_id: room.id,
      room_members: room.members
    )
  end

end