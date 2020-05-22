class UserArticleController < ApplicationController
  def  create 
    @user_article  = UserArticle.new(article_params)
    @user_article.user_id  = current_user.id
    if @user_article.save
      render json: { ok: true }
    else
      render json: { ok: false, message: @user_article.errors.full_messages }
    end
  end

  private

  def article_params
    params.require(:user_article).permit(:time, 
                                         :speed, 
                                         :letter_count, 
                                         :article_id, 
                                         :wrong_letter, 
                                         :wrong_letter_count,
                                         :accuracy)
  end
end
