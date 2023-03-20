import React, { useCallback, useEffect, useState } from "react";

import Teams from "./components/Teams/Teams";
import Header from "./components/header/Header";
import Games from "./components/games/Games";
import s from "./App.module.css";
import Players from "./components/Players/Players";
import Stats from "./components/Stats/Stats";
import Averages from "./components/Season_averages/Averages";
import Divisiones from "./components/divisiones/Divisiones";

function App() {
  const [dataId, setdataId] = useState([]);

  const [dataTeams, setdataTeams] = useState([]);

  const majorurl = "https://www.balldontlie.io/api/v1/teams";

  const fetchTeams = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setdataTeams(data.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchTeams(majorurl);
  }, []);

  const [dataGames, setdataGames] = useState([]);
  const [paginas, setpaginas] = useState({});
  const [page, setpage] = useState(1);

  const dataGamescallback = useCallback((page) => {
    fetchGames(page);
  }, []);

  const fetchGames = (page) => {
    fetch(
      `https://www.balldontlie.io/api/v1/games?seasons[]=2022&per_page=99&page=${page}`
    )
      .then((response) => response.json())
      .then((data) => {
        setdataGames(data.data);
        setpaginas(data.meta);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    dataGamescallback(page);
  }, [page, dataGamescallback]);

  const [dataPlayers, setdataPlayers] = useState([]);
  const [paginasPlayers, setpaginasPlayers] = useState({});
  const [pages, setpages] = useState(1);

  const dataPlayerscallback = useCallback((pages) => {
    fetchPlayers(pages);
  }, []);

  const fetchPlayers = (pages) => {
    fetch(`https://www.balldontlie.io/api/v1/players?per_page=95&page=${pages}`)
      .then((response) => response.json())
      .then((data) => {
        setdataPlayers(data.data);
        setpaginasPlayers(data.meta);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    dataPlayerscallback(pages);
  }, [pages, dataPlayerscallback]);

  const [dataAverage, setdataAverage] = useState([]);
  const [playersData, setPlayersData] = useState([]);

  useEffect(() => {
    fetchAverages(playersData);
  }, [playersData]);

  const fetchAverages = (playersData) => {
    return fetch(
      `https://www.balldontlie.io/api/v1/season_averages?season=2018&player_ids[]=${playersData.id}`
    )
      .then((response) => response.json())
      .then((data) => setdataAverage({ average: data.data, ...playersData }))
      .catch((error) => console.log(error));
  };
  const [dataStats, setdataStats] = useState([]);

  const statsUrl = `https://www.balldontlie.io/api/v1/stats`;

  const fetchStats = (statsUrl) => {
    fetch(statsUrl)
      .then((response) => response.json())
      .then((data) => setdataStats(data.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchStats(statsUrl);
  }, [statsUrl]);

  const [section, setSection] = useState(0);
  const [conference, setConference] = useState("");
  const [divi, setDivi] = useState("");

  const sections = [
    <Teams
      setConference={setConference}
      setDivi={setDivi}
      dataTeams={dataTeams}
      setSection={setSection}
    />,
    <Games
      dataGames={dataGames}
      setpage={setpage}
      setSection={setSection}
      paginas={paginas}
    />,
    <Players
      setdataId={setdataId}
      dataPlayers={dataPlayers}
      setSection={setSection}
      setpages={setpages}
      paginasPlayers={paginasPlayers}
      playersAverage={setPlayersData}
    />,
    <Stats dataId={dataId} dataStats={dataStats} setSection={setSection} />,
    <Averages dataAverage={dataAverage} setSection={setSection} />,

    <Divisiones
      conference={conference}
      divi={divi}
      dataTeams={dataTeams}
      setSection={setSection}
    />,
  ];

  return (
    <>
      <div className={s.marginDiv}>{sections[section]}</div>
      <Header setSection={setSection} />
    </>
  );
}

export default App;
