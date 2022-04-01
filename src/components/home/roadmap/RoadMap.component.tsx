import React, { useState, RefObject } from "react";
import "./RoadMap.scss";
import roadMapImage from "../../../images/8.png";

interface RoadMapProps {
  refToUse: RefObject<HTMLDivElement>;
}
function RoadMap({ refToUse }: RoadMapProps) {
  const [t1, sT1] = useState<boolean>(false);
  const [t2, sT2] = useState<boolean>(false);
  const [t3, sT3] = useState<boolean>(false);
  const [t4, sT4] = useState<boolean>(false);
  return (
    <div ref={refToUse} id="road-map" className="card roadmap">
      <h2>
        <span>Road </span>Map
      </h2>
      <div className="map">
        <img src={roadMapImage} alt="Depicting Roadmap" />
      </div>
      <div className="accordians">
        <button
          className={`accordion plus ${t1 ? "active" : ""}`}
          onClick={() => sT1(!t1)}
        >
          <span>Stage 1:</span>
          Creation of the Miami Martians
        </button>
        <div className={`panel ${t1 ? "active" : ""}`}>
          <p>Mint date is revealed. Discord is opened. Hype is gathered.</p>
        </div>

        <button
          className={`accordion plus ${t2 ? "active" : ""}`}
          onClick={() => sT2(!t2)}
        >
          <span>Stage 2:</span>
          Martian Mint
        </button>
        <div className={`panel ${t2 ? "active" : ""}`}>
          <p>
            Our minting process will be unique, like us! Once minting begins,
            each week a limited amount of martians will be available to mint. At
            the end of each week, a portion of the revenue generated from mint
            will be used to purchase tables/VIP experiences across different
            nightclubs in Miami. Wallet addresses who minted during that week
            will be whitelisted to claim their spots in these experiences.
          </p>
        </div>

        <button
          className={`accordion plus ${t3 ? "active" : ""}`}
          onClick={() => sT3(!t3)}
        >
          <span>Stage 3:</span>
          Martian DAO Opens
        </button>
        <div className={`panel ${t3 ? "active" : ""}`}>
          <p>
            Once all martians have been minted, Miami Martian Club Members will
            gain access to the Martian DAO through ownership of their martian.
            Royalties collected in the secondary market will be used to fuel the
            martian treasury. The martian DAO will govern these funds. Holders
            may vote on proposals as to how the treasury is spent, invested, or
            dispersed.
          </p>
        </div>

        <button
          className={`accordion plus ${t4 ? "active" : ""}`}
          onClick={() => sT4(!t4)}
        >
          <span>Stage 4:</span>
          Martian Club Members Program
        </button>
        <div className={`panel ${t4 ? "active" : ""}`}>
          <p>
            We are partnering with businesses across the entertainment industry
            in order to give Miami Martian Club members exclusive opportunities
            such as discounted experiences, free club entry, and more!{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default RoadMap;
