class Document < ActiveRecord::Base
  attr_accessible :deadline, :name, :status, :user_id
  belongs_to :user
end
