import { useReducer, useState } from "react";

const Comp = () => {
    const [txt , setTxt] = useState("");
    const [number, setNumber] = useState(1);

    

    // 리듀서 생성
    const [count, countDispatch] = useReducer(countReducer,0);

    // 함수에 넣을 조건생성   oldCOunt == setState 처럼 안에서 조건만듦
    // useState값 받아와서 action >> action.type
    // action.number: setNumber에서 받아온만큼 + - 해줌
    function countReducer(oldCount, action){
        if(action.type === "UP"){
            return oldCount+ action.number
        }else if(action.type === "DOWN"){
            return oldCount- action.number
        }else if(action.type ==="TEXT"){
            return action.txt
        }
    }
    
    // 가져다 쓸 함수생성 countDispatch == setState 처럼 불러오는기능
    // type 쓴게 useState에서 받아온 입력값을 
    // reducer에 넣을때 type이랑 지정변수를 객체로 만들어줌
    function down() {
        countDispatch({type:'DOWN', number: number})
    }
    function up() {
        countDispatch({type:'UP', number: number})
    }
    function text(){
        countDispatch({type:"TEXT", txt: txt})
    }
    function changetext(e){
        setTxt(e.target.value)
    }
    // Number 기본적으로 문자기 때문에 정수형으로 컴포트 한것
    function changenumber(e) {
        setNumber(Number(e.target.value))
    }
    return (  
        <div>
            <input type="button" value="-" onClick={down}/>
            <input type="button" value="0"/>
            <input type="button" value="+" onClick={up}/>
            <input type="text" onChange={changenumber}/>
            <button onClick={text}>댓글작성</button>
            <input type="text" onChange={changetext}/>
            <span>{count}</span>
            <h1>{txt}</h1>
            
     
        </div>
    );
}
 
export default Comp;