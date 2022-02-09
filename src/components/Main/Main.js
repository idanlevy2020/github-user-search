import "./Main.css";
import {getAllUsers} from "../../api/api";
import {useEffect} from "react";

function Main() {
   useEffect(() => {
      getAllUsers().then((data) => {
          console.log("data",data);
      });
  }, []); // [] - run after first render (one time)
   return (
      <div className="Main">        
         <div className="search-container flex-row">
            <input type="search" placeholder="Search GitHub username…" onInput={()=>console.log('input')} />
            <button type="button" className="searchBtn">Search</button>
         </div>

         <div className="userInfoBox flex-column">
            {/* <img src={process.env.PUBLIC_URL + '/images/github.png'} alt="github.png" width="100px" height="100px"/> */}
            <div className="userInfo-part1 flex-row">
               <img src={process.env.PUBLIC_URL + '/images/github.png'} alt="github.png"/>
               <div>
                  <p className="name"> The Octocat </p>
                  <p className="email">@octocat</p>
                  <p className="date">Joined 25 Jan 2011</p>
               </div>
            </div>
            <div className="userInfo-part2">
               Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
            </div>
            <div className="userInfo-part3 flex-row">
               <div>
                  <p>Repos</p>
                  <p className="desc">8</p>
               </div>
               <div>
                  <p>Followers</p>
                  <p className="desc">3938</p>
               </div>
               <div>
                  <p>Following</p>
                  <p className="desc">9</p>
               </div>
            </div>
            <div className="userInfo-part4 flex-row">
               <div className="userInfo-part4-box1">
                  <div className="box flex-row">
                     <img src={process.env.PUBLIC_URL + '/icons/icon-location.svg'} alt="icon-location.svg"/>
                     <p>San Francisco</p>
                  </div>
                  <div className="box flex-row">
                     <img src={process.env.PUBLIC_URL + '/icons/icon-website.svg'} alt="icon-website.svg"/>
                     <p>https://github.blog</p>
                  </div>
               </div>
               <div className="userInfo-part4-box2">
                  <div className="box flex-row">
                     <img src={process.env.PUBLIC_URL + '/icons/icon-twitter.svg'} alt="icon-twitter.svg"/>
                     <p>Not Available</p>
                  </div>
                  <div className="box flex-row">
                     <img src={process.env.PUBLIC_URL + '/icons/icon-company.svg'} alt="icon-company.svg"/>
                     <p> @github</p>
                  </div>  
               </div>     
            </div>
         </div>
      </div>
   );
}

export default Main;
