class TypingController < ApplicationController
  def index
    @articles = Article.all
  end
  def show
    @article = Article.find(params[:id]).content.split(//) 
    @a2 = Article.find(params[:id]).content
    @a3 = to_half(@article)
  end
  def new
    @articles = Article.new
  end
  def create
    @articles = Article.new(clean_article)
    if @articles.save
      redirect_to root_path
    else
      render json: params
    end
  end

  private
  def clean_article
    params.require(:article).permit(:content)
  end

  def to_half(str)
    full = "　！＂＃＄％＆＇（）＊＋，－．／０１２３４５６７８９：；＜＝＞？＠ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ［＼］＾＿｀ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ｛｜｝～"
    half = " !\"\#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~" 
    str.try(full, half)
  end
end
