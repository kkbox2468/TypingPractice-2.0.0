class UserTopic < ApplicationRecord
  include RailsAdminCharts
  belongs_to :user
  belongs_to :topic






  def self.graph_data(since = 30.days.ago)
    # UserTopic.group(:accuracy).count.to_a
    # Output
    
    user_acurracy = UserTopic.group("user_id").maximum(:accuracy).to_a

    people_count = Array.new(6,0)
    user_acurracy.each do |item|
      
      case item[1]
      when 100
        people_count[0] = people_count[0]+1
      when (80.0..99.9)
        people_count[1] = people_count[1]+1
      when (60.0..79.9) 
        people_count[2] = people_count[2]+1
      when (40.0..59.9)
        people_count[3] = people_count[3]+1
      when (20.0..39.9)
        people_count[4] = people_count[4]+1
      else
        people_count[5] = people_count[5]+1
      end
      
    end
    
    [["100%", people_count[0]], ["80.0～99.9%", people_count[1]],["60.0～79.9%", people_count[2]],["40.0～59.9%", people_count[3]],["20.0～39.9%", people_count[4]],["0.0～19.9%", people_count[5]]]
    
  end

  def self.chart_type
    'pie'
  end
  
end

