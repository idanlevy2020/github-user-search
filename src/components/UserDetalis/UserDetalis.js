import "./UserDetalis.css";

function UserDetalis(props) {
   const user=props.username;
   return (
      <div className="UserDetalis flex-column">
         {/* <img src={process.env.PUBLIC_URL + '/images/github.png'} alt="github.png" width="100px" height="100px"/> */}
         <div className="userInfo-part1 flex-row">
            <img src={user.avatar_url} alt={user.name}/>
            <div>
               <p className="name"> {user.name} </p>
               <p className="login">@{user.login}</p>
               {(user.created_at)&&<p className="date">Joined {user.created_at.slice(0, 10)}</p>}
            </div>
         </div>
         <div className="userInfo-part2">
            {user.bio}
         </div>
         <div className="userInfo-part3 flex-row">
            <div>
               <p>Repos</p>
               <p className="desc">{user.public_repos}</p>
            </div>
            <div>
               <p>Followers</p>
               <p className="desc">{user.followers}</p>
            </div>
            <div>
               <p>Following</p>
               <p className="desc">{user.following}</p>
            </div>
         </div>
         <div className="userInfo-part4 flex-row">
            <div className="userInfo-part4-box1">
               <div className="box flex-row">
                  <img src={process.env.PUBLIC_URL + '/icons/icon-location.svg'} alt="icon-location.svg"/>
                  {(user.location===null)&&<p>Not Available</p>}
                  {(user.location!==null)&&<p>{user.location}</p>}
               </div>
               <div className="box flex-row">
                  <img src={process.env.PUBLIC_URL + '/icons/icon-website.svg'} alt="icon-website.svg"/>
                  {(user.html_url===null)&&<p>Not Available</p>}
                  {(user.html_url!==null)&&<p>{user.html_url}</p>}
               </div>
            </div>
            <div className="userInfo-part4-box2">
               <div className="box flex-row">
                  <img src={process.env.PUBLIC_URL + '/icons/icon-twitter.svg'} alt="icon-twitter.svg"/>
                  {(user.twitter_username===null)&&<p>Not Available</p>}
                  {(user.twitter_username!==null)&&<p>{user.twitter_username}</p>}
               </div>
               <div className="box flex-row">
                  <img src={process.env.PUBLIC_URL + '/icons/icon-company.svg'} alt="icon-company.svg"/>
                  {(user.company===null)&&<p>Not Available</p>}
                  {(user.company!==null)&&<p>{user.company}</p>}
               </div>  
            </div>     
         </div>
      </div>
   );
}

export default UserDetalis;
