class PlaygroundController < ApplicationController
  def index

    if current_user
      # all_progress = current_user.user_topics.where.not(accuracy: nil).order('topic_id')
     

      done_article_count = current_user.user_topics.joins(:topic).where('topics.type = ?', 'Article').where.not(accuracy: nil).pluck(:topic_id).uniq.count

      done_ruby_count = current_user.user_topics.joins(:topic).where('topics.type = ?', 'Ruby').where.not(accuracy: nil).pluck(:topic_id).uniq.count

      
      

      # @done_customization = current_user.user_topics.where(topic_id: @user_topics.pluck(:id)).where.not(accuracy: nil).pluck(:topic_id).uniq

      # article_progress = []
      # code_progress = []


      # all_progress.each do |progress|
      #   if progress.topic_id < 30
      #     article_progress.push(progress)
      #   else
      #     code_progress.push(progress)
      #   end
      # end

      # articles = []
      # codes = []
      # Topic.order('type').select do |i|
      #   if i.type == "Article"
      #     articles.push(i)
      #   else i.type == "code"
      #     codes.push(i)
      #   end
      # end
      # articles_count = articles.count
      # codes_count = codes.count

      # topics = current_user.user_topics.joins(:topic)

      # if topics.where('topics.type = ?', 'Article').present?
        # @article_progress = (article_progress.each.map{|i|i.accuracy}.reduce(:+)/articles_count).floor(2)
        
        #沒換算百分比？？
        @article_progress = (done_article_count.fdiv(Article.count)*100).floor(2)
      # end

      # if topics.where('topics.type = ?', 'Ruby').present?
        # @code_progress = (code_progress.each.map{|i|i.accuracy}.reduce(:+)/codes_count).floor(2)
        @code_progress = (done_ruby_count.fdiv(Ruby.count)*100).floor(2)
      # end
      # byebug

    end
  end

  def show
  end
end