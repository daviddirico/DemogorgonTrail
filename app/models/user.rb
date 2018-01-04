class User < ApplicationRecord
  has_many :campaigns
  has_many :characters

  # before_save { self.email = email.downcase }

  validates :username,  presence: true, length: { maximum: 50 }, uniqueness: true

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i

  validates :email, presence: true, length: { maximum: 255 },
                    format: { with: VALID_EMAIL_REGEX },
                    uniqueness: true

  has_secure_password

  validates :password, presence: true, length: { minimum: 8 }

  mount_uploader :profile_photo, ProfilePhotoUploader

  # def admin?
  #   role == "admin"
  # end
end
