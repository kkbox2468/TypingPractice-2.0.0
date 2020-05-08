class CodingController < ApplicationController
  def index
    # render :file => "#{Rails.root}/public/404.html",  layout: false, status: :not_found
    @codes = Code.all
  end
  def new
    @codes = Code.new
  end
  def create
    @codes = Code.new(clean_code)
    if @codes.save
      redirect_to coding_index_path
    else
      render json: params
    end
  end
  def show
    str = Code.find(params[:id]).content
    test_ar = str.split('#')
    @code_item = test_ar.map{|c| c.split(//) }
  end
  def edit
    @codes = Code.find(params[:id])
  end
  def update
    @codes = Code.find(params[:id])
    if @codes.update(clean_code)
      redirect_to coding_index_path
    else
      render :edit
    end
  end
  def destroy
    @codes = Code.find(params[:id])
    @codes.destroy
    redirect_to coding_index_path
  end



  private
  def clean_code
    params.require(:code).permit(:content)
  end
end
