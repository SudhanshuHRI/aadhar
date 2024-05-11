import { Route, Routes } from "react-router-dom";
import Input from "./components/input";
import Output from "./components/output";
import { createContext, useState } from "react";

export const Data = createContext();

function App() {

  const [formData,setformdata] = useState('');

  const getData = (data)=>{
    // console.log("getData",data)
    setformdata(data)
  }
  return (
    <Data.Provider value={{parentData:getData,sentData:formData}}>
      <Routes>
        <Route path="/" element={<Input />} />
        <Route path="/output" element={<Output  />} />
      </Routes>
    </Data.Provider>
  );
}

export default App;
