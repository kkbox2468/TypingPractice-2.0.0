class UserTopicsController < ApplicationController
  def create

    if current_user
      
      @user_topic = UserTopic.new(user_topic_params.merge(user_id:current_user.id))
      if @user_topic.save
        redirect_to url
      else
        redirect_to url 
      end

    else
      redirect_to url 
    end
  end
  
  private
  
  def user_topic_params
    params.require(:user_topic).permit( :time,
                                        :letter_count,
                                        :speed,
                                        :wrong_letter,
                                        :wrong_letter_count,
                                        :accuracy,
                                        :topic_id)                                      
  end

  def user_topic(:id)
    case Topic.find(user_topic_params[:t])
  
  def url
    
    case Topic.find(user_topic_params[:topic_id]).type
    when "Article"
      typing_index_path
    when "Ruby"
      coding_index_path
    else
      root_path
    end

  end
  
end
