import React from "react";
import '../../styles/components/layout/Header.css'

const Header = (props) =>{
   return (
    <header>
     <div className="holder">
      <img src="images/logo.png" width="100" alt="Colibri" />
      <h1>Colibri</h1>
      </div>
    </header>
   );
}

export default Header;