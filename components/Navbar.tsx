"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Social", path: "/social" },
    { name: "Economic", path: "/economic" },
    { name: "Environment", path: "/environment" },
    { name: "Global", path: "/global" },
    { name: "Reflection", path: "/reflection" },
    { name: "References", path: "/references" },
  ];

  return (
    <>
      {/* DESKTOP NAV */}
      <nav className="hidden sm:flex justify-between items-center px-10 py-5 bg-white shadow text-black">
        <Link href="/" className="text-2xl font-semibold">
          FPS MUSEUM
        </Link>

        <ul className="flex gap-8 text-lg font-medium">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`hover:text-gray-800 transition ${
                  pathname === item.path ? "font-semibold" : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* MOBILE NAV */}
      <nav className="sm:hidden flex justify-between items-center px-6 py-4 bg-white shadow text-black">
        {/* LEFT HAMBURGER BUTTON */}
        <button onClick={() => setOpen(true)} aria-label="Open Menu">
          <svg
            width="28"
            height="28"
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M4 7h20M4 14h20M4 21h20" />
          </svg>
        </button>

        {/* LOGO */}
        <Link href="/" className="text-xl font-semibold">
          MyProject
        </Link>

        {/* Spacer */}
        <div className="w-8" />
      </nav>

      {/* LEFT DRAWER (FULL HEIGHT) */}
      <div
        className={`fixed inset-y-0 left-0 w-72 bg-white shadow-xl z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-6 right-6"
          aria-label="Close Menu"
        >
          <svg
            width="32"
            height="32"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M6 6l20 20M26 6L6 26" />
          </svg>
        </button>

        {/* MENU LIST */}
        <div className="mt-20 flex flex-col gap-6 text-xl font-light px-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setOpen(false)}
              className={`transition ${
                pathname === item.path ? "font-semibold" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* FOOTER SOCIALS */}
        <div className="absolute bottom-8 w-full flex justify-center gap-8 text-gray-500 text-sm">
          <span>Facebook</span>
          <span>Instagram</span>
          <span>Twitter</span>
        </div>
      </div>

      {/* OVERLAY (click to close) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
