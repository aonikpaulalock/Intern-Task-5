import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import TableFilter from "../Pages/TableFilter"
import "../Styles/TableFilters.css"
const TableFilters = ({ employes }) => {
  const [search, setSearch] = useState('');

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const datas = (employe) => {
    return employe.filter((item) =>
      item.frist.toLowerCase().includes(search.toLowerCase()) || 
      item.last.toLowerCase().includes(search.toLowerCase()) ||
      item.adress.toLowerCase().includes(search.toLowerCase()) ||
      item.salary.toLowerCase().includes(search.toLowerCase()) ||
      item.designation.toLowerCase().includes(search.toLowerCase())
    )
  };
  return (
    <div className="table-container">
      <h1 className="schedule-main-heading">Find Employees</h1>

      {/*
                           ==================
                             Search-Form 
                           ==================
     */}
      <form class="d-flex w-50 mx-auto mb-4" role="search">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={handleSearch}
        />
      </form>

      {/*   ================== 
                    Table 
             ================== */}

      <div className="container">
        <div className="table-responsive">
          <Table bordered borderless>
            <thead className="table-heading-back">
              <tr className="table-sub-head">
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Date of Birth</th>
                <th>Address</th>
                <th>Date of Joining</th>
                <th>Salary</th>
                <th>Designation</th>
              </tr>
            </thead>
            <tbody>
              {
                datas(employes).map(employe =>
                  <TableFilter
                    key={employe.id}
                    employe={employe}>
                  </TableFilter>)

              }
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default TableFilters;