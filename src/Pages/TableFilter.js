import React from 'react';

const TableFilter = ({ employe }) => {
  const { id, frist, last, brith, adress, joining, salary, designation } = employe;
  return (
    <tr>
      <td>
        <h6 className="employ-id">{id}</h6>
      </td>
      <td>
        <h6 className="employ-details">{frist}</h6>
      </td>
      <td>
        <h6 className="employ-details">{last}</h6>
      </td>
      <td>
        <h6 className="employ-details">{brith}</h6>
      </td>
      <td>
        <h6 className="employ-details">{adress}</h6>
      </td>
      <td>
        <h6 className="employ-details">{joining}</h6>
      </td>
      <td>
        <h6 className="employ-details">$ {salary}</h6>
      </td>
      <td>
        <h6 className="employ-details">{designation}</h6>
      </td>
    </tr>
  );
};

export default TableFilter;