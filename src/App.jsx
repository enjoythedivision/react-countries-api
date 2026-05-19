import { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import "./App.css";
import axios from "axios";
import CountryTable from "./components/CountryTable";
import Search from "./components/Search"

function App() {
  const [countries, setCountries] = useState([]);
  const [numPages, setNumPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const itemsPerPage = 10;
  //the useState hook takes 2 arguments: variable, function
  //to change the state of the variable

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,maps,independent",
        );
        const totalItems = response.data.length;

        const numberOfPages = calculatePages(totalItems);
        setNumPages(numberOfPages);

        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

        const countriesForPage = response.data.slice(startIndex, endIndex);
        setCountries(countriesForPage);
      } catch (error) {
        console.error("Error is", error);
      }
    };
    fetchData();
  }, [currentPage]);

  const calculatePages = (totalItems) => {
    return Math.ceil(totalItems / itemsPerPage);
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div>
      <h3>Countries Database</h3>
      <Search search={handleSearch}/>
      <CountryTable countries={countries} />
      <div>
        <Pagination
          onChange={handlePageChange}
          count={numPages}
          page={currentPage}
        />
      </div>
    </div>
  );
}

export default App;
