import { useCursor } from "../context/CursorProvider";
import {Link} from "react-router-dom"

export default function Header() {

  const {cursorDotref,cursorCircleref} = useCursor()

  const changeCursor = () => {
    cursorCircleref.current.animate({
      height:0,
      width:0,
      opacity:0
  },{duration:1000,fill:"forwards"});

    cursorDotref.current.animate({
      height:"35px",
      width:"35px",
  },{duration:1000,fill:"forwards"});


  }
  
  const resetMouse = () => {
    cursorCircleref.current.animate({
      height:"100px",
      width:"100px",
      opacity:1
  },{duration:1000,fill:"forwards"});

  cursorDotref.current.animate({
    height:"25px",
    width:"25px",
},{duration:1000,fill:"forwards"});
  }

    return<ul className="header-list">
    <li onMouseEnter={changeCursor} onMouseLeave={resetMouse}><Link to="about">About</Link></li>
    {/* <li onMouseEnter={changeCursor} onMouseLeave={resetMouse}><Link href="#">Projects</Link></li> */}
    <li onMouseEnter={changeCursor} onMouseLeave={resetMouse}><Link to="contact">Contact</Link></li>
  </ul>
} 