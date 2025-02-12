"use client";
import React, { useState } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import { loadFull } from "tsparticles";
import ParticlesEffect from "./ParticlesEffect";


export default function Home() {
  const [predictedClass, setPredictedClass] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setIsLoading(true);
    setError(null);
    setPredictedClass(null);

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/upload/", formData);
      setPredictedClass(response.data.predicted_class);
    } catch (error) {
      setError("Failed to analyze the image. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const classLabels = {
    0: "Normal",
    1: "Glaucoma",
    2: "Cataract",
    3: "Retinoblastoma",
  };

  return (
    <div className="min-h-screen  text-cyan-400 p-8 font-mono relative overflow-hidden">
        <ParticlesEffect />

      {/* Animated Background */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px] animate-grid-flow"></div>

      <main className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-8">
       <div className="relative">
          <h1 className="text-4xl md:text-7xl font-bold tracking-tighter relative z-10 py-4">
            <span className="relative inline-block">
              <span className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-xl"></span>
              <span className="relative bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text">Glaucoma </span>
            </span>
            {" "}
            <span className="relative inline-block">
              <span className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-xl"></span>
              <span className="relative bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 text-transparent bg-clip-text">Detection</span>
            </span>
          </h1>
          {/* Decorative lines */}
          <div className="absolute left-0 top-0 w-16 h-[2px] bg-cyan-400/50"></div>
          <div className="absolute right-0 top-0 w-16 h-[2px] bg-purple-400/50"></div>
          <div className="absolute left-0 bottom-0 w-16 h-[2px] bg-purple-400/50"></div>
          <div className="absolute right-0 bottom-0 w-16 h-[2px] bg-cyan-400/50"></div>
          {/* Corner accents */}
          <div className="absolute left-0 top-0 w-[2px] h-4 bg-cyan-400/50"></div>
          <div className="absolute right-0 top-0 w-[2px] h-4 bg-purple-400/50"></div>
          <div className="absolute left-0 bottom-0 w-[2px] h-4 bg-purple-400/50"></div>
          <div className="absolute right-0 bottom-0 w-[2px] h-4 bg-cyan-400/50"></div>
          {/* Subtitle with tech pattern */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-cyan-400/70 tracking-[0.5em] uppercase whitespace-nowrap">
          Developed by Md. Econozzaman
            <div className="absolute top-full left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent mt-2"></div>
          </div>
        </div>


        {/* Upload Section */}
        <div className="w-full max-w-2xl">
          <div className="border-2 border-cyan-400/50 rounded-lg p-8 backdrop-blur-sm bg-black/50 hover:border-purple-500/50 transition-all duration-300">
            <div className="border-2 border-dashed border-cyan-400/30 rounded-lg p-8 text-center cursor-pointer hover:border-cyan-400/50 transition-all">
              <input
                 type="file"
                 className="hidden"
                 id="imageUpload"
                 accept="image/*"
                 onChange={handleImageUpload}
              />
              <label htmlFor="imageUpload" className="cursor-pointer">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-cyan-400/20 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-cyan-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <p className="text-lg">Drop your image here or click to upload</p>
                  <p className="text-sm text-cyan-400/60">
                    Supported formats: JPG, PNG, WEBP
                  </p>
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Analysis Section */}
        <div className="w-full max-w-2xl">
          {isLoading && <p className="text-center text-cyan-400">Analyzing image...</p>}
          {error && <p className="text-center text-red-500">{error}</p>}
          {predictedClass !== null && (
            <div className="grid grid-cols-1  gap-6 w-full max-w-4xl mt-8">
            {['Advanced Recognition'].map((feature) => (
              <div
                key={feature}
                className="border border-cyan-400/30 rounded-lg p-4 backdrop-blur-sm bg-black/30 hover:border-purple-500/50 hover:transform hover:scale-105 transition-all duration-300" 
              >
                <h3 className="text-lg font-bold mb-2 text-cyan-300">{feature}</h3>
                <p className="text-sm text-cyan-400/70">
                Predicted Class: {classLabels[predictedClass]}
                </p>
              </div>
            ))}
          </div>
          )}
        </div>

      </main>
    </div>
  );
}
