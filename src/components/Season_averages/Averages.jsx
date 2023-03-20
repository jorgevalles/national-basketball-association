import React from "react";
import s from "./styleAverages.modules.css";

const Averages = ({ dataAverage, setSection }) => {
  return (
    <div class="text-center d-flex ">
      <div className="row px-4">
        {dataAverage.average?.map((item) => {
          return (
            <div className={s.Averages}>
              <p>
                {dataAverage.first_name} {dataAverage.last_name}
              </p>
              <table className={s.table}>
                <th>Juegos:{item.games_played}</th>
                <th> temporada: {item.season} </th>
                <th> Minutos Jugados: {item.min} </th>
                <th> Tiros de campo convertidos: {item.fgm} </th>
                <th> Tiros de campo intentados: {item.fga} </th>
              </table>
              <table>
                <th> Tiros de 3 puntos convertidos: {item.fg3m} </th>
                <th> Tiros de 3 puntos intentados: {item.fg3a} </th>
                <th> Tiros libres convertidos: {item.ftm} </th>
                <th> Tiros libres intentados: {item.fta} </th>
                <th> Rebotes Ofencivos: {item.oreb} </th>
              </table>
              <table>
                <th> Rebotes Defencivos: {item.dreb} </th>
                <th> Rebotes totales: {item.reb} </th>
                <th> Asistencias: {item.ast} </th>
                <th> Recuperaciones de balón: {item.stl} </th>
                <th> Bloqueos: {item.blk} </th>
              </table>
              <table>
                <th> Pérdida de balón: {item.turnover} </th>
                <th> Faltas personales cometidas: {item.pf} </th>
                <th> Puntos totales anotados: {item.pts} </th>
                <th> % Tiros de campo: {item.fg_pct} </th>
                <th> % Tiros de 3 puntos: {item.fg3_pct} </th>
                <th> % Tiros libres: {item.ft_pct} </th>
              </table>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Averages;
