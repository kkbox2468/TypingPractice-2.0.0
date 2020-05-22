class UserArticleController < ApplicationController
  def  create 
    @user_article  = UserArticle.create(article_params)
    @user_article.user_id  = current_user.id
    @user_article.save
    # byebug
    if @user_article.save
      flash[:niotice] = "Score successfully saved"
      redirect_to typing_index_path
    else
      redirect_to typing_index_path , notice: 'False, try again?'
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
