import axios from "axios";
import { useJourneys } from "../../store/journeys";

class Journeys {
  async getJourneys() {
    const resp = await axios.get(
      "https://68add0e5a0b85b2f2cf4c016.mockapi.io/api/v1/jouneys"
    );

    useJourneys.setState({ journeys: resp.data, loading: false });
  }
}

const instance = new Journeys();
export default instance;
