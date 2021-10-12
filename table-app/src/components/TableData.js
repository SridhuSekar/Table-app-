import React, { useEffect, useState } from "react";
import axios from "axios";

export const TableData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetch() {
      const fetched = await axios.get(
        "https://api.instantwebtools.net/v1/passenger?page=0&size=10"
      );
      console.log(fetched);
      setData(fetched.data.data);
    }
    fetch();
  }, []);

  return (
    <div>
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Airline Name</th>
          <th>Trip</th>
        </tr>

        {data.map((get_it) => (
          <>
            <tr>
              <td>{get_it.airline.id}</td>
              <td>{get_it.name}</td>
              <td>{get_it.airline.name}</td>
              <td>{get_it.trips}</td>
            </tr>
          </>
        ))}
      </table>
    </div>
  );
};
