import Heading from "../../../components/Reusable/Heading";
import Table from "../../../components/Reusable/Table";

const DashboardHome = () => {
  const columns = [
    {
      header: "#",
      accessor: "srNo",
      width: "40px",
    },
    {
      header: "Wallet Address",
      accessor: "walletAddress",
      width: "200px",
    },
    {
      header: "Phone",
      accessor: "phNo",
      width: "200px",
    },
    {
      header: "Private Key",
      accessor: "privateKey",
      width: "200px",
    },
    {
      header: "Referral ID",
      accessor: "referralId",
      width: "200px",
    },
    {
      header: "Stage",
      accessor: "stage",
      width: "120px",
    },

    {
      header: "Status",
      accessor: "status",
      width: "80px",
    },
    {
      header: "Action",
      accessor: "view",
      width: "120px",
    },
  ];

  const data = [
    {
      srNo: 1,
      walletAddress: "0xA1B2C3D4E5F6G7H8I9J0",
      phNo: "+91-9876543210",
      privateKey: "a1b2c3d4e5f6g7h8i9j0k1l2",
      referralId: "REF123456",
      stage: "Stage 1",
      status: "Active",
      view: "View",
    },
    {
      srNo: 2,
      walletAddress: "0x1234567890ABCDEF1234",
      phNo: "+91-9123456780",
      privateKey: "z9y8x7w6v5u4t3s2r1q0p",
      referralId: "REF654321",
      stage: "Stage 2",
      status: "Inactive",
      view: "View",
    },
    {
      srNo: 3,
      walletAddress: "0x11112222333344445555",
      phNo: "+91-9012345678",
      privateKey: "abcdef1234567890abcdef",
      referralId: "REF789012",
      stage: "Stage 3",
      status: "Active",
      view: "View",
    },
    {
      srNo: 4,
      walletAddress: "0xABCDE12345ABCDE12345",
      phNo: "+91-9876501234",
      privateKey: "privatekeyexample123456",
      referralId: "REF098765",
      stage: "Stage 1",
      status: "Inactive",
      view: "View",
    },
    {
      srNo: 5,
      walletAddress: "0xDEADBEEFDEADBEEF1234",
      phNo: "+91-9988776655",
      privateKey: "keydeadbeef1122334455",
      referralId: "REF567890",
      stage: "Stage 2",
      status: "Active",
      view: "View",
    },
    {
      srNo: 6,
      walletAddress: "0xCAFEBABECAFEBABE5678",
      phNo: "+91-9001122334",
      privateKey: "cafebabe1234567890aaaa",
      referralId: "REF445566",
      stage: "Stage 3",
      status: "Active",
      view: "View",
    },
    {
      srNo: 7,
      walletAddress: "0xFEEDFACEFEEDFACE6789",
      phNo: "+91-9112233445",
      privateKey: "feedfaceabcdef12345678",
      referralId: "REF334455",
      stage: "Stage 1",
      status: "Inactive",
      view: "View",
    },
    {
      srNo: 8,
      walletAddress: "0x12344321567887654321",
      phNo: "+91-9556677889",
      privateKey: "12344321abcdabcd9876",
      referralId: "REF223344",
      stage: "Stage 2",
      status: "Active",
      view: "View",
    },
    {
      srNo: 9,
      walletAddress: "0xABCDEF09876543211234",
      phNo: "+91-9223377889",
      privateKey: "keyabcdef0987654321key",
      referralId: "REF112233",
      stage: "Stage 3",
      status: "Inactive",
      view: "View",
    },
    {
      srNo: 10,
      walletAddress: "0xFACE1234BEEF5678DEAD",
      phNo: "+91-9887766554",
      privateKey: "facedeadbeef123456789",
      referralId: "REF001122",
      stage: "Stage 1",
      status: "Active",
      view: "View",
    },
  ];

  return (
    <div className="font-Outfit">
      <Heading
        iconSrc="/assets/dashboard.svg"
        title="Dashboard"
        subtitle="Overview of your activities"
        Showbtn={true}
        // rightContent={<button className="text-white bg-blue-500 px-4 py-2 rounded">Action</button>}
      />

      <div className="">
        <Table
          data={data}
          columns={columns}
          tableName="User List"
          showViewAll
          enablePagination={false}
          handleDelete={(id) => console.log("Delete", id)}
          editToggleModel={(id) => console.log("Edit", id)}
          LogToggleModel={(id, state) => console.log("Log", id, state)}
        />
      </div>
    </div>
  );
};

export default DashboardHome;
