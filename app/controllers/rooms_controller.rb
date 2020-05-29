class RoomsController < ApplicationController
  before_action :is_current_user?

  def create
    @room = Room.new(room_data)
    @room.user_id = current_user.id
    if @room.save
      redirect_to racing_index_path, notice: 'Room has created!'
    else
      redirect_to racing_index_path, alert: 'Room has not created!'
    end
  end

  def show

    @room = Room.find(params[:id])
    @message = Message.new
    @battle_record = BattleRecord.new
    # article = "Whether you are training for a sports competition, a fight, a race or an exam, this quote from Nelson Mandela is a great example of determination and pugnacity."
    article = "Whether you are training."
    @topic = article.split(//)
    
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

  def destroy
    @room = Room.find(params[:id])
    @room.destroy
    redirect_to racing_index_path, alert: 'Room has deleted!'
  end

  private
  def room_data
    params.require(:room).permit(:name, :description)
  end

end
