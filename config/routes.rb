Rails.application.routes.draw do
  root 'welcome#index'
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :playground do
    collection do 
      
      resources :typing, only: [:index, :show, :create] do
        member do
        end
      end 

      resources :coding, only: [:index, :show] do
        member do
        end
      end 
         
      resources :racing, only: [:index, :show] do
        member do
        end
      end 

    end
  end
end
