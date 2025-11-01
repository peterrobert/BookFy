const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div
      role="alert"
      style={{ textAlign: "center", padding: "2rem", color: "red" }}
    >
      <h2>Something went wrong 😞</h2>
      <pre style={{ color: "crimson" }}>{error.message}</pre>
      <button
        onClick={resetErrorBoundary}
        style={{
          marginTop: "1rem",
          padding: "0.6rem 1rem",
          background: "#6b21a8",
          color: "white",
          border: "none",
          borderRadius: "8px",
        }}
      >
        Try again
      </button>
    </div>
  );
};

export default ErrorFallback;
