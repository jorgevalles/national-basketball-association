import React from "react";
import { ImgTeams } from "../../utils/dataImg";
import { ImgPlayers } from "../../utils/dataImg";
import Pagination from "../Pagination/Pagination";
import s from "./StylePlayers.module.css";
const Players = ({
  dataPlayers,
  setSection,
  setdataId,
  paginasPlayers,
  setpages,
  playersAverage,
}) => {

  return (
    <div class="text-center d-flex">
      <div className="row px-4">
        {dataPlayers.map((item) => {
          const image = ImgTeams.find(
            (team) => team.name === item.team.full_name
          )?.img;
          const imagePlayer = ImgPlayers.find((player) => player)?.img;
          return (
            <div className="col mb-4 ">
              <img width="50px" height="50px" src={image} alt="" />
              <p style={{ fontSize: "12px" }}>{item.team.full_name}</p>
              <img width="70px" height="70px" src={imagePlayer} alt="" />
              <p style={{ fontSize: "12px" }}>
                {item.first_name} {item.last_name}{" "}
              </p>

              <div>
                <button
                  className={s.button1}
                  onClick={() => {
                    setdataId(item.id);
                    setSection(3);
                  }}
                >
                  Estadisticas
                </button>

                <button
                  className={s.button2}
                  onClick={() => {
                    playersAverage(item);
                    setSection(4);
                  }}
                >
                  Averages
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <Pagination paginas={paginasPlayers} setpage={setpages} />
    </div>
  );
};
export default Players;
