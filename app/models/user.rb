# frozen_string_literal: true

class User < ApplicationRecord
  authenticates_with_sorcery! do |config|
    config.authentications_class = Authentication
  end

  has_many :authentications, dependent: :destroy
  has_many :articles, dependent: :restrict_with_exception
end
