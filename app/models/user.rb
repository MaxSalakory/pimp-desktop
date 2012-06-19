class User < ActiveRecord::Base
  attr_accessible :password, :mail, :name
  attr_accessor :password
  
  has_many :tweets
  has_many :tasks
  has_many :documents
  
    validates_confirmation_of :password
    validates_presence_of :password, :on => :create
    validates_presence_of :mail
    validates_uniqueness_of :mail
end
