# frozen_string_literal: true

class ArticleChannel < ApplicationCable::Channel
  def subscribed
    stream_from article
  end

  def update(article)
    if article.update(content: article["content"])
      broadcast_to(@article)
    end
  end

  private

  def article
    Article.find(params[:room])
  end
end
