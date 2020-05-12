class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
<<<<<<< HEAD
         :recoverable, :rememberable, :validatable



  has_many :user_articles
  has_many :articles, through: :user_articles
=======
          :recoverable, :rememberable, :validatable
>>>>>>> welcome_canvas
end
