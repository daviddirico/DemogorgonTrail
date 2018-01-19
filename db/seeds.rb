# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Character.create([
    {name: "Skeleton Warrior", hero: false, race: "skeleton", classification: "warrior", level: 1, strength: 3, defense: 3, hitpoints: 3},
    {name: "Skeleton Ranger", hero: false, race: "skeleton", classification: "ranger", level: 1, strength: 4, defense: 2, hitpoints: 2},
    {name: "Zombie", hero: false, race: "zombie", classification: "warrior", level: 1, strength: 2, defense: 4, hitpoints: 5},
    {name: "Dark Wizard", hero: false, race: "human", classification: "wizard", level: 2, strength: 5, defense: 3, hitpoints: 4}
  ])

Event.create([
    {name: "basic_enemy"},
    {name: "rare_enemy"},
    {name: "basic_town"},
    {name: "rare_town"},
    {name: "basic_loot"},
    {name: "bad_luck"},
    {name: "good_luck"},
    {name: "boss"},
    {name: "last_boss"}
  ])
