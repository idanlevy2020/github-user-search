import "./Main.css";
import {getUserName} from "../../api/api";
import {useState} from "react";
import UserDetalis from "../UserDetalis/UserDetalis";

function Main() {
   const [input, setInput] = useState('');
   const [username, setUsername] = useState({});

   function searchUser(){
      getUserName(input).then((data) => {
         console.log('data from sever:',data);
         if (data.message==="Not Found") setUsername({});
         else setUsername(data);
      });
   }

   return (
      <div className="Main">        
         <div className="search-container flex-row">
            <input type="search" placeholder="Search GitHub username…" onInput={(event)=>setInput(event.target.value)} />
            <button type="button" className="searchBtn" onClick={()=>searchUser()}>Search</button>
         </div>
         <div className="userInfoBox">
            {(JSON.stringify(username) !== JSON.stringify({})) && <UserDetalis username={username}/>}
            {(JSON.stringify(username) === JSON.stringify({})) && (<h1 style={{color:"hotpink"}}>No user found</h1>)}
         </div>
      </div>
   );
}

export default Main;
