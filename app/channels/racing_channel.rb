class RacingChannel < ApplicationCable::Channel
  def subscribed
    stream_from "racing_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
