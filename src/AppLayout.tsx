import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <>
      <header />
      <Outlet />
      <footer />
    </>
  );
}

export default AppLayout;
