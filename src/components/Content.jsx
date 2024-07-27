import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Content.css";
import { HashLoader } from "react-spinners";

const Content = ({ token }) => {
  const router = useNavigate();

  const [trending, setTrendingSongs] = useState([]);
  const [week20, setWeek20] = useState([]);
  const [month50, setMonth50] = useState([]);
  const [evergreen, setEvergreen] = useState([]);
  const [happy, setHappy] = useState([]);
  const [romantic, setRomantic] = useState([]);
  const [excited, setExcited] = useState([]);
  const [sad, setSad] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllVideos = async () => {
      await Promise.all([
        fetchVideos1(),
        fetchVideos2(),
        fetchVideos3(),
        fetchVideos4(),
        fetchVideos5(),
        fetchVideos6(),
        fetchVideos7(),
        fetchVideos8(),
      ]);
      setLoading(false);
    };
    fetchAllVideos();
  }, []);

  const fetchData = async (url, setter) => {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          accept: "application/json",
          projectID: "bng7dtu7whwk",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      setter(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchVideos1 = () =>
    fetchData(
      "https://academics.newtonschool.co/api/v1/musicx/song?featured=Trending%20songs",
      setTrendingSongs
    );
  const fetchVideos2 = () =>
    fetchData(
      "https://academics.newtonschool.co/api/v1/musicx/song?featured=Top%2020%20of%20this%20week",
      setWeek20
    );
  const fetchVideos3 = () =>
    fetchData(
      "https://academics.newtonschool.co/api/v1/musicx/song?featured=Top%2050%20of%20this%20month",
      setMonth50
    );
  const fetchVideos4 = () =>
    fetchData(
      "https://academics.newtonschool.co/api/v1/musicx/song?featured=Evergreen%20melodies",
      setEvergreen
    );
  const fetchVideos5 = () =>
    fetchData(
      "https://academics.newtonschool.co/api/v1/musicx/song?mood=happy",
      setHappy
    );
  const fetchVideos6 = () =>
    fetchData(
      "https://academics.newtonschool.co/api/v1/musicx/song?mood=romantic",
      setRomantic
    );
  const fetchVideos7 = () =>
    fetchData(
      "https://academics.newtonschool.co/api/v1/musicx/song?mood=excited",
      setExcited
    );
  const fetchVideos8 = () =>
    fetchData(
      "https://academics.newtonschool.co/api/v1/musicx/song?mood=sad",
      setSad
    );

  return (
    <>
      {loading ? (
        <div className="loader-parent">
          <div className="loading-child">
            <HashLoader
              color={"#bcbbbb"}
              size={80}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        </div>
      ) : (
        <>
          <div className="space"></div>
          <div className="box-container">
            <div className="trending">
              <h1 className="section-title">Trending Songs</h1>
              <div className="songs">
                {trending.map((item) => (
                  <div
                    className="song-item "
                    key={item._id}
                    onClick={() => router(`/song/${item._id}`)}
                  >
                    <div className="item-container">
                      {item.thumbnail ? (
                        <img
                          src={item.thumbnail}
                          alt={`${item.name} thumbnail`}
                        />
                      ) : (
                        <p>No thumbnail available</p>
                      )}
                      <h2 className="item-title">{item.title}</h2>
                      <div className="item-artists">
                        {item.artist.map((artist, index) => (
                          <span key={index} className="item-artist">
                            {artist.name},{" "}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="trending">
              <h1 className="section-title">Top 20 Of this Week</h1>
              <div className="songs">
                {week20.map((item) => (
                  <div
                    className="song-item"
                    key={item._id}
                    onClick={() => router(`/song/${item._id}`)}
                  >
                    <div className="item-container">
                      {item.thumbnail ? (
                        <img
                          src={item.thumbnail}
                          alt={`${item.name} thumbnail`}
                        />
                      ) : (
                        <p>No thumbnail available</p>
                      )}
                      <h2 className="item-title">{item.title}</h2>
                      <div className="item-artists">
                        {item.artist.map((artist, index) => (
                          <span key={index} className="item-artist">
                            {artist.name},{" "}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="trending">
              <h1 className="section-title">Top 50 Of this Month</h1>
              <div className="songs">
                {month50.map((item) => (
                  <div
                    className="song-item"
                    key={item._id}
                    onClick={() => router(`/song/${item._id}`)}
                  >
                    <div className="item-container">
                      {item.thumbnail ? (
                        <img
                          src={item.thumbnail}
                          alt={`${item.name} thumbnail`}
                        />
                      ) : (
                        <p>No thumbnail available</p>
                      )}
                      <h2 className="item-title">{item.title}</h2>
                      <div className="item-artists">
                        {item.artist.map((artist, index) => (
                          <span key={index} className="item-artist">
                            {artist.name},{" "}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="trending">
              <h1 className="section-title">Evergreen Songs</h1>
              <div className="songs">
                {evergreen.map((item) => (
                  <div
                    className="song-item"
                    key={item._id}
                    onClick={() => router(`/song/${item._id}`)}
                  >
                    <div className="item-container">
                      {item.thumbnail ? (
                        <img
                          src={item.thumbnail}
                          alt={`${item.name} thumbnail`}
                        />
                      ) : (
                        <p>No thumbnail available</p>
                      )}
                      <h2 className="item-title">{item.title}</h2>
                      <div className="item-artists">
                        {item.artist.map((artist, index) => (
                          <span key={index} className="item-artist">
                            {artist.name},{" "}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="trending">
              <h1 className="section-title">Mood Happy Songs</h1>
              <div className="songs">
                {happy.map((item) => (
                  <div
                    className="song-item"
                    key={item._id}
                    onClick={() => router(`/song/${item._id}`)}
                  >
                    <div className="item-container">
                      {item.thumbnail ? (
                        <img
                          src={item.thumbnail}
                          alt={`${item.name} thumbnail`}
                        />
                      ) : (
                        <p>No thumbnail available</p>
                      )}
                      <h2 className="item-title">{item.title}</h2>
                      <div className="item-artists">
                        {item.artist.map((artist, index) => (
                          <span key={index} className="item-artist">
                            {artist.name},{" "}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="trending">
              <h1 className="section-title">Romantic Songs</h1>
              <div className="songs">
                {romantic.map((item) => (
                  <div
                    className="song-item"
                    key={item._id}
                    onClick={() => router(`/song/${item._id}`)}
                  >
                    <div className="item-container">
                      {item.thumbnail ? (
                        <img
                          src={item.thumbnail}
                          alt={`${item.name} thumbnail`}
                        />
                      ) : (
                        <p>No thumbnail available</p>
                      )}
                      <h2 className="item-title">{item.title}</h2>
                      <div className="item-artists">
                        {item.artist.map((artist, index) => (
                          <span key={index} className="item-artist">
                            {artist.name},{" "}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="trending">
              <h1 className="section-title">Excited Songs</h1>
              <div className="songs">
                {excited.map((item) => (
                  <div
                    className="song-item"
                    key={item._id}
                    onClick={() => router(`/song/${item._id}`)}
                  >
                    <div className="item-container">
                      {item.thumbnail ? (
                        <img
                          src={item.thumbnail}
                          alt={`${item.name} thumbnail`}
                        />
                      ) : (
                        <p>No thumbnail available</p>
                      )}
                      <h2 className="item-title">{item.title}</h2>
                      <div className="item-artists">
                        {item.artist.map((artist, index) => (
                          <span key={index} className="item-artist">
                            {artist.name},{" "}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="trending">
              <h1 className="section-title">Sad Songs</h1>
              <div className="songs">
                {sad.map((item) => (
                  <div
                    className="song-item"
                    key={item._id}
                    onClick={() => router(`/song/${item._id}`)}
                  >
                    <div className="item-container">
                      {item.thumbnail ? (
                        <img
                          src={item.thumbnail}
                          alt={`${item.name} thumbnail`}
                        />
                      ) : (
                        <p>No thumbnail available</p>
                      )}
                      <h2 className="item-title">{item.title}</h2>
                      <div className="item-artists">
                        {item.artist.map((artist, index) => (
                          <span key={index} className="item-artist">
                            {artist.name},{" "}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Content;
