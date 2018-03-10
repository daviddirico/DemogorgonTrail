# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



# = already seeded

Character.create([
    {
      user_id: 1,
      name: "Skeleton Warrior",
      hero: false, race: "skeleton", classification: "warrior",
      level: 1,
      current_strength: 4, current_defense: 4, current_speed: 5, current_hitpoints: 4,
      max_strength: 4, max_speed: 5, max_defense: 4, max_hitpoints: 4,
      experience: 1
    },
    {
      user_id: 1,
      name: "Skeleton Ranger",
      hero: false, race: "skeleton", classification: "ranger",
      level: 1,
      current_strength: 5, current_speed: 5, current_defense: 3, current_hitpoints: 4,
      max_strength: 5, max_speed: 5, max_defense: 3, max_hitpoints: 4,
      experience: 1
    },
    {
      user_id: 1,
      name: "Zombie",
      hero: false,
      race: "zombie", classification: "warrior",
      level: 1,
      current_strength: 3, current_speed: 3, current_defense: 5, current_hitpoints: 6,
      max_strength: 3, max_speed: 3, max_defense: 5, max_hitpoints: 6,
      experience: 2
    },
    {
      user_id: 1,
      name: "Dark Wizard",
      hero: false,
      race: "human", classification: "wizard",
      level: 2,
      current_strength: 9, current_speed: 6, current_defense: 3, current_hitpoints: 6,
      max_strength: 9, max_speed: 6, max_defense: 3, max_hitpoints: 6,
      experience: 6
    },
    {
      user_id: 1,
      name: "Lizardman",
      hero: false,
      race: "lizard", classification: "warrior",
      level: 3,
      current_strength: 10, current_speed: 16, current_defense: 14, current_hitpoints: 18,
      max_strength: 10, max_speed: 16, max_defense: 14, max_hitpoints: 18,
      experience: 18
    },
    {
      user_id: 1,
      name: "Bugbear",
      hero: false,
      race: "bugbear", classification: "warrior",
      level: 4,
      current_strength: 13, current_speed: 13, current_defense: 20, current_hitpoints: 28,
      max_strength: 13, max_speed: 13, max_defense: 20, max_hitpoints: 28,
      experience: 40
    },
    {
      user_id: 1,
      name: "Gorgon",
      hero: false,
      race: "gorgon", classification: "ranger",
      level: 5,
      current_strength: 24, current_speed: 24, current_defense: 24, current_hitpoints: 34,
      max_strength: 24, max_speed: 24, max_defense: 24, max_hitpoints: 34,
      experience: 86
    },
    {
      user_id: 1,
      name: "Werewolf",
      hero: false,
      race: "werewolf", classification: "beast",
      level: 6,
      current_strength: 31, current_speed: 31, current_defense: 23, current_hitpoints: 26,
      max_strength: 31, max_speed: 31, max_defense: 23, max_hitpoints: 26,
      experience: 154
    },
    {
      user_id: 1,
      name: "Festrog",
      hero: false,
      race: "festrog", classification: "monster",
      level: 7,
      current_strength: 30, current_speed: 30, current_defense: 35, current_hitpoints: 38,
      max_strength: 30, max_speed: 30, max_defense: 35, max_hitpoints: 38,
      experience: 292
    }
  ])

  Item.create([
    {
      name: "Basic Sword", item_type: "weapon", findable: false, rare: false, droppable: false, battle_affecting: true, mod_type: "str", mod_value: 1,
      description: "A basic sword. There is nothing special about this."
    },
    {
      name: "Basic Armor", item_type: "armor", findable: false, rare: false, droppable: false, battle_affecting: true, mod_type: "def", mod_value: 1,
      description: "A set of metal armor. This will help protect you in battle, but do not depend deeply on it."
    },
    {
      name: "Demon Edge", item_type: "weapon", findable: true, rare: true, droppable: false, battle_affecting: true, mod_type: "def", mod_value: 10,
      description: "A set of metal armor. This sword is from the depths, and will serve you well against evil."
    },
    {
      name: "Steel Armor", item_type: "armor", findable: true, rare: true, droppable: false, battle_affecting: true, mod_type: "def", mod_value: 10,
      description: "This armor is heavy and sturdy. It should be quite dependable in battle."
    },
    {
      name: "Lost Notebook", item_type: "special", findable: false, rare: false, droppable: false, battle_affecting: false,
      description: "Someone is looking for this..."
    },
    {
      name: "Health Potion", item_type: "consumable", findable: true, rare: false, droppable: true, battle_affecting: true, permanent: true, mod_type: "hp", mod_value: 5,
      description: "This looks healthy to drink."
    },
    {
      name: "Greater Health Potion", item_type: "consumable", findable: true, rare: true, droppable: true, battle_affecting: true, permanent: true, mod_type: "hp", mod_value: 20,
      description: "This looks very healthy to drink."
    },
    {
      name: "Strength Potion", item_type: "consumable", findable: true, rare: true, droppable: true, battle_affecting: true, permanent: true, mod_type: "str", mod_value: 3,
      description: "Drinking this potion will permanently increase your strength."
    },
    {
      name: "Speed Potion", item_type: "consumable", findable: true, rare: true, droppable: true, battle_affecting: true, permanent: true, mod_type: "spd", mod_value: 3,
      description: "Drinking this potion will permanently increase your speed."
    },
    {
      name: "Defense Potion", item_type: "consumable", findable: true, rare: true, droppable: true, battle_affecting: true, permanent: true, mod_type: "def", mod_value: 3,
      description: "Drinking this potion will permanently increase your defense."
    },
    {
      name: "Potion of Exertion", item_type: "consumable", findable: true, rare: false, droppable: true, battle_affecting: true, permanent: false, mod_type: "str", mod_value: 6,
      description: "Drinking this potion will increase your strength for your next fight with enemies."
    },
    {
      name: "Potion of Sprinting", item_type: "consumable", findable: true, rare: false, droppable: true, battle_affecting: true, permanent: false, mod_type: "spd", mod_value: 6,
      description: "Drinking this potion will increase your speed for your next fight with enemies."
    },
    {
      name: "Potion of Bracing", item_type: "consumable", findable: true, rare: false, droppable: true, battle_affecting: true, permanent: false, mod_type: "def", mod_value: 6,
      description: "Drinking this potion will increase your defense for your next fight with enemies."
    }
  ])

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
