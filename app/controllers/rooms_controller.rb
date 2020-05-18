class RoomsController < ApplicationController
  def create
    @rooms = Room.new(room_data)
    if @rooms.save
      redirect_to racing_index_path
    else
      redirect_to racing_index_path, alert: 'Room has not created!'
    end
  end
  def show
    @room = Room.find(params[:id])
    @message = Message.new
    test_topic = "It’s not about ideas. It’s about making ideas happen."
    @topic = test_topic.split(//)
  end
  def edit
    @room = Room.find(params[:id])
  end
  def update
    @room = Room.find(params[:id])
    if @room.update(room_data)
      redirect_to racing_index_path
    else
      redirect_to racing_index_path, alert: 'Room has not updated!'
    end
  end

  private
  def room_data
    params.require(:room).permit(:name, :description)
  end
end
