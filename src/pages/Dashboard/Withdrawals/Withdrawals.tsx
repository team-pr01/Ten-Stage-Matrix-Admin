import React from 'react'
import Heading from '../../../components/Reusable/Heading'
import Table from '../../../components/Reusable/Table'

const Withdrawals = () => {
     const columns1 = [
    {
      header: "User Wallet",
      accessor: "userWallet",
      width: "200px",
    },
    {
      header: "Amount",
      accessor: "amount",
      width: "100px",
    },
    {
      header: "Requested Data",
      accessor: "requestedDate",
      width: "200px",
    },
    {
      header: "Time",
      accessor: "time",
      width: "200px",
    },
    {
      header: "status",
      accessor: "status",
      width: "200px",
    },
    
  ];

    const columns2 = [
    {
      header: "User Wallet",
      accessor: "userWallet",
      width: "200px",
    },
    {
      header: "Amout",
      accessor: "amount",
      width: "100px",
    },
    {
      header: "Requested Data",
      accessor: "requestedDate",
      width: "200px",
    },
    {
      header: "Time",
      accessor: "time",
      width: "200px",
    },
    {
      header: "Status",
      accessor: "actionStatus",
      width: "200px",
    },
    
  ];
 const data1 = [
  {
    userWallet: "0xA1B2C3D4E5F6G7H8I9J0",
    amount: "250",
    requestedDate: "2025-05-01",
    time: "14:23:11",
    status: "Approve",
  },
  {
    userWallet: "0xB2C3D4E5F6G7H8I9J0A1",
    amount: "500",
    requestedDate: "2025-05-02",
    time: "09:15:42",
    status: "Reject",
  },
  {
    userWallet: "0xC3D4E5F6G7H8I9J0A1B2",
    amount: "120",
    requestedDate: "2025-05-03",
    time: "10:45:00",
    status: "Reject",
  },
  {
    userWallet: "0xD4E5F6G7H8I9J0A1B2C3",
    amount: "320",
    requestedDate: "2025-05-04",
    time: "16:22:10",
    status: "Approve",
  },
  {
    userWallet: "0xE5F6G7H8I9J0A1B2C3D4",
    amount: "750",
    requestedDate: "2025-05-05",
    time: "11:10:30",
    status: "Reject",
  },
  {
    userWallet: "0xF6G7H8I9J0A1B2C3D4E5",
    amount: "90",
    requestedDate: "2025-05-06",
    time: "08:35:55",
    status: "Reject",
  },
  {
    userWallet: "0xG7H8I9J0A1B2C3D4E5F6",
    amount: "210",
    requestedDate: "2025-05-07",
    time: "13:01:12",
    status: "Approve",
  },
  {
    userWallet: "0xH8I9J0A1B2C3D4E5F6G7",
    amount: "410",
    requestedDate: "2025-05-08",
    time: "15:14:45",
    status: "Reject",
  },
  {
    userWallet: "0xI9J0A1B2C3D4E5F6G7H8",
    amount: "600",
    requestedDate: "2025-05-09",
    time: "17:45:23",
    status: "Reject",
  },
  {
    userWallet: "0xJ0A1B2C3D4E5F6G7H8I9",
    amount: "330",
    requestedDate: "2025-05-10",
    time: "12:55:10",
    status: "Approve Reject",
  },
];
const data2 = [
  {
    userWallet: "0xA1B2C3D4E5F6G7H8I9J0",
    amount: "250",
    requestedDate: "2025-05-01",
    time: "14:23:11",
    actionStatus: "Approve",
  },
  {
    userWallet: "0xB2C3D4E5F6G7H8I9J0A1",
    amount: "500",
    requestedDate: "2025-05-02",
    time: "09:15:42",
    actionStatus: "Reject",
  },
  {
    userWallet: "0xC3D4E5F6G7H8I9J0A1B2",
    amount: "120",
    requestedDate: "2025-05-03",
    time: "10:45:00",
    actionStatus: "Reject",
  },
  {
    userWallet: "0xD4E5F6G7H8I9J0A1B2C3",
    amount: "320",
    requestedDate: "2025-05-04",
    time: "16:22:10",
    actionStatus: "Approve",
  },
  {
    userWallet: "0xE5F6G7H8I9J0A1B2C3D4",
    amount: "750",
    requestedDate: "2025-05-05",
    time: "11:10:30",
    actionStatus: "Reject",
  },
  {
    userWallet: "0xF6G7H8I9J0A1B2C3D4E5",
    amount: "90",
    requestedDate: "2025-05-06",
    time: "08:35:55",
    actionStatus: "Reject",
  },
  {
    userWallet: "0xG7H8I9J0A1B2C3D4E5F6",
    amount: "210",
    requestedDate: "2025-05-07",
    time: "13:01:12",
    actionStatus: "Approve",
  },
  {
    userWallet: "0xH8I9J0A1B2C3D4E5F6G7",
    amount: "410",
    requestedDate: "2025-05-08",
    time: "15:14:45",
    actionStatus: "Reject",
  },
  {
    userWallet: "0xI9J0A1B2C3D4E5F6G7H8",
    amount: "600",
    requestedDate: "2025-05-09",
    time: "17:45:23",
    actionStatus: "Reject",
  },
  {
    userWallet: "0xJ0A1B2C3D4E5F6G7H8I9",
    amount: "330",
    requestedDate: "2025-05-10",
    time: "12:55:10",
    actionStatus: "Approve",
  },
];

  return (
    <div className="font-Outfit">
      <Heading
        iconSrc="/assets/dashboard.svg"
        title="Dashboard"
        subtitle="Overview of your activities"
        Showbtn={false}
        // rightContent={<button className="text-white bg-blue-500 px-4 py-2 rounded">status</button>}
      />

      <div className="mb-4">
        <Table
          data={data1}
          columns={columns1} 
          enablePagination={false}
          handleDelete={(id) => console.log("Delete", id)}
          editToggleModel={(id) => console.log("Edit", id)}
          LogToggleModel={(id, state) => console.log("Log", id, state)}
        />
      </div>
      <Heading
        iconSrc="/assets/dashboard.svg"
        title="Withdrawals History Log "
        // subtitle="Overview of your activities"
        Showbtn={false}
        // rightContent={<button className="text-white bg-blue-500 px-4 py-2 rounded">status</button>}
      />

      <div className="">
        <Table
          data={data2}
          columns={columns2}
          enablePagination={false}
          handleDelete={(id) => console.log("Delete", id)}
          editToggleModel={(id) => console.log("Edit", id)}
          LogToggleModel={(id, state) => console.log("Log", id, state)}
        />
      </div>
    </div>
  )
}

export default Withdrawals