# frozen_string_literal: true

source "https://rubygems.org"

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem "rails", "~> 5.1.1"
gem "mysql2", ">= 0.3.18", "< 0.5"
gem "puma", "~> 3.7"
gem "sorcery", "~> 0.1"
gem "oauth2", "~> 1.3"
gem "webpacker", "~> 2.0"
gem "active_model_serializers", "~> 0.10.6"
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 3.0'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

group :development, :test do
  gem "pry-rails"
  gem "pry-byebug"
  gem "rubocop", require: false
end

group :development do
  gem "listen", ">= 3.0.5", "< 3.2"
end
