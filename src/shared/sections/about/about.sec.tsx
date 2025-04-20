import { TitleCom } from "../../components/title/title.com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faCodepen,
  faHackerrank,
  faItchIo,
  faTwitter,
  faArtstation,
  faBehance,
  faDeviantart,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import avatar from "../../../assets/images/avatar.png";
import "./about.scss";

export const AboutSection: any = () => {
  return (
    <section className="About" id="about">
      <TitleCom content="About me" sectionClass="About-title" />
      <div className="About-intro">
        <img src={avatar} alt="Avatar" className="About-intro-avatar" />
        <div className="About-intro-dialog isCard">
          <div className="About-intro-dialog-arrow"></div>
          <p className="About-intro-dialog-paragraph">
            Hey, I'm a web developer and illustrator from Argentina, currently
            based somewhere in Europe. I split my time between building digital
            tools and creating art that tell stories.
          </p>
          <p className="About-intro-dialog-paragraph">
            I'm endlessly curious about the world — whether I'm coding a new
            project, sketching characters, geeking out over the latest in AI, or
            mapping out my next trip. Remote work, creativity, flexibility...
            that's the life I'm chasing, and I love that tech is making it
            possible.
          </p>
          <p className="About-intro-dialog-paragraph">
            When I'm not deep in a project, you'll probably find me hiking
            somewhere green, hunting for vintage finds, getting way too
            competitive over a board game, or dreaming up my next destination.
          </p>
          <p className="About-intro-dialog-paragraph">
            Right now, I'm on the lookout for work opportunities that mix
            creativity, tech, and travel — if that sounds like your vibe too,
            let's talk!
          </p>
        </div>
      </div>
      <div className="About-network">
        <div className="About-network-wrapper">
          <a
            className="About-network-icon"
            href="https://www.linkedin.com/in/lucia-seggiaro/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="About-network-icon" icon={faLinkedin} />
          </a>
          <a
            className="About-network-icon"
            href="https://github.com/lsegg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="About-network-icon" icon={faGithub} />
          </a>
          <a
            className="About-network-icon"
            href="https://www.instagram.com/artofluli/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="About-network-icon"
              icon={faInstagram}
            />
          </a>
          <a
            className="About-network-icon"
            href="https://www.behance.net/artofluli"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="About-network-icon" icon={faBehance} />
          </a>
          <a
            className="About-network-icon"
            href="https://twitter.com/artofluli"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="About-network-icon" icon={faTwitter} />
          </a>
          <a
            className="About-network-icon"
            href="https://codepen.io/lsegg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="About-network-icon" icon={faCodepen} />
          </a>
          <a
            className="About-network-icon"
            href="https://www.hackerrank.com/lu_seggiaro"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="About-network-icon"
              icon={faHackerrank}
            />
          </a>
          <a
            className="About-network-icon"
            href="https://lsegg.itch.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="About-network-icon" icon={faItchIo} />
          </a>
          <a
            className="About-network-icon"
            href="https://www.artstation.com/artofluli"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="About-network-icon"
              icon={faArtstation}
            />
          </a>
          <a
            className="About-network-icon"
            href="https://www.deviantart.com/artofluli"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="About-network-icon"
              icon={faDeviantart}
            />
          </a>
        </div>
      </div>
    </section>
  );
};
