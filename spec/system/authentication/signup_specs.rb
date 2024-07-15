require 'rails_helper'

RSpec.describe 'Sign Up', type: :system do
  describe 'Sign Up Process' do
    let(:user) { build(:user) }
    context 'when confirmation link is clicked' do
      it 'shows a success message' do
        visit '/sign_up' 

        fill_in 'Full Name', with: user.name 
        fill_in 'Email', with: user.email
        fill_in 'Password', with: user.password
        fill_in 'Confirm Password', with: user.password

        click_button 'Sign Up'
        visit '/letter_opener'

        click_button 'Activate Account'
        expect(page).to have_content('Account successfully created')
      end
    end
  end 
end

