"use client";

export default function RotatingCube() {
  return (
    <div className="h-screen w-full bg-black flex items-center justify-center relative overflow-hidden">
      {/* Background stars */}
      <div className="absolute inset-0 bg-[url('/assets/stars.png')] bg-cover opacity-80 animate-[moveStars_60s_linear_infinite]" />

      {/* Cube container */}
      <div className="relative w-48 h-48" style={{ transformStyle: "preserve-3d", animation: "rotateCube 10s linear infinite" }}>
        {/* Front */}
        <div className="absolute w-full h-full bg-gradient-to-b from-black to-pink-800" style={{ transform: "translateZ(4rem)" }} />
        {/* Back */}
        <div className="absolute w-full h-full bg-gradient-to-b from-black to-pink-800" style={{ transform: "rotateY(180deg) translateZ(4rem)" }} />
        {/* Right */}
        <div className="absolute w-full h-full bg-gradient-to-b from-black to-pink-800" style={{ transform: "rotateY(90deg) translateZ(4rem)" }} />
        {/* Left */}
        <div className="absolute w-full h-full bg-gradient-to-b from-black to-pink-800" style={{ transform: "rotateY(-90deg) translateZ(4rem)" }} />
        {/* Top */}
        <div className="absolute w-full h-full bg-gradient-to-b from-black to-pink-800" style={{ transform: "rotateX(90deg) translateZ(4rem)" }} />
        {/* Bottom */}
        <div className="absolute w-full h-full bg-gradient-to-b from-pink-800 to-black" style={{ transform: "rotateX(-90deg) translateZ(4rem)" }} />

        {/* Glow under cube */}
        <div className="absolute bottom-[-3rem] left-0 right-0 mx-auto w-40 h-12 bg-pink-700/40 blur-2xl rounded-full" />
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes rotateCube {
          0% {
            transform: rotateX(0deg) rotateY(0deg);
          }
          100% {
            transform: rotateX(360deg) rotateY(360deg);
          }
        }

        @keyframes moveStars {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 1000px 1000px;
          }
        }
      `}</style>
    </div>
  );
}
