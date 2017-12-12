class UserSerializer < ActiveModel::Serializer

  attributes :id, :username, :profile_photo

  has_many :campaigns
  has_many :characters
end
