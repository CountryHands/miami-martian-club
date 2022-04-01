import React, { RefObject } from "react";
import "./Dao.scss";

interface DaoProps {
  refToUse: RefObject<HTMLDivElement>;
}

function Dao({ refToUse }: DaoProps) {
  return (
    <div ref={refToUse} id="dao" className="card dao">
      <h2>
        <span>Martian</span> DAO
      </h2>
      <p>
        A 10% royalty will be collected on all Martian sales in the secondary
        market. This means that when Martians are traded in the secondary
        market, 10% of that sale price is collected back. These royalties
        collected in the secondary trading market will be used to fuel the
        Martian treasury. This treasury is to be governed by the community of
        holders. Martian Holders will be granted access to the Martian DAO. Each
        Martian held is equal to one vote. Holders will be able to create
        proposals and vote on these proposals as to how the Martian treasury is
        invested, spent or dispersed. If invested, all profits will be
        redistributed among holders. If spent, Martian holders will vote as to
        what experiences the treasury will be spent to create. If dispersed,
        holders can decide on what schedule they would like the treasury to be
        dispersed back to the holders. For specific questions concerning the
        DAO, please visit our Discord server
      </p>
      <p>
        For more information on What a DAO is and how it works visit{" "}
        <a className="to" href="https://ethereum.org/en/dao/">
          https://ethereum.org/en/dao/
        </a>
      </p>
      <div>
        {" "}
        {/* <a href="https://snapshot.org/#/miamimartianclub.eth" target="_blank">
          <button className="btn teal" type="button">
            Enter DAO
          </button>
        </a> */}
      </div>
    </div>
  );
}

export default Dao;
