import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "AIzaSyAa74PApLxo5jrK_MUSjmlmOfwhMwONcXI";

export const httpService = {
  youTubeSearch,
};

async function youTubeSearch(query) {
  console.log("query: ", query);
  const response = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${API_KEY}`
  );
  console.log(response);
  //   const data = await response.json();
  return response;
}
