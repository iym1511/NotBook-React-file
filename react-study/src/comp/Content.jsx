import { useState } from "react";
import Page from "./Page";
import { ThemeContext } from "../../context/ThemeContext";

const Content = () => {
    
    const [isDark, setIsDark] = useState(false);
    const value = {
        state : {isDark},
        action : {setIsDark}
    };
    // DataProvider를 사용할때 DataContext.Provider를 사용할수 있도록함
    // 이때 children은 Provider을 쓸때 데이터를 공용을 쓰는 컴포넌트들
    // value에 {isDark, setIsDark라고 그냥 넣어도됨}
    return <ThemeContext.Provider value={value}>
        <Page/>
    </ThemeContext.Provider>
}


export default Content;