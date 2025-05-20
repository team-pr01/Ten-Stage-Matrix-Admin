import { BiEdit } from "react-icons/bi";

const StageCommissionSettings = () => {
   const recentTransactions = [
      {
        
        
        stages: "% Stage 01",
        progress: "5%",
        
      },
      {
        
        
        stages: "% Stage 02",
        progress: "5%",
        
      },
      {
        
        
        stages: "% Stage 03",
        progress: "5%",
        
      },
      {
        
        
        stages: "% Stage 04",
        progress: "5%",
        
      },
      {
        
        
        stages: "% Stage 05",
        progress: "5%",
        
      },
      {
        
        
        stages: "% Stage 01",
        progress: "5%",
        
      },
    ];
  
    // const [isEdit, setIsEdit] = useState("");
    // const [isOn, setIsOn] = useState(false);
    return (
      <div className="rounded-[15px] border-[3px] border-neutral-25/20 bg-neutral-30 flex flex-col py-7 px-[34px] mt-11">
        <h1 className="text-2xl font-medium text-white">Commission Settings</h1>
        <div className="mt-6 overflow-x-auto">
          <table className="min-w-[600px] w-full text-white">
            <tbody>
              {recentTransactions.map((transaction, index) => (
                <tr key={index} className="border-b border-neutral-110">
                 
                  {/* Type */}
                  <td className="py-3 whitespace-nowrap">{transaction?.stages}</td>
  
                  {/* Amount */}
                  <td className="py-3 whitespace-nowrap">
                    {transaction?.progress}
                  </td>
                  
  
                  {/* Info Icon */}
                  <td className="py-3 flex flex-row items-end gap-3 whitespace-nowrap  ">
                   
                      <BiEdit
                        onClick={() =>
                          console.log(transaction.stages)
                        }
                        className="text-neutral-90 size-5 cursor-pointer"
                      />
                    
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
}

export default StageCommissionSettings