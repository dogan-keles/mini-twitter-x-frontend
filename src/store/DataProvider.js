import React, { useEffect, useState } from "react";
import DataContext from "./DataContext";
import axios from "axios";
import mockData from "./MockData";

const DataProvider = ({ children }) => {
  const [data1, setData1] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState({ id: null, email: "" });
  const [commentTweetId, setCommentTweetId] = useState(0);
  const [alertMessage, setAlertMessage] = useState("");
  const [allTweets, setAllTweets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (loggedInUser && loggedInUser.id != null) {
          const response = await axios.get(
            `http://localhost:9000/tweet/homepage/${loggedInUser.id}`,
            {
              auth: {
                username: loggedInUser.email,
                password: "123",
              },
            }
          );

          console.log("API Response:", response.data);
          setAllTweets(response.data);
          setAlertMessage(""); // Önceki hata mesajını temizle
        }
      } catch (error) {
        console.error("API Error:", error);
        setAlertMessage(
          error.response ? error.response.data.message : "Bir hata oluştu"
        );
      }
    };

    fetchData();
  }, [loggedInUser && loggedInUser.id, loggedInUser && loggedInUser.email]);

  useEffect(() => {
    // loggedInUser.id null ise allTweets ve alertMessage'i temizle
    if (!loggedInUser || loggedInUser.id == null) {
      setAllTweets([]);
      setAlertMessage("");
    } else {
      // Eğer loggedInUser varsa, mock dataları data1'e ekle
      setData1(mockData);
    }
  }, [loggedInUser]);

  return (
    <DataContext.Provider
      value={{
        data1,
        setData1,
        loggedInUser,
        setLoggedInUser,
        allTweets,
        setAllTweets,
        commentTweetId,
        setCommentTweetId,
        id: loggedInUser ? loggedInUser.id : null, // loggedInUser kontrolü
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
