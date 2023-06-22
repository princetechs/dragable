Rails.application.routes.draw do
  resources :todos
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  patch '/todos/move/:id', to: 'todos#move'

  # Defines the root path route ("/")
  # root "articles#index"
end
