export default function About() {
  const currentDate = new Date();
  const targetDate = new Date("07/15/2021");
  const yearsDifference = currentDate.getFullYear() - targetDate.getFullYear();
  console.log(yearsDifference);
  return (
    <div style={{ margin: "50px" }}>
      <p>
        {" "}
        I am a Electronics Engineer turned Web Developer and I believe i am
        doing a prettty good job in being one. I started my journey in Webdev
        around {yearsDifference} years ago. here is my short resume which will
        give a quick intro about me.
      </p>
      <img src="resume.jpg" style={{ height: "1000px", marginTop: "50px" }} />
    </div>
  );
}
