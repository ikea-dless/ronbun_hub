# frozen_string_literal: true

class Api::ArticlesController < Api::ApplicationController
  before_action :set_article, only: %i[show update]

  def create
    article = current_user.articles.create!(article_params)
    render json: article
  end

  def show
    render json: @article
  end

  def update
    @article.update!(article_params)
    render json: @article
  end

  def index
    render json: Article.order(updated_at: :desc)
  end

  private

  def article_params
    params.require(:article).permit(:content)
  end

  def set_article
    @article = Article.find(params[:id])
  end
end
