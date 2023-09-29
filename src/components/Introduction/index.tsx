import { useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";

const Introduction = () => {
  const [rotateDegree, setRotateDegree] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setRotateDegree(Math.max(0, offset - 1440));
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col gap-10">
      <h1 className="font-bold xl:text-6xl text-4xl flex xl:flex-row flex-col gap-4">
        Start chatting with <h1 className="text-primary-blue">AI.</h1>
      </h1>
      <p className="text-xl text-[#B3B3B3]">
        Chat about any topic with ChatGPT in any time. It can be
        <br /> your friend, tutor or therapist.
      </p>
      <Button
        variant="borderless"
        className="border-none flex flex-row items-center gap-4"
        onClick={() => navigate("/chat")}
      >
        <p>Let's start chat</p>
        <AiOutlineArrowRight style={{ width: "20px", height: "60px" }} />
      </Button>
      <div className="container overflow-hidden flex items-center justify-center">
        <img
          className="xl:h-[748px]"
          src="/assets/Images/Introduction.svg"
          style={{
            transform: `rotate(${rotateDegree}deg)`,
            width: "1200px",
          }}
        />
      </div>
    </div>
  );
};

export default Introduction;
