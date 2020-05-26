class StatsController < ApplicationController
  def index
    
    if current_user
      find_type_history 
      # find_type_history 
      # find_type_history  
      # @article_accuracy = UserArticle.find_by(params[:id])
      @arti_accuracy = current_user.user_topics.average(:accuracy).to_f #從current user抓底下create的所有文章裡的準確度.average可以算平均再算成浮點數
      @arti_wpm = current_user.user_topics.average(:speed)
      
      @arti_date = current_user.user_topics.map(&:created_at)
      @arti_amount = current_user.user_topics.average(:letter_count).to_i
      @articles = current_user.user_topics
      # render json: @articles
    else
      redirect_to typing_index_path, notice: 'Not a member?Join us to record achievements!'
    end
  
  end
  
  private
  
  def find_type_history 
    @user_topics = current_user.user_topics
  end
end