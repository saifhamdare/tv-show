import styles from "../styles";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import Cards from "./Cards";
import axios from "axios";
import { API_URL } from "../utils/helper";
import moment from "moment";
const Content = ({showsData,showNames, setFilteredShows, onSearchClear}) => {
  return (
    <div className={`${styles.paddingX} content`}>
      <SearchBar
        showNames={showNames}
        setFilteredShows={setFilteredShows}
        onSearchClear={onSearchClear}
      />
      <div className="mt-5 flex justify-center">
        <Cards showsData={showsData} />
      </div>
    </div>
  );
};

export default Content;
