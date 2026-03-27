import Image from "next/image";
import Link from "next/link";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiSubstack } from "react-icons/si";
import { FaTelegramPlane } from "react-icons/fa";

export default function Footer(): React.JSX.Element {
  return (
    <footer id="contact" className="py-10  px-6 border-t border-white/10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Get in Touch
          </h2>
          <p className="text-md text-white/80 max-w-2xl mx-auto mb-8">
            I&apos;m currently looking to join a cross-functional team that
            values improving people&apos;s lives through data, or have a project
            in mind? Let&apos;s connect.
          </p>
          <a
            href="mailto:ibii.code@gmail.com"
            className="text-md text-purple-400 hover:text-purple-300 transition-colors"
          >
            adedirannath@gmail.com
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mt-12">
          <Link
            href="https://x.com/_angelnath"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-purple-500/30 hover:border-purple-500/50 transition-all"
            aria-label="Twitter"
          >
            <FaSquareXTwitter className="w-5 h-5" />
          </Link>
          <Link
            href="https://only1angelnath.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-purple-500/30 hover:border-purple-500/50 transition-all"
            aria-label="Substack"
          >
            <SiSubstack className="w-5 h-5" />
          </Link>
          <Link
            href="https://dune.com/angelnath"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-purple-500/30 hover:border-purple-500/50 transition-all"
            aria-label="Dune"
          >
            <Image
              src="/assets/dune-logo.png"
              alt="Dune logo"
              width={40}
              height={40}
            />
          </Link>
          <Link
            href="https://t.me/only1angelnath"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-purple-500/30 hover:border-purple-500/50 transition-all"
            aria-label="Telegram"
          >
            <FaTelegramPlane />
          </Link>
        </div>

        <div className="text-center mt-12 pt-8 border-t border-white/10">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Nathaniel Adediran. All rights
            reserved. Powered by data-driven discovery.
          </p>
        </div>
      </div>
    </footer>
  );
}
