"use client";

import React, { useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import navs from "../../../elements/navs/navs.json";
import Link from "next/link";

export default function PageHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const headerRef = useRef<HTMLElement | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div>
      <header
        ref={headerRef}
        className={`fixed z-50 bg-transparent w-full text-white px-10 py-10 md:px-10 md:py-10`}
      >
        <div className="flex items-center justify-between w-full">
          <h1
            className={`font-bold text-4xl transition-all duration-300 ease-in-out`}
          >
            <Link href={"/"}>Filmmm</Link>
          </h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-4 text-xl font-semibold">
              {navs.map((nav) => (
                <li key={nav.name}>
                  <Link href={nav.path} prefetch={true} className="hover:text-blue-600">
                    {nav.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button
            className="md:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="text-black" /> : <Menu />}
          </button>
        </div>
      </header>
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-16">
          <nav className="container mx-auto px-4">
            <ul className="space-y-4">
              {navs.map((nav) => (
                <li key={nav.name}>
                  <a href={nav.path} className="block py-2 hover:text-blue-600">
                    {nav.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}
