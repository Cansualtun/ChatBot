import { useEffect, useState } from "react";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";

const Scroll = () => {
  const navigate = useNavigate();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => setPhotos(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);
  return (
    <div className="mt-10">
      <div className="border-t border-b border-[#303030]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-4 xl:flex-row">
            <div className="flex flex-col gap-6 xl:items-start xl:border-r xl:justify-start border-primary-border pt-10 xl:pr-12 justify-center items-center">
              <h1 className="font-bold text-5xl">
                Chat with unique <br /> characters
              </h1>
              <p className="text-primary-gray">
                You can chat many different characters for a few set of topics
                and interests.
              </p>
              <Button
                className="font-bold hidden xl:block w-[165px]"
                variant="secondary"
                children="Let's Start Chat"
                onClick={() => navigate("/chat")}
              />
              <img src="/assets/Images/Rectangle.svg" />
            </div>
            <div className="grid xl:grid-cols-2 grid-cols-1 gap-4 overflow-y-auto h-[1000px] p-10">
              {photos.slice(0, 12).map((photo: any) => (
                <div key={photo.id} className="p-2 rounded shadow">
                  <img
                    src={photo.thumbnailUrl}
                    alt={photo.title}
                    className="w-full xl:h-72 h-36 object-cover rounded"
                  />
                  <p className="text-sm mt-2">{photo.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scroll;
