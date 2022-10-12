import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./Search"
import Navbar from "./Navbar"
import Marks from "./Marks";
import Payments from "./Payments";
import FormValidation from "./FormValiadation";

function Organizer(){
    const [data, setData] = useState({});
    // console.log(data);

    return(
        <BrowserRouter>
        <Navbar />
        <Routes>
        <Route exact path="/" element={<Search params={setData} />} />
        <Route exact path="/marks" element={<Marks params={data} />} />
        <Route exact path="/payments" element={<Payments />} />
        <Route exact path="/validate" element={<FormValidation />} />
        </Routes>
        </BrowserRouter>
    )
}

export default Organizer;