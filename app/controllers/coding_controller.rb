class CodingController < ApplicationController
  def index
    # render :file => "#{Rails.root}/public/404.html",  layout: false, status: :not_found
    @codes = Ruby.all
    
    if current_user
      @done_rubies = current_user.user_topics.pluck(:topic_id).uniq
      topics = UserTopic.all
      @all_progress = {}

      topics.each do |topic|
        progress = current_user.user_topics.where(topic_id: topic.topic_id).order('accuracy').last
        
        case progress.accuracy
        when 100
          @all_progress.merge!({topic.topic_id => 5})
        when (80.0..99.9)
          @all_progress.merge!({topic.topic_id => 4})
        when (60.0..79.9) 
          @all_progress.merge!({topic.topic_id => 3})
        when (40.0..59.9)
          @all_progress.merge!({topic.topic_id => 2})
        when (0.1..39.9)
          @all_progress.merge!({topic.topic_id => 1})
        end
        
      end
    end

  end
  
  def new
    @codes = Ruby.new
  end

  def create
    @codes = Ruby.new(clean_code)
    if @codes.save
      redirect_to coding_index_path, notice: 'The coding topic has created!'
    else
      render json: params
    end
  end

  def show
    @codes = Ruby.find(params[:id])
    test_ar = @codes.content.split('#')
    @code_item = test_ar.map{|c| c.split(//) }
    
    @user_topic  = UserTopic.new
    
  end

  def edit
    @codes = Ruby.find(params[:id])
  end

  def update
    @codes = Ruby.find(params[:id])
    if @codes.update(clean_code)
      redirect_to coding_index_path, notice: 'The coding topic has updated!'
    else
      render :edit
    end
  end

  def destroy
    @codes = Ruby.find(params[:id])
    @codes.destroy
    redirect_to coding_index_path, alert: 'The coding topic has destroyed!'
  end



  private
  def clean_code
    params.require(:ruby).permit(:content)
  end
end
