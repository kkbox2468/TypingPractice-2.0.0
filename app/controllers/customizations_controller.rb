class CustomizationsController < ApplicationController
  def index
    @topic = Customization.new
    @topics = []
    user_topics = current_user.user_topics.where(time: nil)
    user_topics.each do |topic|
      @topics << topic.topic_id
    end
    # debugger
    # render html: 'Hi User'
    
  end
  def create
    topic = Customization.create(content_params)
    current_user.topics << topic
    redirect_to customizations_path
  end
  private
  def content_params
    params.require(:customization).permit(:content)
    
  end
end
