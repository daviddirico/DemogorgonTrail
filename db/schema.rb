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

ActiveRecord::Schema.define(version: 20180309002025) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "campaigns", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.integer "completion", null: false
    t.string "difficulty", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "town"
    t.index ["user_id"], name: "index_campaigns_on_user_id"
  end

  create_table "characters", force: :cascade do |t|
    t.string "name", null: false
    t.boolean "hero", null: false
    t.string "race", null: false
    t.string "classification", null: false
    t.integer "level", null: false
    t.integer "current_strength", null: false
    t.integer "current_defense", null: false
    t.integer "current_hitpoints", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id"
    t.integer "experience", default: 0
    t.integer "max_strength"
    t.integer "max_defense"
    t.integer "max_hitpoints"
    t.boolean "gameover", default: false
    t.integer "current_speed"
    t.integer "max_speed"
    t.text "recent_changes"
    t.integer "next_exp", default: 10
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

  create_table "found_items", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "event_id"
    t.bigint "item_id"
    t.index ["event_id"], name: "index_found_items_on_event_id"
    t.index ["item_id"], name: "index_found_items_on_item_id"
  end

  create_table "inventories", force: :cascade do |t|
    t.bigint "character_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "collection"
    t.text "weapon"
    t.text "armor"
    t.text "slot_1"
    t.index ["character_id"], name: "index_inventories_on_character_id"
  end

  create_table "items", force: :cascade do |t|
    t.string "name", null: false
    t.text "description", null: false
    t.string "item_type", null: false
    t.string "mod_type"
    t.integer "mod_value"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "rare"
    t.boolean "droppable"
    t.boolean "battle_affecting"
    t.boolean "findable", default: false
    t.boolean "permanent"
  end

  create_table "npcs", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "event_id"
    t.bigint "character_id"
    t.index ["character_id"], name: "index_npcs_on_character_id"
    t.index ["event_id"], name: "index_npcs_on_event_id"
  end

  create_table "obtainables", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "inventory_id"
    t.bigint "item_id"
    t.index ["inventory_id"], name: "index_obtainables_on_inventory_id"
    t.index ["item_id"], name: "index_obtainables_on_item_id"
  end

  create_table "towns", force: :cascade do |t|
    t.string "name", null: false
    t.string "leader"
    t.integer "definition", null: false
    t.text "narrative", null: false
    t.text "objective", null: false
    t.string "town_need", null: false
    t.string "item_name"
    t.integer "level_threshold"
    t.string "enemy_requested"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
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
