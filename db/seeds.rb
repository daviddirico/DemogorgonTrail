# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


t.bigint "campaign_id", null: false
t.string "name", null: false
t.boolean "hero", null: false
t.string "race", null: false
t.string "classification", null: false
t.integer "level", null: false
t.integer "strength", null: false
t.integer "defense", null: false
t.integer "hitpoints", null: false
t.datetime "created_at", null: false
t.datetime "updated_at", null: false
