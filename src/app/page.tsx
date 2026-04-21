'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Mobile background as base */}
      <div className="absolute inset-0">
        <Image
          src="/iPhone 14 & 15 Pro - 1.png"
          alt="Background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
      </div>

      {/* Centered Logo */}
      <div 
        className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
      >
        <Image
          src="/Group 38.svg"
          alt="Logo"
          width={592}
          height={385}
          className="w-[70%] max-w-[350px] h-auto"
          priority
        />
      </div>

      {/* Coming Soon text at bottom */}
      <div 
        className={`absolute bottom-24 left-0 right-0 text-center transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <h1 className="text-white text-xl md:text-2xl font-light tracking-[0.3em] uppercase">
          Coming Soon!
        </h1>
      </div>
    </main>
  );
}
