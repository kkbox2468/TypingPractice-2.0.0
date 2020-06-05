class CustomizationsController < ApplicationController
  def index
    @topic = Customization.new
    @user_topics = current_user.user_topics.where(time: nil)

    if current_user
      # @done_customization = current_user.user_topics.pluck(:topic_id).uniq
      @done_customization = current_user.user_topics.where.not(accuracy: nil).pluck(:topic_id).uniq

      topics = UserTopic.all
      @all_progress = {}

      topics.each do |topic|
        progress = current_user.user_topics.where(topic_id: topic.topic_id).order('accuracy').sort.last
        # uu.user_topics.where(topic_id: 51).order('accuracy').where.not(accuracy: nil).last
          case progress
          when 100
            @all_progress.merge!({topic.topic_id => 5})
          when (80.0..99.0)
            @all_progress.merge!({topic.topic_id => 4})
          when (60.0..79.0) 
            @all_progress.merge!({topic.topic_id => 3})
          when (40.0..59.0)
            @all_progress.merge!({topic.topic_id => 2})
          when (0.1..39.0)
            @all_progress.merge!({topic.topic_id => 1})
          end
      end
      # byebug
    end
  end

  def create
    topic = Customization.create(content_params)
    current_user.topics << topic
    redirect_to customizations_path
  end

  def show
    @topic = Topic.find(params[:id]).content.split(//)
    @user_topic  = UserTopic.new
    @customization = Customization.find(params[:id])
  end

  def edit
    @topic = Topic.find(params[:id])
  end

  def update
    topic = Topic.find(params[:id])
    if topic.update(content_params)
      redirect_to customizations_path
    else
      redirect_to customizations_path, alert: 'Topic has not updated!'
    end
  end

  def destroy
    topic = Topic.find(params[:id])
    topic.destroy
    redirect_to customizations_path, alert: 'Topic has deleted!'
  end

  private
  def content_params
    params.require(:customization).permit(:content)
    
  end
end
