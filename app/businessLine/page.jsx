import BpoComponent from "@/components/BpoComponent";
import SmartSolutionsComponent from "@/components/SmartSolutionsComponent";
import TelecomsServiceComponent from "@/components/TelecomsServiceComponent";
import WorkforceManagmentComponent from "@/components/WorkforceManagmentComponent";

const BusinessLine = () => {
  return (
    <main>
      <TelecomsServiceComponent />
      <SmartSolutionsComponent />
      <WorkforceManagmentComponent />
      <BpoComponent />
    </main>
  );
};

export default BusinessLine;
