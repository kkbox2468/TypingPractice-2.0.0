class RoomsController < ApplicationController
  before_action :is_current_user?

  def create
    @room = Room.new(room_data)

    @room.user_id = current_user.id
    
    topics = Topic.where(type: "BattleTopic")
    @room.topic_id = topics.sample.id

    if @room.save
      ActionCable.server.broadcast(
        "racing_channel",
        id: @room.id,
        name: @room.name,
        description: @room.description,
        owner_name: @room.user.nickname
      )
      redirect_to racing_index_path, notice: 'Room has created!'
    else
      redirect_to racing_index_path, alert: 'Room has not created!'
    end
  end

  def show
    @room = Room.find(params[:id])
    if @room.members < 2
      @message = Message.new
      @battle_record = BattleRecord.new
      @topic = Topic.find(@room.topic_id).content.split(//)
    else
      redirect_to racing_index_path, notice: '聊天室已滿'
    end
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
    if @room.user_id == current_user.id
      @room.destroy
      redirect_to racing_index_path, notice: 'Room has deleted!'
    else
      redirect_to racing_index_path, alert: 'You are not owener'
    end
  end

  private
  def room_data
    params.require(:room).permit(:name, :description, :type)
  end

end
