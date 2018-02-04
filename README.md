# README

## The Demogorgon Trail

Inspired by the popular 90s game, The Oregon Trail, this application is a choice-based role-playing game.  Its
front-end is comprised entirely of ReactJS, which makes fetch calls to the API urls set up in Rails, of which
the entire back-end is comprised.

---

## Features

Users can...
* create an account
* sign into and out of their account
* optionally upload a profile image
* start a campaign and create a character
* view their character inventory which contains stats and items as well as quest log
* choose to fight random enemies generated by an event
* choose to run from random enemies generated by an event
* ...more coming soon!

## Technologies

* Backend: Rails 5.1.4
* Frontend: React.js
* Drag and drop: react-dropzone
* Image Hosting: Amazon Web Services
* Styling: Foundation
* Database: PostgreSQL

## To run this app on your local machine

* Install Ruby 2.3.3
* In a terminal, run `git clone https://github.com/daviddirico/DemogorgonTrail.git`
* Navigate to the project's root directory with `cd DemogorgonTrail`
* Run `bundle install && npm install && rake db:setup`
* In terminal, run `rails s`
* In another terminal tab, run `./bin/webpack-dev-server`
* Visit `http://localhost:3000/` in your browser.
