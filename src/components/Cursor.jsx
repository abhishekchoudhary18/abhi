import { useEffect } from "react";
import {useCursor} from "../context/CursorProvider";

export default function Cursor (){

    const {cursorDotref,cursorCircleref,cursorTextref,cursorText} = useCursor()

    const movingText = cursorText.split("").map((char,i)=>{
        return <span key={i} style={{transform:`rotate(${i*(340/cursorText.length) }deg)`}}>{char}</span>
    })

    useEffect(()=>{
        const mouseMove = (e) => {
            cursorDotref.current.style.left = `${e.clientX}px`;
            cursorDotref.current.style.top = `${e.clientY}px`;

            cursorTextref.current.style.left = `${e.clientX-50}px`;
            cursorTextref.current.style.top = `${e.clientY-50}px`;

            cursorCircleref.current.animate({
                left:`${e.clientX}px`,
                top:`${e.clientY}px`
            },{duration:5000,fill:"forwards"});

            
        }
        window.addEventListener("mousemove",mouseMove)
    },[])

    return<>
        <div className="cursor-dot logo"  ref={cursorDotref}></div>
        <div className="cursor-outline" ref={cursorCircleref}></div>
        <div className="cursor-text" ref={cursorTextref}>
            <div className="text" >{movingText}</div>
        </div>
    </>
}
