class StatsController < ApplicationController
  def index
    if current_user
      find_type_history 
    else
      redirect_to typing_index_path, notice: '還不是會員嗎？加入會員來記錄成果！'
    end
  
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

