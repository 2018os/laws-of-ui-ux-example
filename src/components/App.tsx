import React from "react";

import data from "../static/data.json";

import Container from "../layout/Container";
import Grid from "../layout/Grid";

import Card from "./Card";

const App = () => (
  <Container>
    <h1>UI / UX 의 10가지 심리학 법칙</h1>
    <Grid>
      {data.map((value) => (
        <Card {...value} key={value.title} />
      ))}
    </Grid>
  </Container>
);

export default App;
