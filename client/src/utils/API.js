import axios from "axios";

// const DEFAULT_HPP = "15";

// const PATH_BASE = "https://www.googleapis.com/books/v1";
// const PATH_SEARCH = "/volumes";
// const PARAM_SEARCH = "q=";
// const PARAM_HPP = "maxResults=";
// const API_KEY = process.env.REACT_APP_API_KEY;

export default {
  getGoogleBooks: function(searchTerm) {
    return axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=" +
        searchTerm +
        "&maxResults=15"
    );
  },

  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },

  getBookshelf: function() {
    return axios.get("/api/books");
  },

  deleteBook: function(id) {
    return axios.delete(`/api/books/${id}`);
  }
};
