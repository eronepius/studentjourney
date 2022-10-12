import React,{useState, useEffect} from "react";
import data from "./data.json"
import styled from "styled-components";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";


const Searchdiv = styled.div`
    width: 60vh;
    padding: 10px;
    text-align: center;
    margin:auto;

`;

function Search(props){
    let navigate = useNavigate();
    let setData = props.params;
    const [search, setSearch] = useState("");

    const handleSubmit =async(e) => {
        e.preventDefault();
        let value = await e.target[0].value;
        await setSearch(value)
    }

    useEffect(()=>{
        let userdata = data.filter(x => x['id'] === search.toString());
        console.log(userdata);
        setData(userdata);
        try{
        if(userdata[0].hasOwnProperty('id'))
            navigate("./marks")
        }catch(e){
            console.log(e);
        }
    }, [search])



    return(
        <>
        <Searchdiv>
        <Form onSubmit={handleSubmit} >
        <Form.Label htmlFor="inputPassword5">Search Register No: </Form.Label>
            <Form.Control
                type="text"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
            />
            <br></br>
            <Button variant="outline-primary" type="submit">Search</Button>
        </Form>
        </Searchdiv>
        </>
    )
}

export default Search;
