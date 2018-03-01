# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



# already seeded

# Character.create([
#     {
#       user_id: 1,
#       name: "Skeleton Warrior",
#       hero: false, race: "skeleton",
#       classification: "warrior",
#       level: 1,
#       current_strength: 4,
#       current_defense: 4,
#       current_speed: 4,
#       current_hitpoints: 4,
#       max_strength: 4,
#       max_speed: 4,
#       max_defense: 4,
#       max_hitpoints: 4,
#       experience: 1
#     },
#     {
#       user_id: 1,
#       name: "Skeleton Ranger",
#       hero: false, race: "skeleton",
#       classification: "ranger",
#       level: 1,
#       current_strength: 5,
#       current_speed: 4,
#       current_defense: 3,
#       current_hitpoints: 3,
#       max_strength: 5,
#       max_speed: 4,
#       max_defense: 3,
#       max_hitpoints: 3,
#       experience: 1
#     },
#     {
#       user_id: 1,
#       name: "Zombie",
#       hero: false,
#       race: "zombie",
#       classification: "warrior",
#       level: 1,
#       current_strength: 3,
#       current_speed: 3,
#       current_defense: 5,
#       current_hitpoints: 6,
#       max_strength: 3,
#       max_speed: 3,
#       max_defense: 5,
#       max_hitpoints: 6,
#       experience: 2
#     },
#     {
#       user_id: 1,
#       name: "Dark Wizard",
#       hero: false,
#       race: "human",
#       classification: "wizard",
#       level: 2,
#       current_strength: 5,
#       current_speed: 4,
#       current_defense: 3,
#       current_hitpoints: 4,
#       max_strength: 5,
#       max_speed: 4,
#       max_defense: 3,
#       max_hitpoints: 4,
#       experience: 4
#     },
#     {
#       user_id: 1,
#       name: "Lizardman",
#       hero: false,
#       race: "lizard",
#       classification: "warrior",
#       level: 3,
#       current_strength: 12,
#       current_speed: 15,
#       current_defense: 14,
#       current_hitpoints: 20,
#       max_strength: 12,
#       max_speed: 15,
#       max_defense: 14,
#       max_hitpoints: 20,
#       experience: 20
#     },
#     {
#       user_id: 1,
#       name: "Bugbear",
#       hero: false,
#       race: "bugbear",
#       classification: "warrior",
#       level: 4,
#       current_strength: 15,
#       current_speed: 13,
#       current_defense: 18,
#       current_hitpoints: 24,
#       max_strength: 15,
#       max_speed: 13,
#       max_defense: 18,
#       max_hitpoints: 24,
#       experience: 45
#     }
#   ])
#
#   Item.create([
#     {
#       name: "Basic Sword", item_type: "weapon", findable: false, rare: false, droppable: true, battle_affecting: true, mod_type: "str", mod_value: 1,
#       description: "A basic sword. There is nothing special about this."
#     },
#     {
#       name: "Basic Armor", item_type: "armor", findable: false, rare: false, droppable: true, battle_affecting: true, mod_type: "def", mod_value: 1,
#       description: "A set of metal armor. This will help protect you in battle, but do not depend deeply on it."
#     },
#     {
#       name: "Lost Notebook", item_type: "special", findable: false, rare: false, droppable: false, battle_affecting: false,
#       description: "Someone is looking for this."
#     },
#     {
#       name: "Health Potion", item_type: "consumable", findable: true, rare: false, droppable: true, battle_affecting: true, mod_type: "hp", mod_value: 3,
#       description: "This looks healthy to drink."
#     }
#   ])

  # Town.create([
  #   {
  #     name: "Mithralin", leader: "Princess Tabatha", definition: 0, town_need: "level", level_threshold: 2,
  #     narrative: "It is terrible! My father, King Balter, has been taken by the Mighty Demogorgon. Please help find him and defeat the evil that has tarnished these lands. If you can prove to me that you are brave enough to combat the evil of these lands, I shall trust you with this dangerous quest.  Please return to me when you have increased in power.",
  #     objective: " has asked you to return to her when you have become stronger.",
  #   },
  #   {
  #     name: "Scrubville", leader: "Lord Shabby", definition: 1, town_need: "item", item_name: "Lost Notebook",
  #     narrative: "Welcome to our modest village. But I cannot let you past our gates, it is far too dangerous out there! However, should you find my Notebook which I must have dropped close to the trail and return it to me, then you will have demonstrated the bravery necessary for travel past my gates, and I shall let you roam wherever you wish.",
  #     objective: " has requested you to find his Lost Notebook. If returned to him, he shall let you past his gates into the Great Fields.",
  #   }
  # ])



# Event.create([
#     {name: "enemy"},
#     {name: "enemy", rare: true},
#     {name: "town"},
#     {name: "town", rare: true},
#     {name: "loot"},
#     {name: "loot", rare: true},
#     {name: "bad_luck", rare: true},
#     {name: "good_luck", rare: true},
#     {name: "boss"},
#     {name: "last_boss"}
#   ])
