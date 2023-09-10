import React from "react";
import Provider from "./provider";
import MainRoute from "./routes";

export default function App() {
  return (
    <Provider>
      <MainRoute />
    </Provider>
  );
}
