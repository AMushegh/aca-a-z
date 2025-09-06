import Journeys from "./Journeys";

class Controller {
  constructor(journeysService) {
    this.journeysService = journeysService;
  }

  journeysComponentRendered() {
    this.journeysService.getJourneys();
  }

  journeysGetButtonClicked = () => {
    this.journeysService.getJourneys();
  };
}

const instance = new Controller(Journeys);
export default instance;
