import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import HeroSvg from "../HeroSvg";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="mt-10 space-y-12">
      <div className="flex flex-col items-center gap-20">
        <img src="/assets/logos/logo.svg" alt="logo" />
        <div className="flex flex-col items-center gap-6">
          <div className="xl:text-6xl text-4xl font-bold flex flex-row gap-4">
            <h1 className="text-primary-blue">AI</h1>Chatbot
          </div>
          <p className="text-lg leading-6 text-primary-gray  xl:items-center">
            We’ve trained a model called ChatGPT
            <p className="flex flex-start items-center w-full justify-center">
              in a conversational way.
            </p>
          </p>
          <Button
            className="font-bold"
            children="Continue"
            variant="primary"
            onClick={() => navigate("/chat")}
          />
        </div>
      </div>
      <div className="mb-20">
        <HeroSvg />
      </div>
    </section>
  );
};

export default Hero;
