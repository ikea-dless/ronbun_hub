# frozen_string_literal: true

class Article < ApplicationRecord
  after_update_commit :broadcast

  belongs_to :user
  has_many :comments, dependent: :destroy

  validates :content, presence: true, allow_blank: true

  private

  def broadcast
    ActionCable.server.broadcast("article_#{id}", self)
  end
end
