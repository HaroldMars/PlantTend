import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>🌱 Welcome to PlantTend!</h1>
      <p>You are logged in.</p>
      <button onClick={() => navigate("/")}>Log Out</button>
    </div>
  );
}