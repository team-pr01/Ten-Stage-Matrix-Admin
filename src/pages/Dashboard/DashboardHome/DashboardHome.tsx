import Heading from "../../../components/Reusable/Heading";

const DashboardHome = () => {
  return (
    <div className="font-Outfit">
      <Heading 
  iconSrc="/assets/dashboard.svg"
  title="Dashboard"
  subtitle="Overview of your activities"
  Showbtn={true}
  // rightContent={<button className="text-white bg-blue-500 px-4 py-2 rounded">Action</button>}
/>
    </div>
  );
};

export default DashboardHome;
