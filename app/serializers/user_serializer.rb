class UserSerializer < ActiveModel::Serializer

  attributes :id, :username, :profile_photo

  has_one :campaign
  has_many :characters
end
