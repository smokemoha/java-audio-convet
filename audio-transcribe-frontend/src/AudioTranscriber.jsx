import React, { useState } from 'react';
import './index.css';

const AudioTranscriber = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('No file chosen');
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [transcriptionResult, setTranscriptionResult] = useState('');
  
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name);
    }
  };
  
  const handleTranscribe = () => {
    if (!file) return;
    
    setIsTranscribing(true);
    
    // Simulating transcription process
    setTimeout(() => {
      setIsTranscribing(false);
      setTranscriptionResult('Hello, how are you? Hope you liked my project. I’d be glad to work for you and make a difference.?');
    }, 2000);
  };
  
  return (
    <div className="transcriber-container">
      <div className="transcriber-card">
        <h1 className="transcriber-title">Audio to Text Transcriber</h1>
        <p className="transcriber-subtitle">Upload your audio file and convert it to text instantly</p>
        
        <div className="file-upload-container">
          <div className="file-input-wrapper">
            <input 
              type="file" 
              id="audio-file" 
              className="file-input"
              accept="audio/*"
              onChange={handleFileChange}
            />
            <label htmlFor="audio-file" className="file-label">
              <span className="file-button">Choose File</span>
              <span className="file-name">{fileName}</span>
            </label>
          </div>
          
          <button 
            className={`transcribe-button ${!file ? 'disabled' : ''}`}
            onClick={handleTranscribe}
            disabled={!file || isTranscribing}
          >
            {isTranscribing ? 'Transcribing...' : 'Upload and Transcribe'}
          </button>
        </div>
        
        {(transcriptionResult || isTranscribing) && (
          <div className="result-container">
            <h2 className="result-title">Transcription Result</h2>
            <div className="result-box">
              {isTranscribing ? (
                <div className="loading-spinner">
                  <div className="spinner"></div>
                  <p>Processing your audio...</p>
                </div>
              ) : (
                <p className="result-text">{transcriptionResult}</p>
              )}
            </div>
            
            {transcriptionResult && (
              <div className="action-buttons">
                <button className="action-button copy-button">
                  <span className="button-icon">📋</span> Copy Text
                </button>
                <button className="action-button download-button">
                  <span className="button-icon">💾</span> Download
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AudioTranscriber;