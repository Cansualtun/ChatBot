import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";

const Experience = () => {
  const navigate = useNavigate();
  return (
    <div className="gradient-box flex flex-col items-center gap-20 mt-20 pb-40 p-20 border-b border-[#303030]">
      <h1 className="font-bold xl:text-6xl text-4xl flex flex-col items-center">
        Let’s start experiencing the
        <h1 className="flex xl:flex-row flex-col xl:gap-4">
          new internet
          <p className="text-primary-blue flex xl:items-center xl:justify-center">
            today.
          </p>
        </h1>
      </h1>
      <Button
        className="font-bold"
        variant="secondary"
        children="Get started for free"
        onClick={() => navigate("/chat")}
      />
    </div>
  );
};

export default Experience;
