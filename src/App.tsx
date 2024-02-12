import "./App.css";
import Layout, { Header } from "antd/es/layout/layout";
import SiderBar from "./components/SiderBar/sideBar";

import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  const layoutStyle = {
    overflow: "hidden",
    width: "100%",
    height: "100%",
  };
  const headerStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#fff",
    height: 64,
    paddingInline: 48,
    lineHeight: "64px",
    backgroundColor: "#FFFFFF",
  };
  const siderStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#FFFFFF",
  };

  return (
    <>
      <Layout style={layoutStyle}>
        <SiderBar style={siderStyle} />
        <Layout>
          <Header style={headerStyle}></Header>
          <Dashboard />
        </Layout>
      </Layout>
    </>
  );
}

export default App;
