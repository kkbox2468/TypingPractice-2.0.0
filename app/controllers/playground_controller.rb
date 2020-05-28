class PlaygroundController < ApplicationController
  def index

    if current_user
      all_progress = current_user.user_topics.order('topic_id')
      article_progress = []
      code_progress = []

      all_progress.each do |progress|
        if progress.topic_id < 30
          article_progress.push(progress)
        else
          code_progress.push(progress)
        end
      end

      articles = []
      codes = []
      Topic.order('type').select do |i|
        if i.type == "Article"
          articles.push(i)
        else i.type == "code"
          codes.push(i)
        end
      end
      articles_count = articles.count
      codes_count = codes.count


      unless current_user.user_topics.empty?
        @article_progress = (article_progress.each.map{|i|i.accuracy}.reduce(:+)/articles_count).floor(2)
        @code_progress = (code_progress.each.map{|i|i.accuracy}.reduce(:+)/codes_count).floor(2)
      end

    end

  end

  def show
  end
end
