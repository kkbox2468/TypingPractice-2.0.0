class BattleRecord < ApplicationRecord
  include RailsAdminCharts

  belongs_to :user_a, class_name: :User
  belongs_to :user_b, class_name: :User

  belongs_to :topic
end
