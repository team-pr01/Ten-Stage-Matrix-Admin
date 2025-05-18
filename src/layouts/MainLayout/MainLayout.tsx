import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="bg-neutral-15">
      <Outlet />
    </div>
  );
};

export default MainLayout;
