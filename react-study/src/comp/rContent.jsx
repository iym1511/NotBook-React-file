import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const rContent = () => {
    const {isDark} = useContext(ThemeContext);

    return (  
        <div className="footer" style={{backgroundColor: isDark ? 'black':'white',
        color: isDark ? "white" : "black" }}>  
        <p>좋은하루되세요</p>
        </div>
        
    );
}
 
export default rContent;