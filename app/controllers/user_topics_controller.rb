class UserTopicsController < ApplicationController
  def create
# byebug
    if current_user
   
      @user_topic = UserTopic.new(user_topic_params.merge(user_id:current_user.id))
      # @user_topic = UserTopic.new(user_topic_params)
      # @user_topic.user_id = current_user.id
      # byebug
      if @user_topic.save

        redirect_to url, notice:  '儲存成功'
        

      else
        redirect_to url, notice:  '儲存失敗'

      end

    else
      redirect_to url, notice: '下一關'

    end


    # "user_topic"=>{"time"=>"4", "letter_count"=>"43", "speed"=>"0", "wrong_letter"=>"0", "wrong_letter_count"=>"0", "accuracy"=>"0", "user_id"=>"0", "topic_id"=>"0"}, "controller"=>"user_topics", "action"=>"create"}
    
  end
  


  
  private
  def user_topic_params
    params.require(:user_topic).permit( :time,
                                        :letter_count,
                                        :speed,
                                        :wrong_letter,
                                        :wrong_letter_count,
                                        :accuracy,
                                        :topic_id
                                        

                                            )
  end
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
