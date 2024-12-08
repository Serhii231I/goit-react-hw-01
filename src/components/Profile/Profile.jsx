const Profile = ({ username, tag, location, avatar, stats }) => {
    
    return (
        <div>
      <img src={avatar} alt="User avatar" />
      <p>{username}</p>
      <p>@{tag}</p>
      <p>{location}</p>
      <ul>
        <li>Followers: {stats.followers}</li>
        <li>Views: {stats.views}</li>
        <li>Likes: {stats.likes}</li>
      </ul>
    </div>
    )
}
export default Profile;