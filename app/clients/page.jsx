import ClientsComponent from "@/components/ClientsComponent";
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
