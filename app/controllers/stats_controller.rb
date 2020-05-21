class StatsController < ApplicationController
  def index
    find_type_history  
    
  end

  private

  def find_type_history 
    @user_article = UserArticle.find_by(params[:id])
  end

  def article_params
    params.require(:user_article).permit( :time, 
                                          :speed, 
                                          :user_id,
                                          :letter_count, 
                                          :article_id, 
                                          :wrong_letter, 
                                          :wrong_letter_count,
                                          :accuracy)
  end
end

