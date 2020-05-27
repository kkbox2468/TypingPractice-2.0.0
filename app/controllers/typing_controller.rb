class TypingController < ApplicationController
  def index
    @articles = Article.all

    if current_user
      @done_article = current_user.user_topics.pluck(:topic_id).uniq
      # @progress = current_user.user_topics.joins(:topic_id, :accruacy).count
    end

  end 

  def new
    @articles = Article.new
  end

  def create
    @articles = Article.new(clean_article) if current_user

    if @articles.save
      redirect_to typing_index_path, notice: 'The typing topic has created!'
    else
      redirect_to typing_index_path , notice: 'False, try again?'
    end

  end

  def show
  
    @article = Article.find(params[:id])
    @topic_article = @article.content.split(//)
    @user_topic  = UserTopic.new
    
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
