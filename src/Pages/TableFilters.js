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
      <h1 className="employ-main-heading">Find Employees</h1>

      {/*
                           ==================
                             Search-Form 
                           ==================
     */}
      <form class="d-flex w-50 mx-auto mb-4 form-container" role="search">
        <input
          class="form-control input-field"
          type="search"
          placeholder="Search Your Employes"
          aria-label="Search"
          onChange={handleSearch}
        />
        <span className="icon-position">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#ddd" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </span>
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