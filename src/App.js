import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { useState } from 'react';

function App() {
   const [theme, setTheme] = useState('LIGHT');
   const [appClassName, setAppClassName] = useState('dark-mode');

   function toggleTheme() {
		if (theme === 'LIGHT'){
         setTheme('DARK');
         setAppClassName('light-mode');
      }  
		else if (theme === 'DARK'){
         setTheme('LIGHT');
         setAppClassName('dark-mode');
      }  
	}

   return (
      <div className={`App flex-row ${appClassName}`}>
         <div className="app-content">
            <Header theme={theme} toggleTheme={toggleTheme}/>
            <Main/>
            <Footer/>
         </div>
      </div>
   );
}

export default App;
