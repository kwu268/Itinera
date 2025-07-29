'use client';
// import CornerLines from '@/components/shared/cornerLines';
import React, { useEffect, useRef, useState } from 'react';
import { homeScreen, aiConcept, airplane } from '../../public/images/index.';
import Image from 'next/image';

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = scrollRef.current;
      if (!currentScroll) return;

      setIsBottom(
        currentScroll.scrollTop + currentScroll.clientHeight >=
          currentScroll.scrollHeight - 1
      );
    };
    const currentScroll = scrollRef.current;
    if (currentScroll) currentScroll.addEventListener('scroll', handleScroll);
    return () => {
      if (currentScroll)
        currentScroll.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <div
      className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white h-screen overflow-y-scroll snap-y snap-mandatory"
      style={{ scrollBehavior: 'smooth' }}
      ref={scrollRef}
    >
      {/* <CornerLines /> */}
      <div className="h-screen flex flex-col justify-center items-center space-y-8 p-6 snap-start">
        {/* Nav */}
        <nav className="fixed top-0 left-0 p-6">
          <div
            className="font-bold text-lg tracking-wide cursor-pointer"
            onClick={() =>
              scrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
            }
          >
            Itinera
          </div>
          <div className="md:hidden">
            {/* Mobile menu icon */}
            <button className="btn btn-sm btn-ghost">☰</button>
          </div>
        </nav>
        {/* Hero Section */}
        <section className="flex flex-col items-center space-y-3 text-center">
          {/* heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-shadow-lg/40 text-shadow-amber-50 fade-in">
            Welcome to Itinera
          </h1>
          {/* Desc */}
          <p className="text-gray-300 text-lg md:text-xl">
            Your one-stop solution for planning the perfect trip.
          </p>
          {/* buttons */}
          <div className="flex  space-x-2 justify-center w-full text-md text-center">
            <button className="btn btn-primary w-1/3 hover:bg-indigo-500">
              Sign in
            </button>
            <button className="btn btn-outline w-1/3">Get Started</button>
          </div>
          {!isBottom ? (
            <div className="absolute bottom-6 animate-pulse  text-sm text-gray-400">
              ↓ Scroll to learn more
            </div>
          ) : <div
            onClick={() => {
              scrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="absolute bottom-6 animate-pulse  text-sm text-gray-400 cursor-pointer"
          >
            ↑ Click here to jump back to the top
          </div>}
        </section>
      </div>
      {/* INFO Section */}
      <section className="h-screen flex space-x-7 justify-center items-center px-4 py-12 text-center snap-start bg-gradient-to-br from-emerald-950 via-black to-grey-500 ">
        <div className="  bg-gray-600/20 p-6 rounded-3xl h-1/2 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 opacity-100">
            Create & Organize Trips
          </h2>
          <p className="max-w-xl text-gray-300">
            Easily build vacation plans, schedule activities, and track weather
            all in one place. With Itinera, you can seamlessly organize your
            itinerary, add must-see attractions, and manage your travel schedule
            with ease.
          </p>
          <p className="max-w-xl text-gray-300">
            <br />
            Enjoy a stress-free planning experience. Whether you’re exploring
            new cities or revisiting favorite spots, Itinera helps you stay on
            top of every aspect of your journey, making travel planning simple,
            efficient, and enjoyable.
          </p>
        </div>
        <Image
          src={homeScreen}
          alt="Vacation Spot"
          className="w-1/3 rounded-3xl"
        />
      </section>
      <section className="h-screen flex space-x-7 justify-center items-center px-4 py-12 text-center snap-start bg-gradient-to-br from-red-950 via-black to-grey-500">
        <Image
          src={aiConcept}
          alt="ai concept picture"
          className="w-1/3 rounded-2xl"
        />
        <div className="bg-gray-600/20 p-6 rounded-3xl h-1/2 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            AI-Powered Travel Assistant
          </h2>
          <p className="max-w-xl text-gray-300">
            Discover the future of trip planning with Itinera’s AI-powered
            assistant. Our intelligent feature helps you generate personalized
            itineraries, recommends must-see attractions, and optimizes your
            travel schedule based on your interests and preferences.
            <br />
            <br />
            Simply tell the AI what kind of adventure you’re looking for, and
            let it handle the details—from finding hidden gems to suggesting the
            best routes and activities. Make your travel experience smarter,
            easier, and more enjoyable with instant, tailored recommendations at
            your fingertips.
          </p>
        </div>
      </section>
      <section className="h-screen flex space-x-7 justify-center items-center px-4 py-12 text-center snap-start bg-gradient-to-br from-indigo-950 via-black to-grey-500">
        <div className="bg-gray-600/20 p-6 rounded-3xl h-1/2 flex flex-col justify-center items-center space-y-4">
          <h1 className="text-4xl font-bold  text-shadow-amber-50 fade-in">
            Unlock Your Ultimate Travel Experience
          </h1>
          <p className="max-w-xl text-gray-300">
            Ready to take your adventures to the next level? Sign up for Itinera
            and gain access to exclusive features designed to make your travel
            planning effortless and enjoyable.
            <br />
            <br />
            Join our community of explorers and start planning smarter,
            traveling better, and making memories that last.
          </p>
          <button className="btn btn-primary w-1/3 hover:bg-indigo-500">
            Sign up
          </button>
        </div>
        <Image src={airplane} alt="airplane" className="w-2/5 h-1/2 rounded-3xl" />
        
      </section>
    </div>
  );
}
