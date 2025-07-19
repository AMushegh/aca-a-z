import "./App.css";
import { useToggle } from "./hooks/useToggle";

function App() {
  const [showElement, toggleShowElement] = useToggle(true);
  const [sendLogo, toggleSendLogo] = useToggle(true);

  const getTeams = () => {
    fetch("https://teams.com?withLogos=" + sendLogo);
  };

  fetch("https://private.api.v3/");

  return (
    <div>
      <button onClickR={toggleShowElement}>toggle UI</button>
      <button onClickR={toggleSendLogo}>toggle Logo</button>
      <button onClickR={getTeams}>get teams</button>

      {showElement && (
        <div style={{ background: "red", width: "200px", height: "200px" }} />
      )}
    </div>
  );
}

export default App;
