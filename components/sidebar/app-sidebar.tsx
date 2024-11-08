"use client";

import Link from "next/link";
import Image from "next/image";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
} from "@/components/ui/sidebar";

import ModifiedSidebarGroup from "./sidebar-group";
import { items, support } from "@/model/sidebar-data";
import Footer from "./footer";

export function AppSidebar() {
  return (
    <Sidebar className="border-none">
      <SidebarContent className="h-screen px-4 py-10 text-center bg-white border-r-[1px] border-[#EFF0F6] shadow-custom rounded-[20px]">
        <SidebarGroup>
          <Link className="relative h-[17px]" href="/">
            <Image
              className="object-contain float-start -ml-7"
              src="/TESLA.svg"
              alt="tesla logo"
              fill
              priority
            />
          </Link>
        </SidebarGroup>
        <ModifiedSidebarGroup label="" items={items} />
        <ModifiedSidebarGroup label="Support" items={support} />
        <SidebarFooter></SidebarFooter>
        <Footer />
      </SidebarContent>
    </Sidebar>
  );
}
