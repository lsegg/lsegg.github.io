import avatar from "../../../assets/images/avatar.png";
import { TypingAnimation } from "../../components/typing-animation/typing-animation";
import "./home.scss";

export const HomeSection: any = () => {
  const handleClick = () => {
    fetch("/resume.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);

        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "lucia-seggiaro-resume.pdf";
        alink.click();
      });
    });
  };

  const handleWorkClick = () => {
    const portfolio = document.getElementById("portfolio");
    if (portfolio) portfolio.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="Home" id="home">
      {/* Two soft ink washes give the flat navy some atmosphere. */}
      <div className="Home-wash Home-wash--terracotta" aria-hidden="true"></div>
      <div className="Home-wash Home-wash--sage" aria-hidden="true"></div>

      <div className="Home-intro">
        <div className="Home-intro-portrait">
          <img src={avatar} alt="Avatar" className="Home-intro-avatar" />
        </div>
        <p className="Home-intro-eyebrow micro-label">
          Full stack engineer <span aria-hidden="true">·</span> Illustrator
        </p>
        <h1 className="Home-intro-name title-x-large-semibold">
          Lucía Seggiaro
        </h1>
        <TypingAnimation
          strings={[
            "I'm a full stack engineer.",
            "I'm an illustrator.",
            "I'm an artist.",
            "I'm a web developer.",
            "I'm a problem solver.",
          ]}
          className="Home-intro-job paragraph-medium-regular"
        />
        <div className="Home-intro-actions">
          <button
            onClick={handleClick}
            className="Home-intro-button paragraph-medium-bold isButton"
          >
            Hire me
          </button>
          <button
            onClick={handleWorkClick}
            className="Home-intro-button paragraph-medium-bold isButton isButton--onInk"
          >
            See my work
          </button>
        </div>
      </div>

      <button
        className="Home-scroll"
        onClick={() => {
          const about = document.getElementById("about");
          if (about) about.scrollIntoView({ behavior: "smooth" });
        }}
        aria-label="Scroll to the about section"
      >
        <span className="Home-scroll-directive micro-label">Scroll down</span>
        <span className="Home-scroll-mouse" aria-hidden="true">
          <span className="Home-scroll-mouse-wheel"></span>
        </span>
      </button>
    </section>
  );
};
