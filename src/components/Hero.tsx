import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";


const Hero = () => {
  const [domain, setDomain] = useState("");
  const [typedText, setTypedText] = useState("");
  const fullText = "Domain Hosting Intelligence System";
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [speed, setSpeed] = useState(150); // typing speed

  // Intersection observer for trust indicators
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  // Typing effect
   useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting) {
        setTypedText(fullText.substring(0, index + 1));
        setIndex(index + 1);

        // when text fully typed
        if (index + 1 === fullText.length) {
          setTimeout(() => {
            setIsDeleting(true);
            setSpeed(50);
          }, 4000); // ⏸ pause 3 seconds before deleting
        }
      } else {
        setTypedText(fullText.substring(0, index - 1));
        setIndex(index - 1);

        // when text fully deleted
        if (index - 1 === 0) {
          setTimeout(() => {
            setIsDeleting(false);
            setSpeed(150);
          }, 0); // ⏸ pause 0 seconds before typing again
        }
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [index, isDeleting, fullText, speed]);

  const handleAnalyze = () => {
    if (domain.trim()) {
      console.log("Analyzing domain:", domain);
      // Call your API here
    }
  };

  return (
    <section className="bg-gradient-to-br from-slate-900/95 via-purple-900/95 to-slate-900/95 text-white py-20 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          {/* Main heading */}
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              {typedText}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Gain deep insights into domain performance, security, and history with
            our powerful analysis tools.
          </p>

          {/* Search form */}
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 p-2 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30">
              <input
                type="text"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                placeholder="Enter a domain name"
                className="flex-1 px-6 py-4 bg-white text-gray-900 rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-teal-400 text-lg placeholder-gray-500"
                onKeyDown={(e) => e.key === "Enter" && handleAnalyze()}
              />
              <button
                onClick={handleAnalyze}
                className="px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-teal-600 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Analyze Domain
              </button>
            </div>
          </div>

          {/* Trust indicators */}
          <div ref={ref} className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/15 backdrop-blur-md rounded-2xl p-6 border border-white/30">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                {inView && <CountUp end={10} decimals={1} duration={2} />}M+
              </div>
              <div className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">Domains Analyzed</div>
            </div>
            <div className="bg-white/15 backdrop-blur-md rounded-2xl p-6 border border-white/30">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                {inView && <CountUp end={99} duration={2} />}%
              </div>
              <div className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">Uptime Guarantee</div>
            </div>
            <div className="bg-white/15 backdrop-blur-md rounded-2xl p-6 border border-white/30">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                {inView && <CountUp end={150} duration={2} />}+
              </div>
              <div className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">Countries Covered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
