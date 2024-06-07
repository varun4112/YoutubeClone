import React, { useState } from "react";
import "./body.css";

function Body() {
  const [allmovies, setAllmovies] = useState();
  console.log(allmovies);

  async function fetchData() {
    try {
      const response = await fetch(
        "https://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/14a27bd0bcd0cd323b35ad79cf3b493dddf6216b/videos.json"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
      setAllmovies(data);
      // console.log(data.results[0].title);

      // Process the fetched data here
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  }

  fetchData();

  return (
    <div className="Container">
      {allmovies?.map((item) => (
        <div className="video m-5">
          <div class="video__thumbnail">
            <img src={`${item.thumbnailUrl}`} alt="Thumbanil" />
          </div>
          <div class="video__details">
            <div class="author">
              <img src={`${item.thumbnailUrl}`} alt="" />
            </div>
            <div class="title">
              <h3>{item.title}</h3>
              <a href="">{item.author}</a>
              <span>{item.views}Views</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Body;
// https://api.themoviedb.org/3/trending/all/week?api_key=47de2b9e8b2462b53975d18185ac40bf&language=en-US4

// {allmovies?.map(item => (
//     <img
//       src={`${base_url}/item.backdrop_path`}
//       alt='noimg'
//     />
//   ))}
