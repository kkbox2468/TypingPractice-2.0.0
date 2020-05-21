class StatsController < ApplicationController
  def index
    if current_user
      find_type_history 
    else
      redirect_to typing_index_path, notice: '還不是會員嗎？加入會員來記錄成果！'
    end
  
    # find_type_history  
    # @article_accuracy = UserArticle.find_by(params[:id])
    @arti_accuracy = current_user.user_articles.average(:accuracy).to_f #從current user抓底下create的所有文章裡的準確度.average可以算平均再算成浮點數
    @arti_wpm = current_user.user_articles.average(:speed).to_i
    
    @arti_date = current_user.user_articles.map(&:created_at)
    @arti_amount = current_user.user_articles.average(:letter_count).to_i
    @articles = current_user.user_articles
    # render json: @articles
  end

  private

  def find_type_history 
    @user_article = UserArticle.find_by(params[:id])
  end

  def article_params
    params.require(:user_article).permit( :time, 
                                          :speed, 
                                          :letter_count, 
                                          :article_id, 
                                          :wrong_letter, 
                                          :wrong_letter_count,
                                          :accuracy)
  end
end

