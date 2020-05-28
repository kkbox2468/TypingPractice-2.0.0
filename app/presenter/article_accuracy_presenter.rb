class ArticleAccuracyPresenter
  def initialize(user)
    @user = user
  end
  
  def perform
    @user.user_topics.where("created_at > ?", Date.today - 6.days).group_by_day('user_topics.created_at').average(:accuracy)
  end

  private 
  
  def user_accuracy
    @user_accuracy ||= @user.user_topics.where("created_at > ?", Date.today - 6.days).group_by_day('user_topics.created_at').average(:accuracy)
  end
end