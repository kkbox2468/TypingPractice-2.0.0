class UserArticleController < ApplicationController
  def  create 
    # byebug
    @user_article  = UserArticle.create(article_params)
    # redirect_to request.referrer
    redirect_to playground_index_path
  end

  private

  def article_params
    params.require(:user_article).permit(:time, :speed, :user_id, :article_id)
  end
end
