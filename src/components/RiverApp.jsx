import Rive from "@rive-app/react-canvas";

export const RiveDemo = () => (
  <Rive
    src="/caminando-t.riv"
    stateMachines="State Machine 1"
    style={{
      height: "500px",
    }}
  />
);
