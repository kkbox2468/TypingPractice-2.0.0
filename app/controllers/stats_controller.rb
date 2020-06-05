class StatsController < ApplicationController
  def index
    # @user_topics = current_user.user_topics(:accuracy).all
    # render json: @user_topics
    if current_user
      find_type_history   
      
      @arti_accuracy = current_user.user_topics.average(:accuracy).to_i #從current user抓底下create的所有文章裡的準確度.average可以算平均再算成整數
      @arti_wpm = current_user.user_topics.average(:speed).to_i
      # render json: @arti_wpm
      #('因為兩張資料表有一樣的created_at,所以要再給一次所屬資料表')
      @arti_day = current_user.user_topics.where("created_at > ?", Date.today - 6.days).group_by_day('user_topics.created_at', format: "%m""%d").average(:accuracy) #show日hash
      # render json: @day_week = @arti_day.values.map(&:to_i) #抓出weekday
      @arti_day_accu = current_user.user_topics.where("created_at > ?", Date.today - 6.days).group_by_day('user_topics.created_at').average(:accuracy)
      # render json: @arti_day_accu.values.map(&:to_i)#下排簡寫
      # render json: @acc_day = @arti_day_accu.values.map{ |e| e.to_i} #抓出正確率整數

      # @article_accuracy_presenter = ArticleAccuracyPresenter.new(current_user).perform
    
    else
      redirect_to typing_index_path, notice: 'Not a member?Join us to record achievements!'
    end
  
  end
  
  private
  
  def find_type_history 
    user_topics = current_user.user_topics.where.not(accuracy: nil)
    user_topics = user_topics.joins(:topic).where('topics.type = ?', params[:type].camelize) if params[:type].present?
    @user_topics = user_topics.order(id: :desc).limit(10)
  
  end
end