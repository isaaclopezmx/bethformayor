Rails.application.routes.draw do
  root to: 'pages#home'
  get 'about', to: 'pages#about', as: 'about'
  get 'contact', to: 'pages#contact', as: 'contact'
  get 'events', to: 'pages#events', as: 'events'
  get 'vision', to: 'pages#vision', as: 'vision'
  get 'endorsements', to: 'pages#endorsements', as: 'endorsements'
end
