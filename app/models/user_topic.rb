class UserTopic < ApplicationRecord
  include RailsAdminCharts
  belongs_to :user
  belongs_to :topic
end
