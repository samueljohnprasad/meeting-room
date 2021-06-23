import React from "react";
import DisplayMeeting from "./DisplayMeeting";
import FormComp from "./FormComp";
function Home() {
  return (
    <div className="App">
      <div>
        <h1>your meetings</h1>
        <div className="lol">
          <DisplayMeeting />
        </div>
      </div>
      <div className="hey">
        <FormComp />
      </div>
    </div>
  );
}

export default Home;
