# frozen_string_literal: true

Rails.application.routes.draw do
  mount ActionCable.server => "/cable"

  get "/client", to: "clients#index"
  get "/client/*all", to: "clients#index"
  get "/" => redirect("/client"), as: :root

  get "oauth/callback" => "oauths#callback"
  get "oauth/:provider" => "oauths#oauth", :as => :auth_at_provider
end
