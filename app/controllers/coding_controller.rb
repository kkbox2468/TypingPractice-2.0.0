class CodingController < ApplicationController
  def index
    # render :file => "#{Rails.root}/public/404.html",  layout: false, status: :not_found
    @codes = Ruby.all
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
    str = Ruby.find(params[:id]).content
    test_ar = str.split('#')
    @code_item = test_ar.map{|c| c.split(//) }
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
