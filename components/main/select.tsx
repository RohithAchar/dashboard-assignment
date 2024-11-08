"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import ChevronDown from "../icons/chevron-down";

interface Props {
  label: string;
  placeholder: string;
}

const SelectDropDown: React.FC<Props> = ({ label, placeholder }) => {
  const [isMounted, setIsMounted] = React.useState(false);
  React.useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;
  return (
    <div>
      <Select>
        <SelectTrigger className="items-center justify-between rounded-2xl border border-[#EFF0F6]">
          <div>
            <span className="font-medium text-base opacity-70">{label}:</span>
            <span className="font-medium text-base ml-1">
              <SelectValue placeholder={placeholder} />
            </span>
          </div>
          <ChevronDown />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="value1">Value 1</SelectItem>
          <SelectItem value="value2">Value 2</SelectItem>
          <SelectItem value="value3">Value 3</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectDropDown;
