# class Article < ApplicationRecord
class Article < Topic
  
  validates :content, presence: true


  has_many :user_articles
  has_many :users, through: :user_articles
end
