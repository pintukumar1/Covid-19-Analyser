import React,{useState,useEffect} from "react";
import classes from "./Table.module.css";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import axios from "axios";

const TableComponent = () => {
    const [states,setStates] = useState([]);

    const fetchCases = async() => {
        const response = await axios.get("https://api.covid19india.org/data.json");
        setStates(response?.data?.statewise);
    }

    useEffect(() => {
        fetchCases();
    },[states]);

    return(
        <Table className={classes.table}>
      <Thead>
        <Tr>
          <Th className={classes.heading}>STATE/UT</Th>
          <Th  className={classes.heading}>CONFIRMED</Th>
          <Th  className={classes.heading}>ACTIVE</Th>
          <Th  className={classes.heading}>RECOVERED</Th>
          <Th  className={classes.heading}>DECEASED</Th>
        </Tr>
      </Thead>
      <Tbody>
          {states.map((stateObj,index) => {
              return(
                <Tr key={index}>
                <Td>{stateObj.state}</Td>
                <Td>{stateObj.confirmed}</Td>
                <Td>{stateObj.active}</Td>
                <Td>{stateObj.recovered}</Td>
                <Td>{stateObj.deaths}</Td>
              </Tr>
              )
          })}  
      </Tbody>
    </Table>
    )
}

export default TableComponent;