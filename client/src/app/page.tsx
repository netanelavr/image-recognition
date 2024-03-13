"use client";

import axios from 'axios'
import React, { useEffect, useState } from 'react'

import styles from './page.module.css'

function Home() {
  const [file, setFile] = useState(null);
  const [base64Img, setBase64Img] = useState(null);
  const [summary, setSummary] = useState(null);

  const handleFileChange = (event: any) => {
    setFile(event.target.files[0]);
  };

  const sendPostRequest = async () => {
    try {
      const response = await axios.post("http://localhost:3335/upload", {
        image: base64Img,
      });
      setSummary(response.data);
    } catch (error) {
      console.error("Error uploading file", error);
    }
  }

  useEffect(() => {
    base64Img && sendPostRequest()
  }, [base64Img])


  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    await new Promise((resolve, reject) => {
      reader.onloadend = () => {
        const base64Data = reader.result && reader.result.split(",")[1];
        resolve(base64Data);
        setBase64Img(base64Data);
      };
      reader.onerror = reject;
    });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Image Recognition</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className={styles.fileInput}
        />
        <button type="submit" className={styles.uploadButton}>Upload</button>
      </form>
      {summary && (
        <div className={styles.summaryContainer}>
          <h2 className={styles.summaryTitle}>Description:</h2>
          <p className={styles.summaryText}>{summary}</p>
        </div>
      )}
    </div>
  );
}

export default Home;
