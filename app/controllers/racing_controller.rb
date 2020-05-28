class RacingController < ApplicationController
  before_action :is_current_user?

  def index
    @room = Room.new
    @rooms = Room.all
    @members = RoomChannel.counter
  end
end
