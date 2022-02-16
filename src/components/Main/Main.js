import "./Main.css";
import {getUser} from "../../api/api";
import {useState} from "react";
import UserDetalis from "../UserDetalis/UserDetalis";

function Main() {
   const [input, setInput] = useState('');
   const [user, setUser] = useState(null);

   function searchUser(){
      getUser(input).then((data) => {
         console.log('data from sever:',data);
         if (data.message==="Not Found") setUser(null);
         else setUser(data);
      });
   }

   return (
      <div className="Main">        
         <div className="search-container flex-row">
            <input type="search" placeholder="Search GitHub username…" onInput={(event)=>setInput(event.target.value)} />
            <button type="button" className="searchBtn" onClick={()=>searchUser()}>Search</button>
         </div>
         <div className="userInfoBox">
            {user && <UserDetalis username={user}/>}
            {!user && (<h1 style={{color:"hotpink"}}>No user found</h1>)}
         </div>
      </div>
   );
}

export default Main;
