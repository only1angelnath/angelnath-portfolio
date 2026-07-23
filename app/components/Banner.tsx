"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Banner(): React.JSX.Element {
  const texts = ["Blockchain Data Analyst", "On-Chain Researcher", "Python Developer", "SQL Analyst"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(80);

  useEffect(() => {
    const currentText = texts[currentTextIndex];

    if (!isDeleting) {
      if (displayedText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(40);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length - 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setTypingSpeed(80);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    }
  }, [displayedText, isDeleting, currentTextIndex, texts, typingSpeed]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-40 px-6"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Right side - Character image */}
          <div className="flex justify-center lg:justify-end relative w-full lg:w-auto">
            <div className="relative top-10">
              {/* Mobile: Hello text */}
              <div className="lg:hidden -top-150 z-10">
                <div className="relative inline-block">
                  <Image
                    src="/assets/arrow.png"
                    alt="Arrow pointer"
                    width={80}
                    height={80}
                    className="absolute top-5 rotate-z-280"
                    style={{ width: "auto", height: "auto" }}
                  />
                  <div className="relative">
                    <p className="text-white text-lg whitespace-nowrap">
                      Hello! I Am{" "}
                      <span className="text-purple-400">Nathaniel Adediran</span>
                    </p>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white/10"></div>
                </div>
              </div>
              <Image
                src="/assets/me.png"
                alt="Nathaniel Adediran - Blockchain Data Analyst"
                width={300}
                height={300}
                className="max-w-md absolute"
                style={{ width: "auto", height: "auto" }}
                priority
              />
              <Image
                src="/assets/me-glow.png"
                alt="Nathaniel Adediran - Blockchain Data Analyst"
                width={300}
                height={300}
                className="max-w-md"
                style={{ width: "auto", height: "auto" }}
                priority
              />
            </div>
          </div>

          {/* Left side - Text content */}
          <div className="flex-1 space-y-6 text-center lg:text-left">
            {/* Desktop: Hello text */}
            <div className="hidden lg:inline-block relative">
              <Image
                src="/assets/arrow.png"
                alt="Arrow pointer"
                width={100}
                height={100}
                className="absolute"
                style={{
                  left: "-100px",
                  top: "-50px",
                  width: "auto",
                  height: "auto",
                }}
              />
              <div style={{ bottom: 40, position: "relative" }}>
                <p className="text-white text-lg">
                  Hello! I Am{" "}
                  <span className="text-purple-400">Nathaniel Adediran</span>
                </p>
              </div>
              <div className="absolute -bottom-2 left-8 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white/10"></div>
            </div>

            <div>
              <p className="text-2xl">
                A blockchain data analyst who{" "}
              </p>
              <h1 className="text-3xl tracking-tight lg:text-4xl font-semibold text-white leading-tight">
                finds patterns and tells
                <br /> data{" "}
                <span className="relative inline-block">
                  <Image
                    src="/assets/circle.png"
                    alt="Circle"
                    width={200}
                    height={200}
                    className="absolute mt-2"
                  />
                  <span className="bg-gradient-to-r from-violet-600 via-violet-400 to-violet-600 bg-clip-text text-transparent">
                    stories
                  </span>
                </span>
                ...
              </h1>
              <p className="text-md text-white/80">
                The blockchain tells the truth. I pull the data and explain what it actually means.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-3 pt-15 text-center lg:text-left">
          <p className="text-5xl text-white font-bold">
            I&apos;m a {displayedText}
            <span className="animate-pulse">|</span>
          </p>

          <div className="flex items-center gap-4 max-sm:justify-around">
            <Link href="#contact">
              <button className="flex items-center justify-around mt-7 bg-violet-600 hover:bg-violet-400 min-w-30 h-10 px-6 rounded-full transition-colors">
                Contact Me
              </button>
            </Link>
            <a
              href="/resume.pdf"
              download
              className="flex items-center justify-center mt-7 border border-violet-600 hover:border-violet-400 hover:text-violet-400 text-white min-w-30 h-10 px-6 rounded-full transition-colors text-sm"
            >
              Download CV
            </a>
          </div>

          <p className="text-lg text-white/80 max-w-2xl mt-8 mx-auto lg:mx-0">
            I&apos;m a blockchain data analyst with a B.Tech in Statistics and 3+ years in Web3.
            I use SQL on Dune Analytics and Python in production to turn raw on-chain data
            into decisions people can act on — across Ethereum, Base, Solana, and Arbitrum.
            I&apos;ve built open-source tools, published research with verified on-chain data,
            and shipped analytics products that run live. If you need someone who can query
            the chain, build the pipeline, and explain what it means clearly — that&apos;s what I do.
          </p>
        </div>
      </div>
    </section>
  );
}
