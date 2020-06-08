class CustomizationsController < ApplicationController
  include Accessible
  

  def index
    @topic = Customization.new
    
    @user_topics = current_user.topics.where(type:'Customization').uniq
    
    #篩選出客製化題目中，未做過的題目的id
    @done_customization = current_user.user_topics.where(topic_id: @user_topics.pluck(:id)).where.not(accuracy: nil).pluck(:topic_id).uniq
  
    if @user_topics

      @all_progress = {}

      @user_topics.each do |user_topic|

      max_accuracy = current_user.user_topics.where(topic_id: user_topic.id).maximum(:accuracy)
        
      case max_accuracy
      when 100
        @all_progress.merge!({user_topic.id => 5})
      when (80.0..99.9)
        @all_progress.merge!({user_topic.id => 4})
      when (60.0..79.9) 
        @all_progress.merge!({user_topic.id => 3})
      when (40.0..59.9)
        @all_progress.merge!({user_topic.id => 2})
      when (20.0..39.9)
        @all_progress.merge!({user_topic.id => 1})
      else
        @all_progress.merge!({user_topic.id => 0})
      end
      
    end     
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
