import React, { useState, useEffect } from "react";
import { DateTimeGrid } from "./styles";

export default function DateTime() {

    const [date, setDate] = useState();

    useEffect(() => {
        function addZero(i) {
            if (i < 10) {
                i = "0" + i;
            }
    
            return i;
        }
    
        function formatTime() {
            var t = new Date();
            
            const dayName = ["domingo","segunda-feira","terça-feira","quarta-feira","quinta-feira","sexta-feira","sábado"];
            const monthName = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];
            
            const time = addZero(t.getHours()) + ":" + addZero(t.getMinutes()) + ":" + addZero(t.getSeconds());
            const formatedDate = dayName[t.getDay()] + ", " + t.getDate() + " de " + monthName[t.getMonth()] + " de " + t.getFullYear();
    
            return formatedDate + " " + time
        }

        (setInterval(() => {
            setDate(formatTime())
        }, 500))

        return () => clearInterval(setInterval);
    }, [])

    return (
        <>
            <DateTimeGrid>{date}</DateTimeGrid>
        </>
    )
}