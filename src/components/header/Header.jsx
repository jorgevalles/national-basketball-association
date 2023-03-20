import React from "react";
import s from "./styleHeader.module.css";

const Header = ({ setSection }) => {
  return (
    <div className={s.navbar}>
      <img
        src="https://1.bp.blogspot.com/-Db6pzXiyJp8/V1uowHJJ4UI/AAAAAAAAaZ4/prVtAcWDO2Y-mqthKKWsjFwBMeq8fClpACLcB/w640/nba-logo.jpg"
        alt=""
        style={{ position: "fixed", top: 0, width: "100%", height: "150px" }}
      />

      <nav className={s.nav}>
        <div className={s.Header}>
          <ul className={s.List}>
            <li>
              <a href="/">
                <img
                  style={{ borderRadius: "5px" }}
                  width="40px"
                  height="40px"
                  src="https://www.tradeinn.com/f/127/1270921/spalding-balon-baloncesto-nba-logoman-sgt.jpg"
                  alt=""
                />
              </a>
            </li>
            <li>
              <h6
                onClick={() => {
                  setSection(1);
                }}
                class="allGames"
              >
                Resultados
              </h6>
            </li>

            <li>
              <h6
                onClick={() => {
                  setSection(2);
                }}
                class="allGamer"
              >
                Jugadores
              </h6>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
