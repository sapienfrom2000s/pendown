FactoryBot.define do
  factory :user do
    name { 'John' } 
    email { 'john.doe@example.com' }
    password { 'password' }
  end
end
