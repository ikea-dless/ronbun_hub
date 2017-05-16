class Message < ApplicationRecord
  after_create_commit { ActionCable.server.broadcast "room_channel", message: content }
end
