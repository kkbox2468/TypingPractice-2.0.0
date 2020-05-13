class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  
  validates_uniqueness_of :nickname
  validates_uniqueness_of :email


  has_many :user_articles
  has_many :articles, through: :user_articles
          
end
