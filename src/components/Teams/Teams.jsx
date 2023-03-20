import React from "react";
import s from "./styleTeams.module.css";
import { ImgTeams } from "../../utils/dataImg";
import ReactPlayer from "react-player";

const Teams = ({ dataTeams, setSection, setDivi, setConference }) => {
  return (
    <div className={s.Teams} class="text-center d-flex justify-content-center">
      <div>
        <ReactPlayer
          width="200px"
          height="120px"
          url="https://www.youtube.com/watch?v=T4R9Jc96rtQ"
        />
        <br />
        <img
          width="200px"
          height="120px"
          src="https://fondosmil.com/fondo/1738.jpg"
          alt=""
        />
        <br />
        <br />
        <img
          width="200px"
          height="120px"
          src="https://wallpapers.com/images/hd/kobe-bryant-cool-gold-spiral-pez3g9x14l8c9nmy.jpg"
          alt=""
        />
        <br />
        <br />
        <img
          width="200px"
          height="120px"
          src="https://w0.peakpx.com/wallpaper/255/943/HD-wallpaper-shaquille-o-neal-shaq-diesel-shaq-shaq-and-the-lakers-shaquille.jpg"
          alt=""
        />
        <br />
        <br />
        <img
          width="200px"
          height="120px"
          src="https://cdn.wallpapersafari.com/86/98/sedKR7.jpg"
          alt=""
        />
        <br />
        <br />
        <img
          width="200px"
          height="120px"
          src="https://wallpapers.com/images/hd/nba-legend-tim-duncan-sqnv4ex6z9zcwlec.jpg"
          alt=""
        />
        <br />
        <br />
        <img
          width="200px"
          height="120px"
          src="https://mir-s3-cdn-cf.behance.net/projects/404/5a119454854451.Y3JvcCwxNTM3LDEyMDMsMzY0LDA.jpg"
          alt=""
        />
      </div>
      <div className="row px-4">
        {dataTeams.map((item) => {
          const image = ImgTeams.find(
            (team) => team.name === item.full_name
          )?.img;

          return (
            <div
              className={s.card}
              class="col mb-6"
              style={{ fontSize: "10px"}}
            >
              <p className={s.title} style={{ fontWeight: "bold" }}>{item.full_name}</p>
              <div className="card" style={{ width:'100px', height: "100px" }}>
                <img width="40px" height="40px" src={image} alt="" />
                <div className={s.aa}>
                  <p
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setConference(item.conference);
                      setSection(5);
                    }}
                  >
                    Conference {item.conference}
                  </p>
                </div>

                <div className={s.a}>
                  <p
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setDivi(item.division);
                      setSection(5);
                    }}
                  >
                    Div. {item.division}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <ReactPlayer
          width="200px"
          height="120px"
          url="https://www.youtube.com/watch?v=33WKl2qhrIc"
        />
        <br />
        <img
          width="200px"
          height="120px"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRulAOZ0uU70BQ8gcSJQ2SsceukgVGhLu1ohA&usqp=CAU"
          alt=""
        />
        <br />
        <br />
        <img
          width="200px"
          height="120px"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6U_HZk14-f2_RsjCiy95cFQgUo0llqmfzsg&usqp=CAU"
          alt=""
        />
        <br />
        <br />
        <img
          width="200px"
          height="120px"
          src="https://i.pinimg.com/736x/24/6f/49/246f49a67c33e928a95db81e8f137515.jpg"
          alt=""
        />
        <br />
        <br />
        <img
          width="200px"
          height="120px"
          src="https://bloximages.chicago2.vip.townnews.com/capjournal.com/content/tncms/assets/v3/editorial/3/50/350361d1-174f-5411-9a42-5e2da9565372/63e968c16b603.image.jpg"
          alt=""
        />
        <br />
        <br />
        <img
          width="200px"
          height="120px"
          src="https://www.pixelstalk.net/wp-content/uploads/images6/Giannis-Antetokounmpo-Wallpaper-HD-Free-download.jpg"
          alt=""
        />
        <br />
        <br />
        <img
          width="200px"
          height="120px"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEiXKnv2emNIODlADuHYa1BcKTHlXBJe4kCQ&usqp=CAU"
          alt=""
        />
      </div>
    </div>
  );
};

export default Teams;
