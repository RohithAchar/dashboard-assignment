"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";

interface Props {
  label: string;
  items: Item[];
}
interface Item {
  title: string;
  url: string;
  icon: React.ComponentType;
  isActive?: boolean;
}

const ModifiedSidebarGroup: React.FC<Props> = ({ label, items }) => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-base opacity-50 ml-2">
        {label}
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                isActive={item.isActive}
                className="h-[46px]"
                asChild
              >
                <Link
                  className={cn(
                    "h-[46px]" +
                      (item.isActive ? " opacity-100" : " opacity-70")
                  )}
                  href={item.url}
                >
                  <div className="flex items-center justify-center w-6 h-6 mx-2">
                    <item.icon />
                  </div>
                  <span className="text-sm font-medium">{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

export default ModifiedSidebarGroup;
