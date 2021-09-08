import { useEffect, useState } from "react";
import { IDigipet } from "../interfaces/IDigipet";
import DigipetStats from "./DigipetStats";

export default function Digipet(): JSX.Element {
  const [digipet, setDigipet] = useState<IDigipet | undefined>(undefined);
  const [currentEndpoint, setCurrentEndpoint] = useState("/digipet");

  useEffect(() => {
    fetch(`http://localhost:4000${currentEndpoint}`)
      .then((res) => res.json())
      .then((res) => setDigipet(res.digipet));
  }, [currentEndpoint]);

  const handleClick = function (endpoint: string) {
    setCurrentEndpoint(endpoint);
  };

  return (
    <div>
      {digipet ? (
        <>
          <DigipetStats digipet={digipet} />
          <button onClick={() => handleClick("/digipet/feed")}>Feed</button>
          <button onClick={() => handleClick("/digipet/walk")}>Walk</button>
          <button onClick={() => handleClick("/digipet/train")}>Train</button>
        </>
      ) : (
        <>
          <p>You have no digipet yet. Click below to hatch one.</p>
          <button onClick={() => handleClick("/digipet/hatch")}>Hatch</button>
        </>
      )}
    </div>
  );
}
