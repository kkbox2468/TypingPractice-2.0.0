class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  include RailsAdminCharts

  devise :database_authenticatable, :registerable,
        :recoverable, :rememberable, :validatable

        

  # devise :omniauthable, omniauth_providers: %i[facebook]
  devise :omniauthable, omniauth_providers: [:facebook,:github, :google_oauth2]


  
  
  
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
  has_many :rooms

  mount_uploader :photo, AvatarUploader

  

          
  def self.from_omniauth(auth)
    
    where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      user.email = auth.info.email
      user.password = Devise.friendly_token[0, 20]
      user.nickname = auth.info.name   # assuming the user model has a name
      # user.name = auth.info.name   # assuming the user model has a name
      # user.image = auth.info.image # assuming the user model has an image
      user.remote_photo_url = auth.info.image # assuming the user model has an image
      # If you are using confirmable and the provider(s) you use validate emails, 
      # uncomment the line below to skip the confirmation emails.
      # user.skip_confirmation!
    end
    
  end

  def self.new_with_session(params, session)
    super.tap do |user|
      if data = session["devise.facebook_data"] && session["devise.facebook_data"]["extra"]["raw_info"]
        user.email = data["email"] if user.email.blank?
      end
    end
  end

end
