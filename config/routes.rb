Rails.application.routes.draw do
  
  resources :posts
  resources :drills, only: [:create , :update]
  resources :users, only: [:show, :create, :update]
  resources :sports_categories, only: [:index]
  resources :favorite_sports, only: [:create]

  get "/me", to: "users#show_myself"
  post "/signup", to: "users#create"
  get "/search_username/:username", to: "users#search_username"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
  get '/list_of_followers_and_followings/:user_to_view_id', to: "followings#lists_of_followers_and_followings"
  get '/following_or_not/:user_id/:user_to_view_id', to: "followings#following_or_not"
  patch '/toggle_following', to: "followings#toggle_following"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
