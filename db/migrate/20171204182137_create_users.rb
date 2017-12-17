class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.datetime :created_at, null: false
      t.datetime :updated_at, null: false
      t.string :role, default: "member", null: false
      t.string :profile_photo
      t.string :username, null: false
      t.string :email, null: false
      t.string :password_digest, null: false


      t.timestamps null: false
    end
  end
end
