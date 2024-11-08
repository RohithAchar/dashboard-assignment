"use client";

import React from "react";

import { SidebarTrigger } from "../ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const isMobile = useIsMobile();

  if (!isMobile) return null;

  return (
    <div className="bg-white p-2 flex items-center justify-between rounded-2xl">
      <Link className="relative w-[200px] h-[17px] -ml-7" href="/">
        <Image
          className="relative object-contain"
          src="/TESLA.svg"
          alt="tesla logo"
          fill
          priority
        />
      </Link>
      <SidebarTrigger className="bg-secondary text-primary"></SidebarTrigger>
    </div>
  );
};

export default Navbar;
