Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'



  # devise_for :users, path: 'users', controllers: { sessions: "users/sessions",omniauth_callbacks: 'users/omniauth_callbacks' }
  devise_for :users, path: 'users', controllers: { sessions: "users/sessions",registrations: "users/registrations",omniauth_callbacks: 'users/omniauth_callbacks' }
  devise_for :admins, path: 'admins', controllers: { sessions: "admins/sessions" }

  # devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }
  # devise_scope :user do
  #   delete 'sign_out', :to => 'devise/sessions#destroy', :as => :destroy_user_session
  # end

  root 'welcome#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :playground, only: [:index] do
    collection do 
      
      resources :typing do
        member do
        end
      end 

      resources :coding do
        member do
        end
      end 

      resources :racing, only: [:index, :show] do
        collection do
          resources :rooms
        end
      end 

      resources :customizations 
    end
  end

  resources :stats, only: [:index]

  resources :user_article
  resources :user_topics, only: [:create]
  resources :messages, only: [:new, :create]
  resources :battle_records, only: [:new, :create]
  
end
