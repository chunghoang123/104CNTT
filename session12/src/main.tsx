import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { TableInfo } from "./component/TableInfo";
// import { UserLayout } from "./component/UserLayout";
// import App from "./App.tsx";
// import { ListCourse } from "./component/bai01.tsx";
// import { Calculation } from "./component/Calculation.tsx";
// import UserInfo from "./component/UserInfo.tsx";
// import { ColorBox } from "./component/ColorBox.tsx";
// import { FormatName } from "./component/FormatName.tsx";
// import { AdminIndex } from "./component/AdminIndex.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <ListCourse />
    <Calculation />
    <UserInfo />
    <ColorBox />
    <FormatName />
    <AdminIndex /> */}
    {/* <UserLayout></UserLayout> */}
    <TableInfo></TableInfo>
  </StrictMode>
);
