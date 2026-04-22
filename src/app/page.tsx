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
    
      {/* Desktop Background */}
      <div className="hidden md:block absolute  inset-0">
        <Image
          
          src="/Frame 23.png"
          alt="Background Desktop"
          fill
          className="object-cover"
          priority
          quality={100}
        />
      </div>

      {/* Mobile Background */}
      <div className="md:hidden absolute inset-0">
        <Image
          src="/mobile.png"
          alt="Background Mobile"
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
          className="w-[50%] max-w-[200px] h-auto"
          priority
        />
      </div>

      {/* Coming Soon text at bottom */}
      <div 
        className={`absolute bottom-5 left-0 right-0 text-center transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <h1 className="text-white text-[18px] md:text-[18px] font-light  uppercase">
          Website by DotToDesign<br/>©2026. All Rights Reserved.
        </h1>
      </div>
    </main>
  );
}
