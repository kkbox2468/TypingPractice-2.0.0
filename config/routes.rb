Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
# devise_for :admins  
# devise_for :users

# devise_for :users, path: 'users'
# eg. http://localhost:3000/users/sign_in
# devise_for :admins, path: 'admins'
# eg. http://localhost:3000/admins/sign_in



  devise_for :users, path: 'users', controllers: { sessions: "users/sessions" }
  devise_for :admins, path: 'admins', controllers: { sessions: "admins/sessions" }




  root 'welcome#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :playground do
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
        member do
        end
      end 

    end
  end

  resources :stats, only: [:index]
end
