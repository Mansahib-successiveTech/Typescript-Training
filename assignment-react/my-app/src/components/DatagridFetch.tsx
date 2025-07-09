"use client";

import React, { useEffect, useState } from "react";
import GlobalDataTable from "./DataTableMui";
import { getUsers } from "../app/assignment-5/actions";


export default function DataTable() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const {data:users} = await getUsers();
      

      const formatted = users.map((user) => ({
        id: user.id,
        Name: user.name,
        age: Math.floor(Math.random() * 50) + 18, // Random age between 18–67
      }));

      setRows(formatted);
    }

    fetchData();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "Name", headerName: "Name", width: 200 },
    { field: "age", headerName: "Age", type: "number", width: 100 },
  ];

  return (
    <div style={{ padding: "2rem" }}>
      <GlobalDataTable
        rows={rows}
        columns={columns}
        pageSizeOptions={[4, 8]}
        height={400}
      />
    </div>
  );
}
