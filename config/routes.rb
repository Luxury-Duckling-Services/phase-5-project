Rails.application.routes.draw do
  
  resources :users, only: [:show, :create, :update]
  resources :sports_categories, only: [:index]
  resources :favorite_sports, only: [:create]

  get "/me", to: "users#show_myself"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  post "/signup", to: "users#create"
   
  get "/search_username/:username", to: "users#search_username"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
