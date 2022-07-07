import React from "react";
import { Grid } from "@material-ui/core";
import HighlightCard from "./HighlightCard";

function Highlight({ report }) {
  const data = report && report.length ? report[report.length - 1] : [];

  const summary = [
    {
      title: "Số ca nhiễm",
      count: data.Confirmed,
      type: "confirmed",
    },
    {
      title: "Khỏi",
      count: data.Active,
      type: "recovered",
    },
    {
      title: "Tử vong",
      count: data.Deaths,
      type: "death",
    },
  ];

  return (
    <Grid container spacing={3}>
      {summary.map((data, index) => (
        <Grid key={index} item sm={4} xs={12}>
          <HighlightCard
            title={data.title}
            count={data.count}
            type={data.type}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default Highlight;
