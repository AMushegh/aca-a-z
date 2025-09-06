import React from "react";
// import { useEffect } from "react";
import controller from "../services/Controller";
import { useJourneys } from "../../store/journeys";

const Journeys = () => {
  //   useEffect(() => {
  //     controller.journeysComponentRendered();
  //   }, []);

  const journeys = useJourneys((state) => state.journeys);
  console.log(journeys);

  return (
    <div>
      Journeys
      <button onClick={controller.journeysGetButtonClicked}>
        get journeys
      </button>
    </div>
  );
};

export default Journeys;
