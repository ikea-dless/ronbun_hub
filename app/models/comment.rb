# frozen_string_literal: true

class Comment < ApplicationRecord
  after_create_commit :broadcast

  belongs_to :article
  belongs_to :user

  validates :body, presence: true

  private

  def broadcast
    comments = Comment.where(article: article).order(updated_at: :desc).map do |c|
      serializer = CommentSerializer.new(c)
      serializer.to_hash
    end
    ActionCable.server.broadcast("article_#{article_id}_comment", comments)
  end
end
