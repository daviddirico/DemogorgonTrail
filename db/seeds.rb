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
      experience: 4
    },
    {
      user_id: 1,
      name: "Lizardman",
      hero: false,
      race: "lizard", classification: "warrior",
      level: 3,
      current_strength: 10, current_speed: 16, current_defense: 14, current_hitpoints: 18,
      max_strength: 10, max_speed: 16, max_defense: 14, max_hitpoints: 18,
      experience: 10
    },
    {
      user_id: 1,
      name: "Bugbear",
      hero: false,
      race: "bugbear", classification: "warrior",
      level: 4,
      current_strength: 13, current_speed: 13, current_defense: 20, current_hitpoints: 28,
      max_strength: 13, max_speed: 13, max_defense: 20, max_hitpoints: 28,
      experience: 18
    },
    {
      user_id: 1,
      name: "Gorgon",
      hero: false,
      race: "gorgon", classification: "ranger",
      level: 5,
      current_strength: 24, current_speed: 24, current_defense: 24, current_hitpoints: 34,
      max_strength: 24, max_speed: 24, max_defense: 24, max_hitpoints: 34,
      experience: 28
    },
    {
      user_id: 1,
      name: "Werewolf",
      hero: false,
      race: "werewolf", classification: "beast",
      level: 6,
      current_strength: 31, current_speed: 31, current_defense: 25, current_hitpoints: 29,
      max_strength: 31, max_speed: 31, max_defense: 25, max_hitpoints: 29,
      experience: 40
    },
    {
      user_id: 1,
      name: "Festrog",
      hero: false,
      race: "festrog", classification: "monster",
      level: 7,
      current_strength: 30, current_speed: 30, current_defense: 35, current_hitpoints: 38,
      max_strength: 30, max_speed: 30, max_defense: 35, max_hitpoints: 38,
      experience: 52
    },
    {
      user_id: 1,
      name: "Ghoul",
      hero: false,
      race: "ghoul", classification: "monster",
      level: 8,
      current_strength: 33, current_speed: 33, current_defense: 33, current_hitpoints: 40,
      max_strength: 33, max_speed: 33, max_defense: 33, max_hitpoints: 40,
      experience: 66
    },
    {
      user_id: 1,
      name: "Kobald",
      hero: false,
      race: "kobald", classification: "warrior",
      level: 9,
      current_strength: 30, current_speed: 40, current_defense: 38, current_hitpoints: 38,
      max_strength: 30, max_speed: 40, max_defense: 38, max_hitpoints: 38,
      experience: 80
    },
    {
      user_id: 1,
      name: "Giant Scorpion",
      hero: false,
      race: "scorpion", classification: "beast",
      level: 9,
      current_strength: 40, current_speed: 34, current_defense: 35, current_hitpoints: 48,
      max_strength: 40, max_speed: 34, max_defense: 35, max_hitpoints: 48,
      experience: 82
    },
    {
      user_id: 1,
      name: "Demon",
      hero: false,
      race: "demon", classification: "demon",
      level: 10,
      current_strength: 40, current_speed: 39, current_defense: 39, current_hitpoints: 45,
      max_strength: 40, max_speed: 39, max_defense: 39, max_hitpoints: 45,
      experience: 100
    },
    {
      user_id: 1,
      name: "Choker",
      hero: false,
      race: "choker", classification: "monster",
      level: 11,
      current_strength: 41, current_speed: 44, current_defense: 43, current_hitpoints: 42,
      max_strength: 41, max_speed: 44, max_defense: 43, max_hitpoints: 42,
      experience: 120
    },
    {
      user_id: 1,
      name: "Goliath",
      hero: false,
      race: "goliath", classification: "warrior",
      level: 12,
      current_strength: 50, current_speed: 35, current_defense: 40, current_hitpoints: 56,
      max_strength: 50, max_speed: 35, max_defense: 40, max_hitpoints: 56,
      experience: 144
    },
    {
      user_id: 1,
      name: "Warlock",
      hero: false,
      race: "warlock", classification: "wizard",
      level: 13,
      current_strength: 52, current_speed: 52, current_defense: 35, current_hitpoints: 40,
      max_strength: 52, max_speed: 52, max_defense: 35, max_hitpoints: 40,
      experience: 170
    },
    {
      user_id: 1,
      name: "Wyrm",
      hero: false,
      race: "wyrm", classification: "monster",
      level: 13,
      current_strength: 44, current_speed: 56, current_defense: 40, current_hitpoints: 44,
      max_strength: 44, max_speed: 56, max_defense: 40, max_hitpoints: 44,
      experience: 172
    },
    {
      user_id: 1,
      name: "Eidolon",
      hero: false,
      race: "eidolon", classification: "monster",
      level: 14,
      current_strength: 52, current_speed: 48, current_defense: 48, current_hitpoints: 52,
      max_strength: 52, max_speed: 48, max_defense: 48, max_hitpoints: 52,
      experience: 210
    },
    {
      user_id: 1,
      name: "Doppelganger",
      hero: false,
      race: "doppelganger", classification: "monster",
      level: 15,
      current_strength: 54, current_speed: 60, current_defense: 60, current_hitpoints: 50,
      max_strength: 54, max_speed: 60, max_defense: 60, max_hitpoints: 50,
      experience: 258
    },
    {
      user_id: 1,
      name: "Archangel",
      hero: false,
      race: "angel", classification: "warrior",
      level: 15,
      current_strength: 56, current_speed: 56, current_defense: 63, current_hitpoints: 54,
      max_strength: 56, max_speed: 56, max_defense: 63, max_hitpoints: 54,
      experience: 260
    },
    {
      user_id: 1,
      name: "Barrowwight",
      hero: false,
      race: "barrowwight", classification: "warrior",
      level: 16,
      current_strength: 63, current_speed: 58, current_defense: 58, current_hitpoints: 58,
      max_strength: 63, max_speed: 58, max_defense: 58, max_hitpoints: 58,
      experience: 326
    },
    {
      user_id: 1,
      name: "Umber",
      hero: false,
      race: "umber", classification: "monster",
      level: 17,
      current_strength: 65, current_speed: 64, current_defense: 64, current_hitpoints: 70,
      max_strength: 65, max_speed: 64, max_defense: 64, max_hitpoints: 70,
      experience: 384
    },
    {
      user_id: 1,
      name: "Hekatron",
      hero: false,
      race: "hekatron", classification: "warrior",
      level: 18,
      current_strength: 70, current_speed: 64, current_defense: 70, current_hitpoints: 74,
      max_strength: 70, max_speed: 64, max_defense: 70, max_hitpoints: 74,
      experience: 456
    },
    {
      user_id: 1,
      name: "Greater Demon",
      hero: false,
      race: "greaterdemon", classification: "demon",
      level: 19,
      current_strength: 80, current_speed: 80, current_defense: 75, current_hitpoints: 80,
      max_strength: 80, max_speed: 80, max_defense: 75, max_hitpoints: 80,
      experience: 560
    },
    {
      user_id: 1,
      name: "Beholder",
      hero: false,
      race: "", classification: "",
      level: 19,
      current_strength: 60, current_speed: 60, current_defense: 80, current_hitpoints: 120,
      max_strength: 60, max_speed: 60, max_defense: 80, max_hitpoints: 120,
      experience: 570
    },
    {
      user_id: 1,
      name: "Mindflayer",
      hero: false,
      race: "mindflayer", classification: "wizard",
      level: 20,
      current_strength: 90, current_speed: 90, current_defense: 80, current_hitpoints: 98,
      max_strength: 90, max_speed: 90, max_defense: 80, max_hitpoints: 98,
      experience: 700
    }
  ])
  #
  # Item.create([
  #   {
  #     name: "Basic Sword", item_type: "weapon", findable: false, rare: false, droppable: false, battle_affecting: true, mod_type: "str", mod_value: 1,
  #     description: "A basic sword. There is nothing special about this."
  #   },
  #   {
  #     name: "Basic Armor", item_type: "armor", findable: false, rare: false, droppable: false, battle_affecting: true, mod_type: "def", mod_value: 1,
  #     description: "A set of metal armor. This will help protect you in battle, but do not depend deeply on it."
  #   },
  #   {
  #     name: "Demon Edge", item_type: "weapon", findable: true, rare: true, droppable: false, battle_affecting: true, mod_type: "def", mod_value: 10,
  #     description: "This sword is from the depths and will serve you well against evil."
  #   },
  #   {
  #     name: "Steel Armor", item_type: "armor", findable: true, rare: true, droppable: false, battle_affecting: true, mod_type: "def", mod_value: 10,
  #     description: "This armor is heavy and sturdy. It should be quite dependable in battle."
  #   },
  #   {
  #     name: "Lost Notebook", item_type: "special", findable: false, rare: false, droppable: false, battle_affecting: false,
  #     description: "Someone is looking for this..."
  #   },
  #   {
  #     name: "Health Potion", item_type: "consumable", findable: true, rare: false, droppable: true, battle_affecting: true, permanent: true, mod_type: "hp", mod_value: 5,
  #     description: "This looks healthy to drink."
  #   },
  #   {
  #     name: "Greater Health Potion", item_type: "consumable", findable: true, rare: true, droppable: true, battle_affecting: true, permanent: true, mod_type: "hp", mod_value: 20,
  #     description: "This looks very healthy to drink."
  #   },
  #   {
  #     name: "Strength Potion", item_type: "consumable", findable: true, rare: true, droppable: true, battle_affecting: true, permanent: true, mod_type: "str", mod_value: 3,
  #     description: "Drinking this potion will permanently increase your strength."
  #   },
  #   {
  #     name: "Speed Potion", item_type: "consumable", findable: true, rare: true, droppable: true, battle_affecting: true, permanent: true, mod_type: "spd", mod_value: 3,
  #     description: "Drinking this potion will permanently increase your speed."
  #   },
  #   {
  #     name: "Defense Potion", item_type: "consumable", findable: true, rare: true, droppable: true, battle_affecting: true, permanent: true, mod_type: "def", mod_value: 3,
  #     description: "Drinking this potion will permanently increase your defense."
  #   },
  #   {
  #     name: "Potion of Exertion", item_type: "consumable", findable: true, rare: false, droppable: true, battle_affecting: true, permanent: false, mod_type: "str", mod_value: 6,
  #     description: "Drinking this potion will increase your strength for your next fight with enemies."
  #   },
  #   {
  #     name: "Potion of Sprinting", item_type: "consumable", findable: true, rare: false, droppable: true, battle_affecting: true, permanent: false, mod_type: "spd", mod_value: 6,
  #     description: "Drinking this potion will increase your speed for your next fight with enemies."
  #   },
  #   {
  #     name: "Potion of Bracing", item_type: "consumable", findable: true, rare: false, droppable: true, battle_affecting: true, permanent: false, mod_type: "def", mod_value: 6,
  #     description: "Drinking this potion will increase your defense for your next fight with enemies."
  #   },
  #   {
  #     name: "Poisonous Potion", item_type: "consumable", findable: true, rare: false, droppable: true, battle_affecting: true, permanent: false, mod_type: "hp", mod_value: -10,
  #     description: "It is pretty clear that this would be dangerous to drink."
  #   }
  # ])

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
