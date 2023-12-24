// PointsHistoryTable.js
import React from 'react';
import { Table } from 'react-bootstrap';
import './styles/pointhistory.css';

const PointsHistoryTable = () => {
  return (
    <Table className="table" striped bordered variant='info'>
      <thead>
        <tr>
          <th>Points</th>
          <th>Task Completed</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><div className="circle">10</div></td>
          <td>Completed Task 1</td>
        </tr>
        <tr>
          <td><div className="circle">20</div></td>
          <td>Completed Task 2</td>
        </tr>
        <tr>
          <td><div className="circle">5</div></td>
          <td>Completed Task 3</td>
        </tr>
        <tr>
          <td><div className="circle">10</div></td>
          <td>Completed Task 4</td>
        </tr>
        {/* Add more rows as needed */}
      </tbody>
    </Table>
  );
}

export default PointsHistoryTable;
