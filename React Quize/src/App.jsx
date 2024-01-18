import { useState } from "react";
import DateCounter from "./DateCounter";
import Header from "./Header";
import Main from "./MainSection";

function App() {
  return (
    <div className="app">
      <Header />
      <Main>
        <p>1/15</p>
        <p>Question</p>
      </Main>
    </div>
  );
}

export default App;
