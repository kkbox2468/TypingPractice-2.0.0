class TypingController < ApplicationController
  def index
    @articles = Article.all
  end

  def new
    @articles = Article.new
  end
  def create
    @articles = Article.new(clean_article)
    if @articles.save
      redirect_to typing_index_path, notice: 'The typing topic has created!'
    else
      render json: params
    end
  end
  def show
    @article = Article.find(params[:id]).content.split(//) 
  end

  def edit
    @article = Article.find(params[:id])
  end
  def update
    @article = Article.find(params[:id])
    if @article.update(clean_article)
      redirect_to typing_index_path, notice: 'The typing topic has updated!'
    else
      render :edit
    end
  end
  def destroy
    @article = Article.find(params[:id])
    @article.destroy
    redirect_to typing_index_path, alert: 'The typing topic has destroyed!'
  end


  private
  def clean_article
    params.require(:article).permit(:content)
  end
end
