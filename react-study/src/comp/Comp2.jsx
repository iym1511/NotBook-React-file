import { useEffect, useState } from "react";
import { useRef } from "react";

const Comp2 = () => {
    const inputRef = useRef("");

    // 맨 처음 화면이 로딩될때 실행
    useEffect(()=>{
        // console.log(inputRef);
        inputRef.current.focus(); // 로그인id 자동포커스
    },[])

    function login(){
        // 벨류값 받아와서 환영합니다 oo 님 출력
        alert("환영합니다 "+(inputRef.current.value)+"님!")
        // 알림창닫고도 인풋창에 포커스
        inputRef.current.focus()
    }

    return (  
        <div>
            <input type="text" ref={inputRef}/>
            <button onClick={login}>로그인</button>
        </div>
    );
}
 
export default Comp2;