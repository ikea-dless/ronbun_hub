# frozen_string_literal: true

class Comment < ApplicationRecord
  after_create_commit :broadcast

  belongs_to :article
  belongs_to :user

  validates :body, presence: true

  private

  def broadcast
    ActionCable.server.broadcast("article_#{article_id}_comment", Comment.where(article: article))
  end
end
