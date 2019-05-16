Rails.application.routes.draw do 
  devise_for :users
  root 'groups#index'
  resources :users, only: [:index, :edit, :update]
    collection do
      get 'search'
    end
  resources :groups, only: [:new, :create, :edit, :update] do
    resources :messages, only: [:index, :create]  
  end 

  devise_scope :user do
    get '/users/sign_out' => 'devise/sessions#destroy'
  end
end
