class TypingController < ApplicationController
  def index
    @articles = Article.all
  end
  def show
  end
  def new
    @articles = Article.new
  end
  def create
    @articles = Article.new(clean_article)
    if @articles.save
      redirect_to root_path
    else
      render json: params
    end
  end

  private
  def clean_article
    params.require(:article).permit(:content)
  end
end
