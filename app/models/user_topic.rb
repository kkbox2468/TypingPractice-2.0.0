class UserTopic < ApplicationRecord
  include RailsAdminCharts
  belongs_to :user
  belongs_to :topic


  # def self.graph_data since=7.days.ago
  #   [
  #     {
  #         name: 'User  accuracy',
  #         pointInterval: point_interval = 1.day * 1000,
  #         pointStart: start_point = since.to_i * 1000,
  #         data: self.where.not( accuracy: nil).delta_records_since(since)
  #     },
  #     # {
  #     #     name: 'Standard Users',
  #     #     pointInterval: point_interval,
  #     #     pointStart: start_point,
  #     #     data: self.where(type: nil).delta_records_since(since)
  #     # }
  #   ]
  # end

  def self.graph_data(since = 30.days.ago)
    UserTopic.group(:accuracy).count.to_a
    # Output
    [["Bagmati", 3], ["Gandaki", 3], ["Janakpur", 5]]
  end

  def self.chart_type
    'pie'
  end
end

# UserTopic.where("(accuracy >= 0 AND accuracy <= 19.9) OR (accuracy >= 20.0 AND accuracy <= 39.9) OR (accuracy >= 40.0 AND accuracy <= 59.9) OR (accuracy >= 60.0 AND accuracy <= 79.9) OR (accuracy >= 80.0 AND accuracy <= 09.9) OR (accuracy = 100.0)").group(:accuracy).count

# UserTopic.group("user_id").maximum(:accuracy)