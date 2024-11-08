import { TrendingUp } from "lucide-react";

import ActivityIcon from "@/components/icons/activity";
import PeopleIcon from "@/components/icons/people";
import Zap from "@/components/icons/zap";
import BulbIcon from "@/components/icons/bulbIcon";
import SettingsIcon from "@/components/icons/settings";

export const items = [
  {
    title: "Reports",
    url: "#",
    icon: TrendingUp,
    isActive: true,
  },
  {
    title: "Library",
    url: "#",
    icon: Zap,
  },
  {
    title: "People",
    url: "#",
    icon: PeopleIcon,
  },
  {
    title: "Activities",
    url: "#",
    icon: ActivityIcon,
  },
];

export const support = [
  {
    title: "Library",
    url: "#",
    icon: BulbIcon,
  },
  {
    title: "Settings",
    url: "#",
    icon: SettingsIcon,
  },
];
