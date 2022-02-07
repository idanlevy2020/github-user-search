import "./Header.css";

function Header(props) {
   return (
      <div className="Header flex-row">
         <h1 className="title"> devfinder </h1>
         <div>
            <span className="theme">{props.theme}</span>
            <button type="button" className="toggleBtn" onClick={()=>props.toggleTheme()}></button>
         </div>
      </div>
   );
}

export default Header;
