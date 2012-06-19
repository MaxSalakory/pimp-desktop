class HomeController < ApplicationController
  def index
    @users=User.all
    @tasks=Task.all
    @tweets=Tweet.all
    @documents= Document.all
  end
  
  def users
    
  end
  
end
