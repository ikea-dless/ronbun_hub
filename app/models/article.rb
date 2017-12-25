# frozen_string_literal: true

class Article < ApplicationRecord
  after_update_commit :broadcast

  belongs_to :user

  validates :content, presence: true, allow_blank: true

  private

  def broadcast
    ActionCable.server.broadcast("article_#{id}", self)
  end
end
