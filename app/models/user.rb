class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  include RailsAdminCharts

  devise :database_authenticatable, :registerable,
        :recoverable, :rememberable, :validatable

        

  # devise :omniauthable, omniauth_providers: %i[facebook]
  devise :omniauthable, omniauth_providers: [:facebook,:github, :google_oauth2]


  
  validates :email, presence: true, uniqueness: true
  validates :nickname, presence: true, uniqueness: true, length: { maximum: 10 }
  


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

  def self.graph_data since=1.days.ago
    [
      {
          name: 'Admin Users',
          pointInterval: point_interval = 1.day * 1000,
          pointStart: start_point = since.to_i * 1000,
          data: self.where.not(id:nil).delta_records_since(since)
      }
    ]
  end

          
  # def self.from_omniauth(auth)
    
  #   where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
  #     user.email = auth.info.email
  #     user.password = Devise.friendly_token[0, 20]
  #     user.nickname = auth.info.name   # assuming the user model has a name
  #     # user.name = auth.info.name   # assuming the user model has a name
  #     # user.image = auth.info.image # assuming the user model has an image
  #     user.remote_photo_url = auth.info.image # assuming the user model has an image
  #     # If you are using confirmable and the provider(s) you use validate emails, 
  #     # uncomment the line below to skip the confirmation emails.
  #     # user.skip_confirmation!
  #   end
    
  # end

   def self.from_omniauth(auth)
    
    user = find_or_initialize_by(provider: auth.provider, uid: auth.uid)
    
    # user.email = auth.info.email
    # user.password = Devise.friendly_token[0, 20]
    # user.nickname = auth.info.name   # assuming the user model has a name
    # user.remote_photo_url = auth.info.image # assuming the user model has an image
    
    # user.save
    user
    
  end

  def self.new_with_session(params, session)
    
    super.tap do |user| # super會呼叫父類別中的self.new_with_session(params, session)方法並回傳當下的User物件
      
      if data = session["devise.social_login_data"] 
    
        user.email = session["devise.social_login_data"]["info"]["email"] if user.email.blank?
        user.nickname = session["devise.social_login_data"]["info"]["name"] if user.nickname.blank?
        user.remote_photo_url = session["devise.social_login_data"]["info"]["image"] if user.photo_url.blank?
        user.provider = session["devise.social_login_data"]["provider"] if user.provider.blank?
        user.uid = session["devise.social_login_data"]["uid"] if user.uid.blank?
        # user.email = session["devise.facebook_data"]["info"]["email"] if user.email.blank?
        # user.nickname = session["devise.facebook_data"]["info"]["name"] if user.nickname.blank?
        # user.remote_photo_url = session["devise.facebook_data"]["info"]["image"] if user.photo_url.blank?
        # user.provider = session["devise.facebook_data"]["provider"] if user.provider.blank?
        # user.uid = session["devise.facebook_data"]["uid"] if user.uid.blank?
      end
    end
    
  end

end
