# frozen_string_literal: true

Rails.application.routes.draw do
  mount ActionCable.server => "/cable"

  get "/client", to: "clients#index"
  get "/client/*all", to: "clients#index"
  get "/" => redirect("/client"), as: :root

  get "oauth/callback" => "oauths#callback"
  get "oauth/:provider" => "oauths#oauth", :as => :auth_at_provider

  namespace :api do
    resources :articles, only: %i[show create update index], module: :articles do
      resources :comments, only: %i[create index]
    end
  end

  resource :user, only: [] do
    get :sign_in
  end
end
