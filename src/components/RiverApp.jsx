import Rive from "@rive-app/react-canvas";

export const RiveDemo = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <p>Acercate, mira como camino 👇</p>
    <Rive
      src="/caminando-t.riv"
      stateMachines="State Machine 1"
      style={{
        height: "500px",
      }}
    />
  </div>
);
