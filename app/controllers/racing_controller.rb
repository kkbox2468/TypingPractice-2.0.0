class RacingController < ApplicationController
  include Accessible
  

  def index
    @room = Room.new
    @rooms = Room.includes(:user)
  end

end
