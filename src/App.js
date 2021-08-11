import Navbar from './Navbar/Navbar';
import './App.css';
import { useEffect, useState } from 'react';
import { fetchData } from './service/Api';
import Characters from './components/Characters/Characters';
import { CustomPagination } from './components/Pagination/CustomPagination';
function App() {
   const [text, setText] = useState("");
   const [data, setData] = useState([]);
   const [page, setPage] = useState(1)

  useEffect(() => {
    const getData = async () =>{
     const result= await fetchData(text);
     setData(result.data);
    }
    getData();
  }, [text])

 const getText=(text)=>{
    setText(text);
    console.log(text)
  }

  return (
    <div className="App">
      <header className="App-header">
       <Navbar getText={getText}/>
       <Characters data={data} page={page}/>
        <CustomPagination setPage={setPage}/>
      </header>
    </div>
  );
}

export default App;
