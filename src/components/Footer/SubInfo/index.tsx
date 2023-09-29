import { useEffect, useState } from "react";

const SubInfo = () => {
  const [links, setLinks] = useState([]);
  useEffect(() => {
    fetch("./link.json")
      .then((response) => response.json())
      .then((data) => setLinks(data.links));
  }, []);
  return (
    <div className="border-t border-b border-[#303030] mb-10">
      <div className="flex flex-col xl:flex-row gap-10 xl:gap-40 items-center mt-8 container mx-auto px-4 mb-8 xl:space-x-60">
        <img src="/assets/logos/logo.svg" />
        <div className="flex flex-col xl:flex-row gap-10">
          {links.map((link: any) => (
            <a href={link.url}>
              <p>{link.name}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubInfo;
