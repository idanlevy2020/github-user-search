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
      </div>
   );
}

export default Main;
