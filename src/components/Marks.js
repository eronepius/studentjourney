import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import {useNavigate} from "react-router-dom";

const NameIDDiv = styled.div`
    display:flex;
    flex-direction:row;
    padding: 14px;
    gap: 10px;
`

function Marks(props) {
    let navigate = useNavigate();
    let marks, keys;
    try{
    marks = props.params;
    marks = marks[0]
    keys = Object.keys(marks);
    keys = keys.filter(x => (x !== 'id' && x !== 'name'))
    }catch(e){
        
    }

    const handleRequestClick = async() =>{
        navigate("../payments")
    }

    if(marks){
        return (
            <>
            <NameIDDiv>
            <h4><u>Name :</u> {marks['name']} | </h4>
            <h4><u>Register No :</u> {marks['id']}</h4>
            </NameIDDiv>
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>Subjects</th>
                <th>Assess I</th>
                <th>Assess II</th>
                <th>End Semester</th>
                </tr>
            </thead>
            <tbody>
                {
                    keys.map((item,i)=>{
                        console.log(i);
                        return(
                            <>
                            <tr key={"mykey"+i}>
                                <td key={item}>{item}</td>
                                <td key={marks[item]['Assess I']}>{marks[item]['Assess I']}</td>
                                <td key={marks[item]['Assess II']}>{marks[item]['Assess II']}</td>
                                <td key={marks[item]['End Semester']}>{marks[item]['End Semester']}</td>
                            </tr>
                            </>
                        )
                    })
                }
            </tbody>
            </Table>
            <Button variant="outline-success" onClick={handleRequestClick}>Request for Marksheet</Button>
            </>
        );
    }
}

export default Marks;