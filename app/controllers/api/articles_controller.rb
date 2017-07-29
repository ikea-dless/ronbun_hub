class Api::ArticlesController < Api::ApplicationController
  before_action :set_article, only: %i[show]

  def create
    article = current_user.articles.create!(article_params)
    render json: article
  end

  def show
    render json: @article
  end

  private

  def article_params
    params.require(:article).permit(:content)
  end

  def set_article
    @article = Article.find(params[:id])
  end
end
