class Tweet < ActiveRecord::Base
  attr_accessible :message, :user_id
  belongs_to :user
end
