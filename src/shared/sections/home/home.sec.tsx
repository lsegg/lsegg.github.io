import avatar from "../../../assets/images/avatar.png";
import { TypingAnimation } from "../../components/typing-animation/typing-animation";
import "./home.scss";

export const HomeSection: any = () => {
  const handleClick = () => {
    fetch("/resume.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);

        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "lucia-seggiaro-resume.pdf";
        alink.click();
      });
    });
  };
  return (
    <section className="Home" id="home">
      <div className="Home-intro">
        <img src={avatar} alt="Avatar" className="Home-intro-avatar" />
        <h1 className="Home-intro-name title-x-large-semibold">
          Lucía Seggiaro
        </h1>
        <TypingAnimation
          strings={[
            "I'm full stack engineer.",
            "I'm an illustrator.",
            "I'm an artist.",
            "I'm a web developer.",
            "I'm a problem solver.",
          ]}
          className="Home-intro-job"
        />
        <button
          onClick={handleClick}
          className="Home-intro-button paragraph-medium-bold isButton"
        >
          Hire me
        </button>
      </div>
      <div className="Home-scroll">
        <p className="Home-scroll-directive paragraph-small-regular">
          Scroll down
        </p>
        <div className="Home-scroll-mouse">
          <div className="Home-scroll-mouse-wheel">o</div>
        </div>
      </div>
    </section>
  );
};
