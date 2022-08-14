import React from 'react';

const TableFilter = ({ employe }) => {
  const { id, frist, last, brith, adress, joining, salary, designation } = employe;
  return (
    <tr>
      <td>
        <h6 className="table-time">{id}</h6>
      </td>
      <td>
        <h6 className="tainingg">{frist}</h6>
      </td>
      <td>
        <h6 className="tainingg">{last}</h6>
      </td>
      <td>
        <h6 className="tainingg">{brith}</h6>
      </td>
      <td>
        <h6 className="tainingg">{adress}</h6>
      </td>
      <td>
        <h6 className="tainingg">{joining}</h6>
      </td>
      <td>
        <h6 className="tainingg">$ {salary}</h6>
      </td>
      <td>
        <h6 className="tainingg">{designation}</h6>
      </td>
    </tr>
  );
};

export default TableFilter;