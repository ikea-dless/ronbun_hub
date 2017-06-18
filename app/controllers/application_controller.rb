# frozen_string_literal: true

class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def authenticate_user!
    redirect_back_or_to(sign_in_user_path) unless logged_in?
  end
end
