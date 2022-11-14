import { useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Header = () => {
    const {isDark, setIsDark} = useState(ThemeContext)
    return (  
        <div className="header" style={{backgroundColor: isDark ? 'black':'white',
        color: isDark ? 'white':'black'}}>
            <h1>Welcome!</h1>
        </div>
    );
}
 
export default Header;