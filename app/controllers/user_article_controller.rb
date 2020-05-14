class UserArticleController < ApplicationController
  def  create 
    # byebug
      # @article = ...
        @user_article  = UserArticle.create(article_params)
        # redirect_to typing_path(1)
        redirect_to request.referrer
  end

  private
  
  def article_params
    params.require("user_article").permit("time", "speed","user_id","article_id")
  end
end
