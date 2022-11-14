import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Footer = () => {
    const {isDark, setIsDark} = useContext(ThemeContext);
    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    return (  
        <div className="footer" style={{backgroundColor: isDark ? 'black':'white'}}>
            <button onClick={toggleTheme}>Darkmode</button>    
        </div>
        
    );
}
 
export default Footer;
