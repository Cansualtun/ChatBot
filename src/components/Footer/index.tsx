import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import SubInfo from "./SubInfo";
import { useEffect, useState } from "react";

const Footer = () => {
  const navigate = useNavigate();
  const [footer, setFooter] = useState([]);
  useEffect(() => {
    fetch("./footer.json")
      .then((response) => response.json())
      .then((data) => setFooter(data.footer));
  }, []);
  return (
    <>
      <div className="xl:flex flex-col xl:flex-row xl:gap-40 mt-10 container mx-auto px-4 mb-4 md:grid md:justify-center">
        <div className="flex flex-col gap-2 mb-4 xl:mb-0">
          <h1 className="text-xl flex">
            We would love to hear from you.Let’s work together
          </h1>
          <Button
            variant="outlined"
            children="Contact us"
            className="w-[150px] h-[50px]"
            onClick={() => navigate("/chat")}
          />
        </div>
        <div className="flex flex-col gap-10">
          {footer.slice(0, 2).map((item: any) => (
            <div className="flex flex-col gap-2">
              <h1 className="text-xl">{item.title}</h1>
              <p className="text-primary-gray">{item.information}</p>
              <p className="text-primary-gray">{item.subInformation}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-10">
          {footer.slice(2, 4).map((item: any) => (
            <div className="flex flex-col gap-2">
              <h1 className="text-xl">{item.title}</h1>
              <p className="text-primary-gray">{item.information}</p>
              <p className="text-primary-gray">{item.subInformation}</p>
            </div>
          ))}
        </div>
      </div>
      <SubInfo />
    </>
  );
};

export default Footer;
