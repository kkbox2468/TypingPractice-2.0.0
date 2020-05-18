class RacingController < ApplicationController
  def index
    @room = Room.new
    @rooms_list = Room.all
  end
end
