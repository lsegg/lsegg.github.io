import avatar from "../../../assets/images/avatar.png";
import "./home.scss";

export const HomeSection: any = () => {
  return (
    <section className="Home" id="home">
      <div className="Home-intro">
        <img src={avatar} alt="Avatar" className="Home-intro-avatar" />
        <p className="Home-intro-name title-big-semibold">Lucía Seggiaro</p>
        <p className="Home-intro-job">I'm Front-End developer.</p>
        <a
          href="#about"
          className="Home-intro-button paragraph-regular-bold isButton"
        >
          Hire me
        </a>
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
