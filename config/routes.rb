Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


  namespace :api do
    namespace :v1 do
      resources :users
      resources :campaigns
      resources :characters
      resources :inventories
      resources :events
      resources :items
    end
  end

  get    '/log_in',   to: 'sessions#new'
  post   '/log_in',   to: 'sessions#create'
  delete '/log_out',  to: 'sessions#destroy'

  root 'games#index'
  get "*path", to: "games#index"
end
