/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Loader from "../../../components/Loader/Loader";
import {
  useApproveWithdrawMutation,
  useGetAllWithdrawalsQuery,
  useRejectWithdrawMutation,
} from "../../../redux/Features/Withdraw/withdrawApi";
import { formatDate } from "../../../utile/formatDate";
import { toast } from "sonner";
// import { contractAbiUsdt } from "../../../utile/ContractABIUSDT";
// import Web3 from 'web3';
// import detectEthereumProvider from '@metamask/detect-provider';

// USDT Contract Address (Ethereum Mainnet)
// const USDT_CONTRACT_ADDRESS = '0xdAC17F958D2ee523a2206206994597C13D831ec7';
// const DECIMAL_VALUE = 'ether';

// Add ethereum to window type
declare global {
  interface Window {
    ethereum: any;
  }
}

export const WithdrawDataTable = () => {
  const { data, isLoading } = useGetAllWithdrawalsQuery({});
  const [approveWithdraw] = useApproveWithdrawMutation();
  const [rejectWithdraw] = useRejectWithdrawMutation();

  const [approvingId, setApprovingId] = useState<string | null>(null);
  const [rejectingId, setRejectingId] = useState<string | null>(null);

  // Function to connect to MetaMask
  // const connectWallet = async () => {
  //   try {
  //     const provider = await detectEthereumProvider();
      
  //     if (!provider) {
  //       alert('Please install MetaMask!');
  //       return false;
  //     }

  //     // Request account access
  //     await window.ethereum.request({ method: 'eth_requestAccounts' });
  //     return true;
  //   } catch (error) {
  //     console.error('Error connecting to MetaMask:', error);
  //     return false;
  //   }
  // };

  // Function to handle USDT transfer
  // const handleUsdtTransfer = async (amount: string, toAddress: string) => {
  //   try {
  //     const web3 = new Web3(window.ethereum);
  //     const accounts = await web3.eth.getAccounts();
      
  //     if (accounts.length === 0) {
  //       alert('Please connect your MetaMask wallet first!');
  //       return null;
  //     }

  //     // Get current gas price
  //     const gasPrice = await web3.eth.getGasPrice();
  //     const gasPriceInGwei = Web3.utils.fromWei(gasPrice, 'gwei');

  //     // Create USDT contract instance
  //     const usdtContract = new web3.eth.Contract(contractAbiUsdt(), USDT_CONTRACT_ADDRESS);
      
  //     // Convert amount to USDT decimals
  //     const usdtAmount = Web3.utils.toWei(amount, DECIMAL_VALUE);

  //     // Send USDT transaction
  //     const transaction = await usdtContract.methods.transfer(
  //       toAddress,
  //       usdtAmount
  //     ).send({
  //       from: accounts[0],
  //       gas: '100000',
  //       gasPrice: Web3.utils.toWei(gasPriceInGwei, 'gwei')
  //     });

  //     return transaction;
  //   } catch (error) {
  //     console.error('Error processing USDT transfer:', error);
  //     throw error;
  //   }
  // };

  const handleApproveWithdraw = async (id: string) => {
    try {
      // setApprovingId(id);
      
      // // Connect to MetaMask
      // const isConnected = await connectWallet();
      // if (!isConnected) {
      //   throw new Error('Failed to connect to MetaMask');
      // }

      // // Process USDT transfer
      // const transaction = await handleUsdtTransfer(amount, withdrawalAddress);
      
      // if (!transaction) {
      //   throw new Error('USDT transfer failed');
      // }

      // // If transfer successful, proceed with withdrawal approval
      // const data = {
      //   admin_note: "Withdrawal approved and USDT transferred successfully",
      //   transactionHash: transaction.transactionHash,
      //   amount,
      //   wallet_address:withdrawalAddress,
      //   network: "BSC",
      //   payment_method: "metamask",
      //   trx_id: transaction?.transactionHash,
      //   type : "Deposit",
      //   withdrawal_address: transaction?.to
      // };

      setApprovingId(id);
      
     const response= await approveWithdraw(id);
     console.log(response);
    } catch (error) {
      console.error(error);
      toast.error((error as any)?.error?.data?.message || "Something went wrong")
    } finally {
      setApprovingId(null);
    }
  };

  const handleRejectWithdraw = async (id: string) => {
    try {
      setRejectingId(id);
      const data = {
        admin_note: "Withdrawal rejected due to invalid wallet address",
      };
      await rejectWithdraw({ data, id });
    } catch (error) {
      console.log(error);
    } finally {
      setRejectingId(null);
    }
  };

  const headers = [
    "#",
    "Name",
    "Email",
    "Stage",
    "Wallet Address",
    "Withdrawal Address",
    "Amount",
    "Requested Date",
    "Status",
    "Actions",
  ];
  return (
    <div className="text-white rounded-lg shadow-md font-Outfit">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-neutral-30 text-sm">
              {headers.map((header, idx) => (
                <th
                  key={idx}
                  className="px-4 py-3 whitespace-nowrap text-lg text-white font-normal"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          {isLoading ? (
            <tbody>
              <tr>
                <td colSpan={headers.length} className="py-10">
                  <div className="flex justify-center items-center">
                    <Loader size="size-10" />
                  </div>
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody>
              {data?.data?.withdrawals?.length < 1 ? (
                <tr>
                  <td
                    colSpan={headers.length}
                    className="text-center text-gray-400 py-4"
                  >
                    No data found.
                  </td>
                </tr>
              ) : (
                data?.data?.withdrawals?.map((item: any, index: number) => (
                  <tr key={item._id} className="border-t border-gray-700 hover:bg-[#1F1F3D] transition">
                    <td className="px-4 py-3 whitespace-nowrap">{index + 1}</td>
                    <td className="px-4 py-3 whitespace-nowrap capitalize">
                      {item?.user_id?.name}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      {item?.user_id?.email}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      {item?.stage_number}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      {item?.wallet_address}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      {item?.withdrawal_address}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      ${item?.amount}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      {formatDate(item.createdAt as string)}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div
                        className={`px-3 py-1 text-sm rounded-full font-medium text-center w-fit text-nowrap capitalize ${
                          item.status === 1
                            ? "bg-green-600 text-white"
                            : item.status === 2
                            ? "bg-yellow-600 text-white"
                            : item.status === 3
                            ? "bg-red-600 text-white"
                            : "bg-blue-500 text-white"
                        }`}
                      >
                        {item.status === 1
                          ? "✓"
                          : item?.status === 3
                          ? "✕"
                          : ""}
                        {
                          {
                            1: "Approved",
                            2: "Pending",
                            3: "Rejected",
                            4: "processing",
                          }[item.status as 1 | 2 | 3 | 4]
                        }
                      </div>
                    </td>

                    <td className="space-x-3 flex items-center mt-3">
                      <button
                        onClick={() => handleRejectWithdraw(item?._id)}
                        disabled={rejectingId === item?._id}
                        className="px-3 py-1 text-sm rounded-full font-medium text-center w-fit text-nowrap capitalize bg-red-500 text-white cursor-pointer disabled:opacity-60"
                      >
                        {rejectingId === item?._id ? (
                          <Loader size="size-5" />
                        ) : (
                          "Reject"
                        )}
                      </button>

                      <button
                        onClick={() => handleApproveWithdraw(item?._id)}
                        disabled={approvingId === item?._id}
                        className="px-3 py-1 text-sm rounded-full font-medium text-center w-fit text-nowrap capitalize bg-green-500 text-white cursor-pointer disabled:opacity-60"
                      >
                        {approvingId === item?._id ? (
                          <Loader size="size-5" />
                        ) : (
                          "Approve"
                        )}
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};
