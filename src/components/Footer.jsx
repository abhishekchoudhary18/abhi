import { useCursor } from "../context/CursorProvider";

export default function Footer() {
  const { cursorDotref, cursorCircleref, cursorTextref, setCursorText } =
    useCursor();

  const changeCursor = (string) => {
    cursorCircleref.current.animate(
      {
        height: 0,
        width: 0,
        opacity: 0,
      },
      { duration: 500, fill: "forwards" }
    );

    cursorDotref.current.animate(
      {
        height: "35px",
        width: "35px",
      },
      { duration: 500, fill: "forwards" }
    );

    cursorTextref.current.animate(
      {
        opacity: 1,
      },
      { duration: 500, fill: "forwards" }
    );

    setCursorText(string);
  };

  const resetMouse = () => {
    cursorCircleref.current.animate(
      {
        height: "100px",
        width: "100px",
        opacity: 1,
      },
      { duration: 500, fill: "forwards" }
    );

    cursorDotref.current.animate(
      {
        height: "25px",
        width: "25px",
      },
      { duration: 500, fill: "forwards" }
    );

    cursorTextref.current.animate(
      {
        opacity: 0,
      },
      { duration: 500, fill: "forwards" }
    );
  };

  return (
    <div className="footerContainer support">
      <a
        onMouseEnter={() => changeCursor("github | github |")}
        onMouseLeave={resetMouse}
        className="cursor-hover-item"
        data-cursor-text="Follow Me!"
        data-cursor-text-repeat="4"
        href="https://github.com/abhishekchoudhary18"
        target="_blank"
      >
        <img src="icons8-github-24.png" />
      </a>
      <a
        onMouseEnter={() => changeCursor("linkedin | linkedin |")}
        onMouseLeave={resetMouse}
        className="cursor-hover-item"
        data-cursor-text="Follow Me!"
        data-cursor-text-repeat="4"
        href="https://www.linkedin.com/in/abhishek-choudhary81898/"
        target="_blank"
      >
        <img src="icons8-linkedin-30.png" />
      </a>
    </div>
  );
}
