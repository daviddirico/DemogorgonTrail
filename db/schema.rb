# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180120001353) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "campaigns", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.integer "completion", null: false
    t.string "difficulty", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_campaigns_on_user_id"
  end

  create_table "characters", force: :cascade do |t|
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
    t.bigint "user_id"
    t.integer "experience", default: 0
    t.index ["user_id"], name: "index_characters_on_user_id"
  end

  create_table "events", force: :cascade do |t|
    t.string "name", null: false
    t.boolean "invoked", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "rare"
    t.text "info"
    t.bigint "campaign_id"
    t.index ["campaign_id"], name: "index_events_on_campaign_id"
  end

  create_table "inventories", force: :cascade do |t|
    t.bigint "character_id", null: false
    t.string "slot_1"
    t.string "slot_2"
    t.string "slot_3"
    t.string "slot_4"
    t.string "slot_5"
    t.string "weapon"
    t.string "armor"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["character_id"], name: "index_inventories_on_character_id"
  end

  create_table "npcs", force: :cascade do |t|
    t.bigint "characters_id"
    t.bigint "events_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["characters_id"], name: "index_npcs_on_characters_id"
    t.index ["events_id"], name: "index_npcs_on_events_id"
  end

  create_table "users", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "role", default: "member", null: false
    t.string "profile_photo"
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
  end

end
