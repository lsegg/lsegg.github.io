import { TitleCom } from "../../components/title/title.com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAws,
  faJs,
  faBootstrap,
  faJira,
  faConfluence,
  faCss3,
  faFigma,
  faGit,
  faHtml5,
  faNodeJs,
  faPython,
  faReact,
  faSass,
  faSlack,
  faTrello,
} from "@fortawesome/free-brands-svg-icons";
import avatar from "../../../assets/images/avatar.png";
import "./about.scss";

export const AboutSection: any = () => {
  return (
    <section className="About" id="about">
      <TitleCom content="About me" sectionClass="About-title" />
      <div className="About-intro">
        <img src={avatar} alt="Avatar" className="About-intro-avatar" />
        <div className="About-intro-text isContainer">
          <p className="About-intro-text-paragraph">
            Ever since I was a little kid, arts, graphics and the IT world have
            been my passions. This has taken many forms: architecture,
            illustration and now, web development. Front-end web development
            brings all my interests together; it incorporates creativity and
            problem solving, and I'm allowed to break things in order to improve
            them (in a separate Git branch, of course).
          </p>
          <p className="About-intro-text-paragraph">
            Now, in this industry, this passion is still with me: I love
            applying responsive design principles, and seeing how my web pages
            shrink on mobile screens and still look amazing. It's very
            satisfying. I guess, in a way, I'm like those websites; I'm
            moldable, but I still keep my creative ability intact.
          </p>
          <p className="About-intro-text-paragraph">
            No doubt, there are still more things to learn, more problems to
            solve and more things to build. And for this, I am very grateful.
            Feel free to reach out.
          </p>
        </div>
      </div>
      <div className="About-skills">
        <FontAwesomeIcon icon={faReact} className="About-skills-icon" />
        <FontAwesomeIcon icon={faJs} className="About-skills-icon" />
        <FontAwesomeIcon icon={faHtml5} className="About-skills-icon" />
        <FontAwesomeIcon icon={faSass} className="About-skills-icon" />
        <FontAwesomeIcon icon={faCss3} className="About-skills-icon" />
        <FontAwesomeIcon icon={faBootstrap} className="About-skills-icon" />
        <FontAwesomeIcon icon={faFigma} className="About-skills-icon" />
        <FontAwesomeIcon icon={faGit} className="About-skills-icon" />
        <FontAwesomeIcon icon={faNodeJs} className="About-skills-icon" />
        <FontAwesomeIcon icon={faPython} className="About-skills-icon" />
        <FontAwesomeIcon icon={faAws} className="About-skills-icon" />
        <FontAwesomeIcon icon={faJira} className="About-skills-icon" />
        <FontAwesomeIcon icon={faConfluence} className="About-skills-icon" />
        <FontAwesomeIcon icon={faTrello} className="About-skills-icon" />
        <FontAwesomeIcon icon={faSlack} className="About-skills-icon" />
      </div>
    </section>
  );
};
