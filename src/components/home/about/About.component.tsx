import React, { RefObject } from "react";
import "./About.scss";
import martianImage from "../../../images/8.png";
interface AboutProps {
  refToUse: RefObject<HTMLDivElement>;
}
function About({ refToUse }: AboutProps) {
  return (
    <div ref={refToUse} id="about" className="card about">
      <div>
        <h2>
          <span>10,000</span> Unique Martians
        </h2>
        <p>
          Word travels fast… Especially when you're telepathic. As everyone on
          Earth seems to be flocking down to Miami, us Martians have decided to
          take up residence as well. Along with our presence, our mission is to
          establish a digital kinship whose connection extends beyond the
          physical plane.
        </p>
        <p>
          The Miami Martian Club features a collection of 10,000 Martian NFTs.
          These Martians are digital collectibles that will provide both
          physical and monetary value, especially for those located in Miami.
        </p>
        <p>
          Miami Martians can be found partying, discussing investments, or
          collaborating to develop the integrity of their community. Being a
          part of the Miami Martian Club is no small feat. The essence of our
          community is to bring together individuals who work hard and play
          harder, while also being entrusted with the responsibility of
          self-governance and collective leadership. Oh yeah… and to party. You
          see, us martians don’t wait in lines, nor do we pay for tables at
          nightclubs. Wishing you could do the same?
        </p>
        <p>
          Welcome to our fleet. To learn more about what it means to be a Miami
          Martian, check out our roadmap.
        </p>{" "}
      </div>
      <img src={martianImage} alt="Example Martian Nft" />
    </div>
  );
}

export default About;
