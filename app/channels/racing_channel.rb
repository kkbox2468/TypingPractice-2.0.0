class CreateRoomChannel < ApplicationCable::Channel
  def subscribed
    stream_from "create_room_channel"
    # stream_from "player_counter_channel"

  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
