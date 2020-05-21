class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  
  validates_uniqueness_of :nickname
  validates_uniqueness_of :email


  has_many :user_articles
  has_many :articles, through: :user_articles

  has_many :user_topics
  has_many :topics, through: :user_topics

  
  


  has_many :battle_records, foreign_key: :user_a_id, dependent: :destroy
  has_many :reverse_battle_records, class_name: :BattleRecord,
           foreign_key: :user_b_id, dependent: :destroy

  has_many :users, through: :battle_records, source: :user_b
          
end
