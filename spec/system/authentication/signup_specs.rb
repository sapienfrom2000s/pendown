require 'rails_helper'

RSpec.describe 'Sign Up', type: :system do
  describe 'Sign Up Process' do
    let(:user) { build(:user) }
    context 'when confirmation link is clicked' do
      it 'shows a success message' do
        visit '/users/new' 

        fill_in 'Name', with: user.name 
        fill_in 'Email', with: user.email
        fill_in 'Password', with: user.password

        click_button 'Sign up'

        expect(User.count).to eq(1)
      end
    end
  end 
end

