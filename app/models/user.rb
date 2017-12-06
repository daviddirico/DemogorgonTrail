class User < ApplicationRecord
  has_many :campaigns
  has_many :characters

  validates_presence_of :username
  validates_presence_of :email
  mount_uploader :profile_photo, ProfilePhotoUploader

  # def admin?
  #   role == "admin"
  # end
end
