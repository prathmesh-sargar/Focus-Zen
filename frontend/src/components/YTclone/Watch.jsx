import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { API_KEY } from "./contstant/YouTube";

const Watch = () => {
  const [channelinfo, setchannelinfo] = useState([]);

  console.log(channelinfo);

  const [searchparam] = useSearchParams();
  const videoID = searchparam.get("v");

  const fetchdataByyoutubeID = async () => {
    try {
      console.log("load data ");

      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoID}&key=${API_KEY}`
      );

      setchannelinfo(res.data.items);

      console.log("api data");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchdataByyoutubeID();
  }, []);

  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="flex flex-col items-center mt-8 px-4 md:flex-row md:justify-center md:mt-12">
        {/* Video Section */}
        <div className="w-full md:w-[70%] lg:w-[900px]  mt-[70px]">
          <div className="relative">
            <iframe
              className="w-full aspect-video rounded-md"
              src={`https://www.youtube.com/embed/${videoID}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          {channelinfo.map((item) => {
            return (
              <div
                key={item.id}
                className="mt-[50px] p-4 bg-gray-100 rounded-md shadow-md"
              >
                <h1 className="text-lg font-bold text-black">{item.snippet.title}</h1>
                <br />
                <div>
                  <hr className="my-2" />
                  <div className="flex items-center mt-4">
                    <img
                      src={item.snippet.thumbnails.high.url}
                      alt="img"
                      className="rounded-full h-[40px] w-[40px] md:h-[50px] md:w-[50px] object-cover"
                    />
                    <p className="ml-4 font-semibold text-gray-800">
                      {item.snippet.channelTitle}
                    </p>
                  </div>
                  <hr className="my-4" />
                  {/* <p className="text-sm text-gray-600">
                    {item.snippet.description}
                  </p> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Watch;
