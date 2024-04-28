import React, { useState } from "react";
import logo from "../assets/logo.png";
import "./App.css";
import { Button } from "@mui/material";

function App() {
  const randomColorPalette = ["white", "red", "blue", "orange", "purple"];

  const [clicks, setClicks] = useState(0);
  const styles = useStyles();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <p style={styles.baseText}>
          Show do <span style={styles.bigDumbText}>Burrão</span>
        </p>
        <Button
          variant="contained"
          onClick={() => {
            const currentClicks = clicks + 1;
            if (currentClicks === randomColorPalette.length) setClicks(0);
            else setClicks(currentClicks);
          }}>
          Burrão?
        </Button>
      </header>
    </div>
  );

  function useStyles(): Record<string, React.CSSProperties> {
    return {
      baseText: { fontSize: 40 },
      bigDumbText: {
        color: randomColorPalette[clicks],
        ...(clicks === 0
          ? {}
          : {
              WebkitTextStrokeWidth: 1,
              WebkitTextStrokeColor: randomColorPalette[clicks - 1],
            }),
      },
    };
  }
}

export default App;
