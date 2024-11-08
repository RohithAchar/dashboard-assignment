"use client";

import { ChevronDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface Props {
  placeholder: string;
  label: string;
  items: Item[];
}

interface Item {
  value: string;
  label: string;
}

const CustomSelect: React.FC<Props> = ({ items, placeholder, label }) => {
  return (
    <Select>
      <SelectTrigger className="h-full">
        <span className="font-semibold text-xs text-[#0F2552]">
          <SelectValue placeholder={placeholder} />
        </span>
        <ChevronDown className="w-4 h-4" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {items.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default CustomSelect;
