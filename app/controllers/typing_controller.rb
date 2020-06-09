class TypingController < ApplicationController
  def index
    @articles = Article.all

    if current_user
    
      @done_article = current_user.user_topics.joins(:topic).where('topics.type = ?', 'Article').where.not(accuracy: nil).pluck(:topic_id).uniq
  
      @all_progress = {}

      @articles.each do |article|
        max_accuracy = current_user.user_topics.where(topic_id: article.id).maximum(:accuracy)

        case max_accuracy
        when 100
          @all_progress.merge!({article.id => 5})
        when (80.0..99.9)
          @all_progress.merge!({article.id => 4})
        when (60.0..79.9) 
          @all_progress.merge!({article.id => 3})
        when (40.0..59.9)
          @all_progress.merge!({article.id => 2})
        when (20.0..39.9)
          @all_progress.merge!({article.id => 1})
        else
          @all_progress.merge!({article.id => 0})
        end
      end
      
    # u1.user_topics.select('Max(accuracy), topic_id').group(:topic_id).all
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
