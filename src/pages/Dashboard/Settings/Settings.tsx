import Heading from "../../../components/Reusable/Heading";
import { ICONS } from "../../../assets";
import AllControls from "../../../components/Dashboard/SettingsPage/AllControls/AllControls";

const Settings = () => {
  return (
    <div>
      <Heading
        iconSrc={ICONS.adminControl}
        title="Admin Controls"
        subtitle="Modify system settings and trigger actions"
      />
      <AllControls/>
    </div>
  );
};

export default Settings;
