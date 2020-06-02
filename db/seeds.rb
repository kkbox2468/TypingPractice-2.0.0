# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'csv'


article_topic_csv = File.read('db/seeds/article_topic.csv', encoding: 'iso-8859-1')
ruby_topic_csv = File.read('db/seeds/ruby_topic.csv', encoding: 'iso-8859-1')
battle_topic_csv = File.read('db/seeds/battle_topic.csv', encoding: 'iso-8859-1')

article = CSV.parse(article_topic_csv, headers: true)
ruby = CSV.parse(ruby_topic_csv, headers: true)
battle_topic = CSV.parse(battle_topic_csv, headers: true)

count = 0
article.each do |row|

  content = row.to_hash['content'] 
  Article.create(content: content) 
    
  count = count + 1 

end 

puts "#{count} article topics have been saved"


count = 0
ruby.each do |row|

  content = row.to_hash['content'] 
  Ruby.create(content: content) 
    
  count = count + 1 

end 



puts "#{count} ruby topics have been saved"


count = 0
battle_topic.each do |row|

  content = row.to_hash['content'] 
  BattleTopic.create(content: content) 
    
  count = count + 1 

end 



puts "#{count} battle topics have been saved"


