class RoomChannel < ApplicationCable::Channel
  @@count = 0
  def subscribed
    if params[:room_id]
      stream_from "room_channel_#{params[:room_id]}"
      @@count += 1
    end
    # debugger
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
    stop_all_streams
    @@count -= 1
    # debugger
  end

  def self.counter
    return @@count
  end
end
