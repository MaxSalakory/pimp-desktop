module UsersHelper
  def allUsers
    @users = User.all
  end
end
