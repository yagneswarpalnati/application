import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [meet, setMeet] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then(res => res.text())
      .then(data => setMessage(data));

    fetch("http://localhost:5000/meet")
      .then(res => res.text())
      .then(data => setMeet(data));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Backend</h1>
      <h1>{message}</h1>
      <h2>{meet}</h2>
      <h1>Combined docker compose file</h1>
    </div>
  );
}

export default App;