import { ICONS } from '../../../assets';
import Heading from '../../../components/Reusable/Heading';
import { useGetAllWalletsQuery } from '../../../redux/Features/User/adminApi';
import WalletAddressTable from './WalletAddressTable';

const WalletAddress = () => {
    const {data, isLoading} = useGetAllWalletsQuery({});
    return (
        <div className='flex flex-col gap-7'>
            <Heading
            iconSrc={ICONS.wallet}
            title="Wallet address"
            subtitle="Manage all Wallet address"
          />
            <WalletAddressTable data={data?.data} isLoading={isLoading}/>
        </div>
    );
};

export default WalletAddress;