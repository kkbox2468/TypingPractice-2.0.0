class UserArticleController < ApplicationController
  def  create 
    @user_article  = UserArticle.create(article_params)
  end

  private

  def article_params
    params.require(:user_article).permit(:time, 
                                         :speed, 
                                         :user_id,
                                         :letter_count, 
                                         :article_id, 
                                         :wrong_letter, 
                                         :wrong_letter_count,
                                         :accuracy)
  end
end
