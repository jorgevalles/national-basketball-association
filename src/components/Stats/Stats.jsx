import React, { useEffect, useState } from "react";
import { ImgTeams } from "../../utils/dataImg";
import s from "./styleStats.module.css";

const Stats = ({ dataStats, setSection, dataId }) => {
  const idUrl = `https://www.balldontlie.io/api/v1/stats?per_page=99&player_ids[]=${dataId}`;
  const [stat, setStat] = useState([]);
  const fetchStats = (idUrl) => {
    fetch(idUrl)
      .then((response) => response.json())
      .then((data) => setStat(data.data))
      .catch((error) => console.log(error));
  };
  console.log({ stat });
  useEffect(() => {
    fetchStats(idUrl);
  }, [idUrl]);
  return (
    <div class="text-center d-flex">
      <div className="row px-4">
        {stat.map((item) => {
          const image = ImgTeams.find(
            (team) => team.name === item.team.full_name
          )?.img;
          return (
            <div className={s.Stats} class="col ">
              <div className="card">
                <img width="50px" height="50px" src={image} alt="" />

                <tr style={{ fontSize: "12px" }}>{item.team.full_name}</tr>

                <tr>
                  {item.player.first_name} {item.player.last_name}
                </tr>
              </div>

              <tr className={s.dateGame}> {item.game.date} </tr>

              <table className={s.tablet}>
                <tr>Rebotes defencivos {item.dreb} </tr>
                <tr>Tiros de 3 ptos {item.fg3_pct}</tr>
                <tr>Asistencias{item.ast} </tr>
                <tr>Bloqueos {item.blk} </tr>
                <tr>Tiros de 3 intentados{item.fg3a} </tr>
                <tr>Tiros de 3 en finales {item.fg3m}</tr>
                <tr>% de tiros de campo{item.fg_pct}</tr>
                <tr>Tiros de campo {item.fga} </tr>
              </table>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stats;
