import ClientsComponent from "@/components/ClientSlider";
import Ecosystem from "@/components/Ecosystem";

const Clients = () => {
  return (
    <div className="h-full w-full">
      <div className="container mx-auto">
        <Ecosystem />
        <ClientsComponent />
      </div>
    </div>
  );
};

export default Clients;
