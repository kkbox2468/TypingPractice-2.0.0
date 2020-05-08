class TypingController < ApplicationController
  def index
    @articles = Article.all
  end
  def show
    @article = Article.find(params[:id]).content.split(//) 
    @a2 = Article.find(params[:id]).content

    str = Article.find(params[:id]).content
    test_ar = str.split('#')
    @code_item = test_ar.map{|c| c.split(//) }
  end
  def new
    @articles = Article.new
  end
  def create
    @articles = Article.new(clean_article)
    if @articles.save
      redirect_to typing_index_path
    else
      render json: params
    end
  end

  private
  def clean_article
    params.require(:article).permit(:content)
  end
end
