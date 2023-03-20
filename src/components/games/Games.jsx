import React, { useEffect } from "react";
import { ImgTeams } from "../../utils/dataImg";
import Pagination from "../Pagination/Pagination";
import s from "./styleGames.module.css";

const Games = ({ dataGames, setSection, paginas, setpage }) => {
  useEffect(() => {
    if (typeof document === "undefined") return;
    window.scrollTo(0, 0);
  }, [dataGames]);

  return (
    <div class="text-center">
      <div className="row px-4">
        {dataGames.map((item) => {
          const image = ImgTeams.find(
            (team) => team.name === item.home_team.full_name
          )?.img;
          const imageVisitor = ImgTeams.find(
            (team) => team.name === item.visitor_team.full_name
          )?.img;
          return (
            <div className="col " style={{ fontSize: "12px" }}>
              <p className={s.date}>{item.date}</p>

              <div className={s.img}>
                <img width="100px" height="100px" src={image} alt="" />

                <img width="100px" height="100px" src={imageVisitor} alt="" />
              </div>
              <div className={s.result}>
                <div className={s.team}>
                  <h4 style={{ fontSize: "15px" }}>
                    {item.home_team.full_name} vs {item.visitor_team.full_name}
                  </h4>
                </div>
                <h4>
                  scrore: {item.home_team_score} a {item.visitor_team_score}
                </h4>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <Pagination paginas={paginas} setpage={setpage} />
      </div>
    </div>
  );
};
export default Games;
