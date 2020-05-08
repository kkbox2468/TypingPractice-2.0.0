class TypingController < ApplicationController
  def index
    @articles = Article.all
  end
  def show
    @article = Article.find(params[:id]).content.split(//) 
    @a2 = Article.find(params[:id]).content
    @code_item = [ "arr.select {|a| a > 3} ", "arr.reject {|a| a < 3} "," arr.drop_while {|a| a < 4}" ]
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
