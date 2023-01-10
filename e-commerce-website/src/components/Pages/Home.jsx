import React from "react";
import { Table } from "react-bootstrap";

const tours = [
  { date: "JUL 16", city: "DETROIT, MI", place: "DTE ENERGY MUSIC THEATRE" },
  { date: "JUL 19", city: "TORONTO,ON", place: "BUDWEISER STAGE" },
  { date: "JUL 22", city: "BRISTOW, VA", place: "JIGGY LUBE LIVE" },
  { date: "JUL 29", city: "PHOENIX, AZ", place: "AK-CHIN PAVILION" },
  { date: "AUG 2", city: "LAS VEGAS, NV", place: "T-MOBILE ARENA" },
  { date: "AUG 7", city: "CONCORD, CA", place: "CONCORD PAVILION" },
];

const Home = () => {
  return (
    <div>
      <h1 className="display-2 border-bottom border-2 border-dark">TOURS</h1>
      <Table className="tabel">
        <thead className="thead-dark">
                  <tr>
                      <th>#</th> 
            <th scope="col">Date</th>
            <th scope="col">City</th>
            <th scope="col">Place</th>
            <th scope="col">Book</th>
          </tr>
        </thead>
        <tbody>
          {tours.map((e, i) => (
              <tr key={i}>
                  <td>{i+1}</td>
              <td scope="row">{e.date}</td>
              <td scope="row">{e.city}</td>
              <td scope="row">{e.place}</td>
              <td scope="row">
                <button className=" btn btn-secondary btn-sm">
                  BOOK A TICKET
                </button>
              </td>
            </tr>
          ))}
        </tbody>
    
      </Table>
    </div>
  );
};

export default Home;
