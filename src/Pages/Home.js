import React, { useEffect, useState } from 'react';
import TableFilter from './TableFilters';

const Home = () => {
  const [employes,setEmployes] = useState([]);

  useEffect(()=>{
    fetch("TABLE.json")
    .then(res => res.json())
    .then(data => setEmployes(data))
  },[])

  return (
    <>
      <TableFilter employes={employes} />
    </>
  );
};

export default Home;