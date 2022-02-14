import "./Header.css";

function Header(props) {
   return (
      <div className="Header flex-row">
         <h1 className="title"> Github Profile Search </h1>
         <div>
            <button className="toggleBtn" type="button" onClick={()=>props.toggleTheme()}>
               <p className="btnText">{props.theme}</p> 
               {(props.theme=== 'LIGHT')&&<img src={process.env.PUBLIC_URL + '/icons/icon-sun.svg'} alt="toggle-mode"/>}
               {(props.theme=== 'DARK')&&<img src={process.env.PUBLIC_URL + '/icons/icon-moon.svg'} alt="toggle-mode"/>}
            </button>
         </div>
      </div>
   );
}

export default Header;
