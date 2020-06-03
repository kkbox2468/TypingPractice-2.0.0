class Api::RoomsController < ApplicationController
  def members
    members = Room.find(params[:id]).members
    render json: {members: "#{members}"}
  end
end
