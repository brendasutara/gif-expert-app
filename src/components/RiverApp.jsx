import Rive from "@rive-app/react-canvas";

export const RiverApp = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "20%",
    }}
  >
    <p>Acercate, mira como camino 👇</p>
    <Rive
      src="/caminando-t.riv"
      stateMachines="State Machine 1"
      style={{
        height: "800px",
      }}
    />
  </div>
);
