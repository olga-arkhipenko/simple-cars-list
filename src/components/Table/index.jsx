import React from 'react';
import './style.css';
import TableHeading from '../TableHeading';
import CarsRow from '../CarsRow';

const Table = ({ data, headings }) => {
    const tableBody = data.map(item => <CarsRow key={ item.owner } car={ item } />);

    return (
        <table className="table">
            <caption className="table__caption"> List of all cars </caption>
            <TableHeading headings={ headings }/>
            <tbody>
                { tableBody }
            </tbody>
        </table>
    )
};

export default Table;