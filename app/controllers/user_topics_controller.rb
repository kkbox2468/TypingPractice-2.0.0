class UserTopicsController < ApplicationController
  def create

    if current_user
      
      @user_topic = UserTopic.create(user_topic_params.merge(user_id:current_user.id))
      
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



  
end
