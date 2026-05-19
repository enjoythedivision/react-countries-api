import { useState } from 'react'
import Pagination from '@mui/material/Pagination';
import './App.css'

function App() {
  const [countries, setCountries] = useState([]);
  const [numPages, setNumPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchInput, setSearchInput] = useState('');
  const itemsPerPage = 10;
  //the useState hook takes 2 arguments: variable, function
  //to change the state of the variable

  useEffect(() => {
    const fetchData = async () => {
      try{

      } catch (error) {
        console.error("Error is", error)
      }
    }
  })

  return (
    <div>
      <h3>Countries Database</h3>
      <div>
        <Pagination count = {numPages} page={currentPage}/>
      </div>

    </div>
  )
}

export default App
