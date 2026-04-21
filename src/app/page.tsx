'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-red-900 via-red-700 to-red-950">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-600/40 via-transparent to-black/60" />
      
      {/* Decorative curved lines */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
            </linearGradient>
          </defs>
          
          {/* Large arc on left */}
          <path
            d="M -100 1080 Q 200 400 500 540"
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            className={`transition-all duration-1000 delay-300 ${mounted ? 'opacity-100' : 'opacity-0'}`}
          />
          
          {/* Vertical lines */}
          <line x1="600" y1="0" x2="600" y2="1080" stroke="url(#lineGradient)" strokeWidth="1.5" opacity="0.2" />
          <line x1="800" y1="0" x2="800" y2="1080" stroke="url(#lineGradient)" strokeWidth="1.5" opacity="0.15" />
          <line x1="1000" y1="0" x2="1000" y2="1080" stroke="url(#lineGradient)" strokeWidth="1.5" opacity="0.2" />
          
          {/* Right side arcs */}
          <path
            d="M 1200 0 Q 1400 300 1500 400"
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            opacity="0.3"
          />
          <path
            d="M 1300 0 Q 1500 350 1600 500"
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            opacity="0.25"
          />
          <path
            d="M 1400 0 Q 1600 400 1700 600"
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            opacity="0.2"
          />
        </svg>
      </div>

      {/* Hands reaching toward each other */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Upper hand (reaching down from top-right) */}
        <div 
          className={`absolute -top-10 -right-20 w-[600px] h-[600px] transition-all duration-1000 delay-500 ${mounted ? 'opacity-80 translate-y-0' : 'opacity-0 -translate-y-20'}`}
        >
          <svg viewBox="0 0 600 600" className="w-full h-full drop-shadow-2xl">
            <defs>
              <linearGradient id="handGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8B0000" />
                <stop offset="50%" stopColor="#5C0000" />
                <stop offset="100%" stopColor="#2D0000" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            {/* Stylized hand reaching from upper right */}
            <path
              d="M 600 0 
                 Q 550 50 520 100 
                 Q 500 150 480 200 
                 Q 460 250 450 300 
                 Q 440 340 430 380 
                 L 425 400 
                 Q 420 420 415 440 
                 L 410 460 
                 Q 405 480 400 500 
                 L 395 520 
                 Q 390 540 385 560 
                 L 380 580 
                 Q 375 600 370 620 
                 L 360 630 
                 Q 350 640 340 645 
                 L 330 650 
                 Q 320 655 310 660 
                 L 300 665 
                 Q 290 670 280 675 
                 L 270 680 
                 Q 260 685 250 690 
                 L 240 695 
                 Q 230 700 220 705 
                 L 210 710 
                 Q 200 715 190 720 
                 L 180 725 
                 Q 170 730 160 735 
                 L 150 740 
                 Q 140 745 130 750 
                 L 120 755 
                 Q 110 760 100 765 
                 L 90 770 
                 Q 80 775 70 780 
                 L 60 785 
                 Q 50 790 40 795 
                 L 30 800 
                 Q 20 805 10 810 
                 L 0 820 
                 L 20 830 
                 Q 40 825 60 820 
                 L 80 815 
                 Q 100 810 120 805 
                 L 140 800 
                 Q 160 795 180 790 
                 L 200 785 
                 Q 220 780 240 775 
                 L 260 770 
                 Q 280 765 300 760 
                 L 320 755 
                 Q 340 750 360 745 
                 L 380 740 
                 Q 400 735 420 730 
                 L 440 725 
                 Q 460 720 480 710 
                 L 500 700 
                 Q 520 690 540 675 
                 L 560 660 
                 Q 580 645 600 630 
                 L 620 600 
                 Q 640 570 650 540 
                 L 660 500 
                 Q 670 470 680 440 
                 L 690 400 
                 Q 700 370 710 340 
                 L 720 300 
                 Q 730 270 740 240 
                 L 750 200 
                 Q 760 170 770 140 
                 L 780 100 
                 Q 790 70 800 40 
                 L 810 20 
                 Q 820 10 830 5 
                 L 840 0 
                 Z"
              fill="url(#handGradient1)"
              filter="url(#glow)"
            />
          </svg>
        </div>

        {/* Lower hand (reaching up from bottom-left) */}
        <div 
          className={`absolute -bottom-10 -left-20 w-[600px] h-[600px] transition-all duration-1000 delay-700 ${mounted ? 'opacity-80 translate-y-0' : 'opacity-0 translate-y-20'}`}
        >
          <svg viewBox="0 0 600 600" className="w-full h-full drop-shadow-2xl transform rotate-180">
            <path
              d="M 600 0 
                 Q 550 50 520 100 
                 Q 500 150 480 200 
                 Q 460 250 450 300 
                 Q 440 340 430 380 
                 L 425 400 
                 Q 420 420 415 440 
                 L 410 460 
                 Q 405 480 400 500 
                 L 395 520 
                 Q 390 540 385 560 
                 L 380 580 
                 Q 375 600 370 620 
                 L 360 630 
                 Q 350 640 340 645 
                 L 330 650 
                 Q 320 655 310 660 
                 L 300 665 
                 Q 290 670 280 675 
                 L 270 680 
                 Q 260 685 250 690 
                 L 240 695 
                 Q 230 700 220 705 
                 L 210 710 
                 Q 200 715 190 720 
                 L 180 725 
                 Q 170 730 160 735 
                 L 150 740 
                 Q 140 745 130 750 
                 L 120 755 
                 Q 110 760 100 765 
                 L 90 770 
                 Q 80 775 70 780 
                 L 60 785 
                 Q 50 790 40 795 
                 L 30 800 
                 Q 20 805 10 810 
                 L 0 820 
                 L 20 830 
                 Q 40 825 60 820 
                 L 80 815 
                 Q 100 810 120 805 
                 L 140 800 
                 Q 160 795 180 790 
                 L 200 785 
                 Q 220 780 240 775 
                 L 260 770 
                 Q 280 765 300 760 
                 L 320 755 
                 Q 340 750 360 745 
                 L 380 740 
                 Q 400 735 420 730 
                 L 440 725 
                 Q 460 720 480 710 
                 L 500 700 
                 Q 520 690 540 675 
                 L 560 660 
                 Q 580 645 600 630 
                 L 620 600 
                 Q 640 570 650 540 
                 L 660 500 
                 Q 670 470 680 440 
                 L 690 400 
                 Q 700 370 710 340 
                 L 720 300 
                 Q 730 270 740 240 
                 L 750 200 
                 Q 760 170 770 140 
                 L 780 100 
                 Q 790 70 800 40 
                 L 810 20 
                 Q 820 10 830 5 
                 L 840 0 
                 Z"
              fill="url(#handGradient1)"
              filter="url(#glow)"
            />
          </svg>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        {/* Logo */}
        <div 
          className={`transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        >
          <div className="relative">
            {/* dp logo */}
            <svg viewBox="0 0 200 120" className="w-48 h-32 md:w-64 md:h-40">
              <defs>
                <filter id="textGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Stylized 'd' */}
              <path
                d="M 60 15 
                   L 60 60 
                   Q 60 85 40 85 
                   Q 20 85 20 60 
                   Q 20 35 40 35 
                   Q 50 35 60 45 
                   L 60 35 
                   L 60 15 
                   Z
                   M 35 60 
                   Q 35 75 45 75 
                   Q 55 75 55 60 
                   Q 55 45 45 45 
                   Q 35 45 35 60 
                   Z"
                fill="white"
                filter="url(#textGlow)"
              />
              
              {/* The connecting line under 'd' */}
              <rect x="20" y="90" width="45" height="8" fill="white" filter="url(#textGlow)" />
              
              {/* Stylized 'p' */}
              <path
                d="M 95 15 
                   L 95 105 
                   L 110 105 
                   L 110 85 
                   Q 120 90 135 90 
                   Q 160 90 160 60 
                   Q 160 30 135 30 
                   Q 120 30 110 40 
                   L 110 15 
                   Z
                   M 135 80 
                   Q 145 80 145 60 
                   Q 145 40 135 40 
                   Q 125 40 125 60 
                   Q 125 80 135 80 
                   Z"
                fill="white"
                filter="url(#textGlow)"
              />
            </svg>
          </div>
        </div>

        {/* Coming Soon text */}
        <div 
          className={`mt-16 md:mt-24 transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-light tracking-[0.3em] uppercase">
            Coming Soon!
          </h1>
        </div>

        {/* Subtle gradient glow at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
      </div>

      {/* Particle effect overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => {
          // Deterministic pseudo-random values based on index
          const left = ((i * 17 + 31) % 100);
          const top = ((i * 23 + 47) % 100);
          const delay = ((i * 0.3) % 3);
          const duration = 2 + ((i * 0.2) % 3);
          
          return (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
              }}
            />
          );
        })}
      </div>
    </main>
  );
}
