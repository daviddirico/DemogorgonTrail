# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



# already seeded

Character.create([
    {
      user_id: 1,
      name: "Skeleton Warrior",
      hero: false, race: "skeleton",
      classification: "warrior",
      level: 1,
      current_strength: 3,
      current_defense: 3,
      current_speed: 3,
      current_hitpoints: 3,
      max_strength: 3,
      max_speed: 3,
      max_defense: 3,
      max_hitpoints: 3,
      experience: 1
    },
    {
      user_id: 1,
      name: "Skeleton Ranger",
      hero: false, race: "skeleton",
      classification: "ranger",
      level: 1,
      current_strength: 4,
      current_speed: 3,
      current_defense: 2,
      current_hitpoints: 2,
      max_strength: 4,
      max_speed: 3,
      max_defense: 2,
      max_hitpoints: 2,
      experience: 1
    },
    {
      user_id: 1,
      name: "Zombie",
      hero: false,
      race: "zombie",
      classification: "warrior",
      level: 1,
      current_strength: 2,
      current_speed: 2,
      current_defense: 4,
      current_hitpoints: 5,
      max_strength: 2,
      max_speed: 2,
      max_defense: 4,
      max_hitpoints: 5,
      experience: 2
    },
    {
      user_id: 1,
      name: "Dark Wizard",
      hero: false,
      race: "human",
      classification: "wizard",
      level: 2,
      current_strength: 5,
      current_speed: 4,
      current_defense: 3,
      current_hitpoints: 4,
      max_strength: 5,
      max_speed: 4,
      max_defense: 3,
      max_hitpoints: 4,
      experience: 4
    },
    {
      user_id: 1,
      name: "Lizardman",
      hero: false,
      race: "lizard",
      classification: "warrior",
      level: 4,
      current_strength: 16,
      current_speed: 16,
      current_defense: 16,
      current_hitpoints: 30,
      max_strength: 16,
      max_speed: 16,
      max_defense: 16,
      max_hitpoints: 30,
      experience: 30
    }
  ])

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
