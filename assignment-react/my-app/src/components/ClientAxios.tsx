"use client";

import { useState } from "react";
import { CircularProgress } from "@mui/material";
import { getDogs } from "../app/assignment-5/actions";
const ClientAxios = ({ result }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const retry = async () => {
    setLoading(true);
    try {
      const res = await getDogs();
      setData(res);
    } catch (err) {
      console.error("error", err);
    } finally {
      setLoading(false);
    }
  };

  return (

  <>
   <button onClick={retry} disabled={result || loading}>
      retry
    </button>
    {loading ? (
      <div>
        <CircularProgress color="primary" />
      </div>
    ) : !result ? (
      data?.length > 0 ? (
        <ul>
          {data.map((items, index) => (
            <li key={index}>{items.attributes.body}</li>
          ))}
        </ul>
      ) : (
        <p>retry</p>
      )
    ) : (
      <p>Server data already loaded.</p>
    )}

   
  </>
);

};

export default ClientAxios;