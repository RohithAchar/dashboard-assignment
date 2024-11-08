import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import ArrowUpIcon from "../icons/arrow-up";
import ArrowDownIcon from "../icons/arrow-down";

interface Props {
  name: string;
  points: number;
  percentage: number;
  profileUrl: string;
  votes: number;
}

const LeaderboardProfile: React.FC<Props> = ({
  name,
  points,
  percentage,
  profileUrl,
  votes,
}) => {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex gap-4">
        <Avatar>
          <AvatarImage src={profileUrl} alt="Profile" />
          <AvatarFallback>Profile</AvatarFallback>
        </Avatar>
        <div className="flex flex-col justify-center">
          <h3 className="font-semibold text-sm">{name}</h3>
          <p className="font-medium text-xs opacity-50">
            {points} Points - {percentage}% Correct
          </p>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <p className="text-base font-semibold">{Math.abs(votes)}</p>
        {votes > 0 ? <ArrowUpIcon /> : <ArrowDownIcon />}
      </div>
    </div>
  );
};

export default LeaderboardProfile;
