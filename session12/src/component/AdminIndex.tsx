export function AdminIndex() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        background: "#f3f4f6",
      }}
    >
      <nav>{navBar()}</nav>
      <div style={{ flex: 1, display: "flex", gap: "10px" }}>
        {menu()}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            margin: "20px",
          }}
        >
          {main()}
          {footer()}
        </div>
      </div>
    </div>
  );
}

const textCenter = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

function navBar() {
  return (
    <div
      style={{
        ...textCenter,
        background: "#d1d5db",
        height: "60px",
        color: "black",
      }}
    >
      Header
    </div>
  );
}

function menu() {
  return (
    <div
      style={{
        ...textCenter,
        background: "#1e3a8a",
        color: "white",
        width: "200px",
      }}
    >
      Menu
    </div>
  );
}

function main() {
  return (
    <div
      style={{
        ...textCenter,
        background: "#ffffff",
        color: "black",
        flex: 1,
      }}
    >
      Main
    </div>
  );
}

function footer() {
  return (
    <div
      style={{
        ...textCenter,
        background: "#d1d5db",
        height: "50px",
        color: "black",
      }}
    >
      Footer
    </div>
  );
}
