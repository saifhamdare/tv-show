import Content from "./components/Content";
import Navbar from "./components/Navbar";
import { Routes, Route, useParams } from "react-router-dom";
import CardDetails from "./components/CardDetails";
import "antd/dist/antd.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "./utils/helper";
import Footer from "./components/Footer";
import moment from "moment";

function App() {
  const [showsData, setShowsData] = useState([]);
  const [showNames, setShowNames] = useState([]);

  const getShows = async () => {
    const shows = await axios.get(`${API_URL}/schedule?country=IN&date=2019-09-06`);
    console.log(shows.data, moment().format("YYYY-DD-MM"));

    if (shows.data.length) {
      setShowsData(shows?.data);
      getShowNames(shows?.data);
    } else {
      alert("Something went wrong!");
    }
  };

  const getShowNames = (shows) => {
    const names = shows.map((show) => show.show.name);
    setShowNames(names);
    console.log(names);
  };

  const setFilteredShows = (data) => {
    console.log(data)
    setShowsData(data);
  };

  const onSearchClear = () => {
    getShows();
  };

  useEffect(() => {
    getShows();
    console.log("Default called!");
  }, []);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Content showsData={showsData}  showNames={showNames} setFilteredShows={setFilteredShows} onSearchClear={onSearchClear} />} />
        <Route path="/:id" element={<CardDetails showsData={showsData}  />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
