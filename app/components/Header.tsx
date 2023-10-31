import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <section id="header">
      <header className="flex justify-between items-center fixed top-0 inset-x-0 text-white py-8 px-16 z-30">
        <div className="flex items-center gap-12">
          <Link href="/">
            <Image src="/assets/logo.svg" alt="logo" width={200} height={200} />
          </Link>
          <div className="flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/product">Product</Link>
            <Link href="/methodology">Methodology</Link>
            <Link href="/article">Article</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/career">Career</Link>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <select className="bg-transparent w-12 cursor-pointer border-none outline-none">
            <option className="text-black" value="EN">
              EN
            </option>
            <option className="text-black" value="ID">
              ID
            </option>
            <option className="text-black" value="JA">
              JA
            </option>
            <option className="text-black" value="CN">
              zh-CN
            </option>
          </select>
          <div className="flex gap-3">
            <Link href="https://www.linkedin.com">
              <Image
                src="/assets/linkedin.svg"
                alt="linkedin"
                width={32}
                height={32}
              />
            </Link>
            <Link href="https://www.twitter.com">
              <Image
                src="/assets/twitter.svg"
                alt="twitter"
                width={32}
                height={32}
              />
            </Link>
            <Link href="https://www.facebook.com">
              <Image
                src="/assets/facebook.svg"
                alt="facebook"
                width={32}
                height={32}
              />
            </Link>
            <Link href="https://www.instagram.com">
              <Image
                src="/assets/instagram.svg"
                alt="instagram"
                width={32}
                height={32}
              />
            </Link>
            <Link href="https://www.youtube.com">
              <Image
                src="/assets/youtube.svg"
                alt="youtube"
                width={32}
                height={32}
              />
            </Link>
          </div>
        </div>
      </header>
    </section>
  );
}

export default Header;
