import { Link } from 'react-router-dom'
import { ICONS } from '../../../../assets'
import StageCommissionSettings from '../../../../components/Dashboard/SettingsPage/StageCommisionPage/StageCommissionSettings'

const StageCommission = () => {
  return (
     <div className="font-Outfit">
      <h1 className="text-white font-medium text-[26px]">
        Edit Stage Commissions
      </h1>
      
      <StageCommissionSettings/>
      <div className="mt-[42px] flex flex-col gap-[18px]">
        <h1 className="text-white font-medium text-[26px]">
          Update Commission
        </h1>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="" className="text-neutral-85">
              Stage
            </label>
            <div className="flex items-center justify-between relative">
              <input
                type="text"
                placeholder="Stage 01"
                className={`w-full px-4 py-3 rounded-[8px] border border-neutral-90 focus:outline-none focus:border-primary-10/50 transition duration-300 text-neutral-85`}
              />
              <img
                src={ICONS.growth}
                alt=""
                className="size-6 absolute right-3"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="" className="text-neutral-85">
              Commission (0.1%)
            </label>
            <div className="flex items-center justify-between relative">
              <input
                type="text"
                placeholder="08"
                className={`w-full px-4 py-3 rounded-[8px] border border-neutral-90 focus:outline-none focus:border-primary-10/50 transition duration-300 text-neutral-85`}
              />
              <p  className="size-6 absolute right-3 text-white"> %</p>
             
               
             
            </div>
          </div>
          <div className="flex flex-row gap-[11px]">
            <Link
              to={"/"}
              className="bg-primary-10 text-white px-10 py-2 rounded-full text-sm hover:bg-primary-10/60 transition duration-300 w-fit "
            >
              Save
            </Link>
            <Link
              to={"/"}
              className="bg-primary-70 text-white px-10 py-2 rounded-full text-sm hover:bg-primary-10/60 transition duration-300 w-fit \"
            >
              Cancel
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StageCommission