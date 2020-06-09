class PlaygroundController < ApplicationController
  def index

    if current_user
      
      done_article_count = current_user.user_topics.joins(:topic).where('topics.type = ?', 'Article').where.not(accuracy: nil).pluck(:topic_id).uniq.count

      done_ruby_count = current_user.user_topics.joins(:topic).where('topics.type = ?', 'Ruby').where.not(accuracy: nil).pluck(:topic_id).uniq.count
  
      @article_progress = (done_article_count.fdiv(Article.count)*100).floor(2)
     
      @code_progress = (done_ruby_count.fdiv(Ruby.count)*100).floor(2)
     
    end
    
  end

  def show
  end
end