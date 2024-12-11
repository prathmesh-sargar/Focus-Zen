import React, { useEffect } from "react";
import VideoCard from "./VideoCard.jsx";
import axios from "axios";
import { YouTube_Videos } from "./contstant/YouTube.js";
import { Link } from "react-router-dom";
import { API_KEY } from "./contstant/YouTube.js";
import { useDispatch, useSelector } from "react-redux";
import { setHomeVideos } from "./store/storeSlices.js";

const VideoContainer = () => {
  const { video, category } = useSelector((store) => store.app);
  const dispatch = useDispatch();

  const fetchYouTubeVideos = async () => {
    try {
      const res = await axios.get(`${YouTube_Videos}`);
      dispatch(setHomeVideos(res?.data?.items));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchVideosByCategory = async () => {
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&q=${category}&key=${API_KEY}`
      );
      dispatch(setHomeVideos(res?.data?.items));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (category === "Development") {
      fetchVideosByCategory();
    } else {
      fetchVideosByCategory();
    }
  }, [category]);

  const getVideoId = (item) => {
    if (item.id?.videoId) {
      return item.id.videoId;
    } else {
      return null;
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {video.map((item) => {
        const videoId = getVideoId(item);

        // Skip rendering if there's no videoId
        if (!videoId) return null;

        return (
          <Link to={`/watch?v=${videoId}`} key={videoId}>
            <div className=" text-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform overflow-hidden">
              <VideoCard item={item} />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
