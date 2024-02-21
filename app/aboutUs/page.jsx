import AboutUsComponent from "@/components/AboutUsComponent";
import Team from "@/components/Team";

const AboutUs = () => {
  return (
    <div className="h-full w-full">
      <div className="flex flex-col gap-20">
        <AboutUsComponent />
        <Team />
      </div>
    </div>
  );
};

export default AboutUs;
