
import axios from "axios";
import { API_URL } from "../utils/helper";
import { Select } from "antd";

const { Option } = Select;

const SearchBar = ({ showNames, setFilteredShows, onSearchClear }) => {
  const handleSearch = async (name) => {
    if (!name) return;

    const showData = await axios.get(`${API_URL}/search/shows?q=${name}`);
    setFilteredShows(showData.data);
  };

  return (
    <>
      <Select
        showSearch
        allowClear
        placeholder="Search..."
        optionFilterProp="showList"
        onChange={handleSearch}
        onClear={onSearchClear}
        filterOption={(input, option) =>
        option.children.toLowerCase().includes(input.toLowerCase())
        }
        className="w-full border-2 border-slate-400 "
      >
        {showNames.map((show, idx) => (
          <Option key={idx} value={show.toLowerCase()}>
            {show}
          </Option>
        ))}
      </Select>
    </>
    
  );
};

export default SearchBar;
