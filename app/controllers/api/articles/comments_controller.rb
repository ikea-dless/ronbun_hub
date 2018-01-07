# frozen_string_literal: true

class Api::Articles::CommentsController < Api::ApplicationController
  before_action :set_article, only: %i[create]

  def create
    comment = @article.comments.build(comment_params)
    comment.user = current_user
    comment.save!
    render json: @article.comments
  end

  private

  def comment_params
    params.require(:comment).permit(:body)
  end

  def set_article
    @article = Article.find(params[:article_id])
  end
end
