class StatsController < ApplicationController
  include Accessible

  def index
    
      find_type_history   
        
      @arti_accuracy = current_user.user_topics.average(:accuracy).to_i #從current user抓底下create的所有文章裡的準確度.average可以算平均再算成整數
      @arti_wpm = current_user.user_topics.where.not(speed:nil).where("speed != ?", "Infinity").average(:speed).to_i
      #('因為兩張資料表有一樣的created_at,所以要再給一次所屬資料表')
      @arti_day = current_user.user_topics.where("updated_at > ?", Date.today - 6.days).group_by_day('user_topics.updated_at', format: "%m""%d").average(:accuracy) #show日hash
      # render json: @day_week = @arti_day#.values.map(&:to_i) #抓出weekday
      
      @arti_day_accu = current_user.user_topics.where("updated_at > ?", Date.today - 6.days).group_by_day('user_topics.updated_at').average(:accuracy)
      # render json: @arti_day_accu.values.map(&:to_i)#下排簡寫
      # render json: @acc_day = @arti_day_accu.values.map{ |e| e.to_i} #抓出正確率整數

      # @article_accuracy_presenter = ArticleAccuracyPresenter.new(current_user).perform

      #cal-heart data
      @today_topic = current_user.user_topics.group_by_day('date(updated_at)',  format: "%s").count(:updated_at)
      respond_to do |format|
        format.json { render json: @today_topic }
        format.html { render :index }
      end
      
      # @topic_wrong_letter = current_user.user_topics.pluck(:wrong_letter)
      # @topic_most_wrong = @topic_wrong_letter
      # render json: @topic_wrong_letter 
  end
  
  private
  
  def find_type_history 
    user_topics = current_user.user_topics.where.not(accuracy: nil).where.not(speed:nil).where("speed != ?", "Infinity")
    # user_topics = current_user.user_topics.where.not(speed: "NaN")
    # user_topics = user_topics.joins(:topic).where('topics.type = ?', params[:type].camelize) if params[:type].present?
    @user_topics = user_topics.order(id: :desc).limit(10)
    # user_topics = current_user.user_topics.where.not(wrong_letter: nil)
  
  end
end