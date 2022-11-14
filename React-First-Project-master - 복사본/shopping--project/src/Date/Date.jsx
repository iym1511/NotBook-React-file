import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Date = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    return (  
        <div>
            <div>시승 신청 예약</div>
            <div>예약 날짜를 선택해주세요.</div>
            <div>
            <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
            </div>
        </div>
    );
}
 
export default Date;
