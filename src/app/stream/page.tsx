"use client";
import React, { useState, useEffect } from "react";

const StreamComponent = () => {
  const [streamData, setStreamData] = useState<string>("");

  useEffect(() => {
    // Function to establish a stream connection and fetch data
    const fetchStreamData = async () => {
      try {
        // Replace with your server URL
        const response = await fetch("http://localhost:8080/api/");

        // Check if the response is ok
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Get the readable stream from the response body
        const reader = response.body?.getReader();

        // Function to read the stream
        const readStream = async () => {
          while (true) {
            const { done, value } = await reader!.read();

            // If the stream is done, break the loop
            if (done) {
              console.log("Stream complete");
              break;
            }

            // Convert the Uint8Array chunk to a string
            const chunk = new TextDecoder().decode(value);

            // Update the state with the new chunk of data
            setStreamData((prevData) => prevData + chunk);
          }
        };

        // Start reading the stream
        readStream();
      } catch (error) {
        console.error("Error fetching stream data:", error);
      }
    };
    //   const fetchNormalData = async () => {
    //  fetch("https://localhost:8080/api/")
    //     .then((response) => {
    //       if (!response.ok) {
    //         throw new Error(`HTTP error! status: ${response.status}`);
    //       }
    //       return response.text();
    //     })
    //     .then((data) => {
    //       setStreamData(data);
    //     })
    //     .catch((error) => {
    //       console.error("Error fetching stream data:", error);
    //     });

    //   }
    // const fetchAxiosData = async () => {
    //   axios
    //   .get("http://localhost:8080/api/hello")
    //   .then((response) => {
    //     console.log(typeof response.data);
    //     setStreamData(response.data);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching stream data:", error);
    //   });

    // }
    // Call the function to start fetching stream data
    fetchStreamData();
  }, []);

  return (
    <div>
      <h1>Streamed Data:</h1>
      <pre>{streamData}</pre>
    </div>
  );
};

export default StreamComponent;
