class RoomChannel < ApplicationCable::Channel
  @@count = 0
  def subscribed
    if params[:room_id]
      room = Room.find(params[:room_id])
      stream_from "room_channel_#{params[:room_id]}"
      room.members += 1
      room.save
      # @@count += 1
    end
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
    stop_all_streams
    room = Room.find(params[:room_id])
    room.members -= 1
    room.save
    # @@count -= 1
  end

  def self.counter
    return @@count
  end
end
