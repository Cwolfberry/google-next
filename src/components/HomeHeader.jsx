import Link from "next/link";
import React from "react";

// alt shift down : quick copy selected text
export default function HomeHeader() {
  return (
    <header>
      <div className="">
        <Link href="https://mail.google.com" className="hover:underline">
          Gmail
        </Link>

        <Link href="https://mail.google.com" className="hover:underline">
          Gmail
        </Link>
      </div>
    </header>
  );
}
