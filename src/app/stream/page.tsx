"use client";
import React, { useState, useEffect, useRef } from "react";

const ImageStreamViewer = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Replace with your image stream URL
    const streamUrl = "http://localhost:8080/api/stream/image/";

    // Function to fetch the image stream
    const fetchImageStream = async () => {
      console.log("Fetching image stream...");
      try {
        const response = await fetch(streamUrl);

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

            // Convert the Uint8Array chunk to a Blob
            const blob = new Blob([value], { type: "image/jpeg" });

            // Create a URL for the Blob and set it as the image source
            const imageUrl = URL.createObjectURL(blob);
            console.log(imageUrl);
            setImageSrc(imageUrl);

            // Revoke the previous URL to free up memory
            if (imageRef.current) {
              URL.revokeObjectURL(imageRef.current.src);
            }
          }
        };

        // Start reading the stream
        readStream();
      } catch (error) {
        console.error("Error fetching image stream:", error);
      }
    };

    // Call the function to start fetching the image stream
    fetchImageStream();
  }, []);

  return (
    <div>
      <h1>Image Stream Viewer</h1>
      {/* <img
        ref={imageRef}
        src={imageSrc}
        alt="Streamed Image"
        style={{ maxWidth: "100%", height: "auto" }}
      /> */}
    </div>
  );
};

export default ImageStreamViewer;
