import axios from "axios";

const API_KEY = "AIzaSyB3b5W1eSevtki-h8Q-64gx6PRngGhWgrc";

export const httpService = {
  getYouTubeResultsWithRating,
};

async function getYouTubeResultsWithRating(query) {
  try {
    const youTubeResults = await _getYouTubeResults(query);
    const youTubeResultsWithRating = await youTubeResults.map(async (res) => ({
      ...res,
      rating: await _getVideoLikeCount(res.id.videoId),
    }));
    return Promise.all(youTubeResultsWithRating);
  } catch (err) {
    throw err;
  }
}

async function _getYouTubeResults(query) {
  try {
    const res = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${API_KEY}`
    );
    return res.data.items;
  } catch (err) {
    throw err;
  }
}

async function _getVideoLikeCount(videoId) {
  try {
    const res = await axios.get(
      `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=${API_KEY}`
    );
    return res.data.items[0].statistics.likeCount;
  } catch (err) {
    throw err;
  }
}
