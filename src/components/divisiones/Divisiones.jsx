import React, { useMemo } from "react";
import { ImgTeams } from "../../utils/dataImg";
import { filter } from "../../utils/fiter";

const Divisiones = ({ dataTeams, setSection, conference, divi }) => {
  const dataMemo = useMemo(
    () => filter(dataTeams, conference, divi),
    [dataTeams, conference, divi]
  );

  return (
    <div className="row px-4">
      {dataMemo.map((item) => {
        const image = ImgTeams.find(
          (team) => team.name === item.full_name
        )?.img;

        return (
          <div class="col mb-6" style={{ fontSize: "12px" }}>
            <p style={{ fontWeight: "bold" }}>{item.full_name}</p>
            <div className="card" style={{ width: "120px", height: "120px" }}>
              <img width="50px" height="50px" src={image} alt="" />

              <p>Conference {item.conference}</p>
              <div>
                <p>Div. {item.division}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Divisiones;
