"use client";
import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

export default function GlobalDataTable({ rows = [], columns = [], pageSizeOptions = [5, 10], height = 400 }) {
  const paginationModel = { page: 0, pageSize: pageSizeOptions[0] };

  return (
    <Paper sx={{ height, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={pageSizeOptions}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
