
const UserSerializer = (user)=>
{
    const userObj = 
    {
    name: user.name,
    username:user.username,   
    email:user.email 
    }

    return userObj
}


exports.UserSerializer = UserSerializer