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
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import avatar from "../../../assets/images/avatar.png";
import "./about.scss";

type Network = {
  label: string;
  href: string;
  icon: IconDefinition;
};

const NETWORKS: Network[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/lucia-seggiaro/",
    icon: faLinkedin,
  },
  { label: "GitHub", href: "https://github.com/lsegg", icon: faGithub },
  {
    label: "Instagram",
    href: "https://www.instagram.com/artofluli/",
    icon: faInstagram,
  },
  {
    label: "Behance",
    href: "https://www.behance.net/artofluli",
    icon: faBehance,
  },
  { label: "Twitter", href: "https://twitter.com/artofluli", icon: faTwitter },
  { label: "CodePen", href: "https://codepen.io/lsegg", icon: faCodepen },
  {
    label: "HackerRank",
    href: "https://www.hackerrank.com/lu_seggiaro",
    icon: faHackerrank,
  },
  { label: "itch.io", href: "https://lsegg.itch.io/", icon: faItchIo },
  {
    label: "ArtStation",
    href: "https://www.artstation.com/artofluli",
    icon: faArtstation,
  },
  {
    label: "DeviantArt",
    href: "https://www.deviantart.com/artofluli",
    icon: faDeviantart,
  },
];

const PARAGRAPHS: string[] = [
  "Hey, I'm a web developer and illustrator from Argentina, currently based somewhere in Europe. I split my time between building digital tools and creating art that tell stories.",
  "I'm endlessly curious about the world — whether I'm coding a new project, sketching characters, geeking out over the latest in AI, or mapping out my next trip. Remote work, creativity, flexibility... that's the life I'm chasing, and I love that tech is making it possible.",
  "When I'm not deep in a project, you'll probably find me hiking somewhere green, hunting for vintage finds, getting way too competitive over a board game, or dreaming up my next destination.",
  "Right now, I'm on the lookout for work opportunities that mix creativity, tech, and travel — if that sounds like your vibe too, let's talk!",
];

export const AboutSection: any = () => {
  return (
    <section className="About" id="about">
      <TitleCom
        content="About me"
        sectionClass="About-title"
        eyebrow="Who's behind this"
      />
      <div className="About-intro" data-reveal>
        <div className="About-intro-portrait">
          <img src={avatar} alt="Avatar" className="About-intro-avatar" />
        </div>
        <div className="About-intro-dialog isCard">
          <div className="About-intro-dialog-arrow" aria-hidden="true"></div>
          {PARAGRAPHS.map((paragraph, index) => (
            <p
              className="About-intro-dialog-paragraph paragraph-medium-regular"
              key={index}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      <div className="About-network" data-reveal style={{ "--reveal-delay": "120ms" } as React.CSSProperties}>
        <p className="About-network-label micro-label">Find me elsewhere</p>
        <ul className="About-network-wrapper">
          {NETWORKS.map(({ label, href, icon }) => (
            <li key={label}>
              <a
                className="About-network-link"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                <FontAwesomeIcon className="About-network-icon" icon={icon} />
                <span className="About-network-tooltip" aria-hidden="true">
                  {label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
