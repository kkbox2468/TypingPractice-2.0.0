Rails.application.routes.draw do
  devise_for :admins
  root 'welcome#index'
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :playground do
    collection do 
      
      resources :typing, only: [:show] do
        member do
        end
      end 

      resources :coding, only: [:show] do
        member do
        end
      end 
         
      resources :racing, only: [:show] do
        member do
        end
      end 

    end
  end
end
