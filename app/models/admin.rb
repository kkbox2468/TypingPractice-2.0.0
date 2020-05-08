# class Admin < ApplicationRecord
#   # Include default devise modules. Others available are:
#   # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
#   devise :database_authenticatable, :registerable,
#          :recoverable, :rememberable, :validatable
# end
class Admin < ActiveRecord::Base
  devise :database_authenticatable, :trackable, :timeoutable, :lockable 
end