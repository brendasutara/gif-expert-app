import "./styles.css";

export const Loader = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "600px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      Cargando...
      <div className="loader" />
    </div>
  );
};
