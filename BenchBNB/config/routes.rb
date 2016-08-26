Rails.application.routes.draw do
  namespace :api, defaults: { format: 'json' } do
    resources :benches
  end

  root to: 'static_pages#root'
end
