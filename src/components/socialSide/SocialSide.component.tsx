import React from "react";
import "./SocialSide.scss";
import discordLogo from "../../images/discord.svg";
import twitterLogo from "../../images/twitter.svg";
import instagramLogo from "../../images/instagram.svg";
import openseaLogo from "../../images/opensea.svg";
import config from "../config";

function SocialSide() {
  const imageMap: {[key:string]: string} = {
    'discord': discordLogo,
    'twitter': twitterLogo,
    'instagram': instagramLogo,
    'opensea': openseaLogo,
  };
  return (
    <nav className="side">
      <ul>
        {config.sideLinks &&
          config.sideLinks.map((link, index) => (
            <li key={index}>
              <a href={link.url} target="_blank" rel="noreferrer">
                <img src={imageMap[link.site]} alt={`${link.site} icon`} />
              </a>
            </li>
          ))}
      </ul>
    </nav>
  );
}

export default SocialSide;
