
import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";

export default function LottiePlayer({ src, className = "w-16 h-16", loop = true, ariaLabel }) {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    let mounted = true;
    if (!src) return;
    // fetch JSON from public folder or a URL
    fetch(src)
      .then((r) => r.json())
      .then((data) => {
        if (mounted) setAnimationData(data);
      })
      .catch((err) => {
        console.error("Failed to load Lottie JSON:", err);
      });
    return () => (mounted = false);
  }, [src]);

  if (!animationData) {
    // simple placeholder while loading
    return <div className={`${className} bg-white/10 rounded-full`} aria-hidden="true" />;
  }

  return (
    <div className={className} role="img" aria-label={ariaLabel || "animated icon"}>
      <Lottie animationData={animationData} loop={loop} style={{ width: "100%", height: "100%" }} />
    </div>
  );
}
