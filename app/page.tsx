import DownloadLogo from "@/components/icons/download";
import MyCard from "@/components/main/card";
import CardContainer from "@/components/main/card-container";
import CardDescription from "@/components/main/description";
import Heading from "@/components/main/heading";
import MiniCardContainer from "@/components/main/mini-card/mini-card-container";
import SelectDropDown from "@/components/main/select";
import SelectorContainer from "@/components/main/selector-container";
import { Separator } from "@/components/ui/separator";
import MainContent from "@/components/main/mini-card/main-text";
import MiniCard from "@/components/main/mini-card/mini-card";
import InfoIcon from "@/components/icons/info";
import Chart from "@/components/main/mini-card/chart";
import CustomSelect from "@/components/main/custom-select";
import VerticalChart from "@/components/main/charts/vertical-chart";
import MiniCardDescription from "@/components/main/mini-card/mini-description";
import HorizontalBar from "@/components/main/horizontal-bar";
import {
  activityChartData,
  activitySelectorData,
  groupLeaderboard,
  selectorData,
  strongTopics,
  userLeaderboard,
  weakTopics,
} from "@/model/report-data";
import Navbar from "@/components/navbar/navbar";
import LeaderboardProfile from "@/components/main/leaderboard-profile";
import GroupLeaderBoard from "@/components/main/group-leaderboard";

export default function Home() {
  return (
    <div className="p-6 md:p-10 bg-background flex flex-col space-y-8">
      <Navbar />
      <Heading title="Reports">
        <button className="flex items-center gap-2 text-[#4D4D4D]">
          <DownloadLogo />
          <p className="font-semibold text-sm">Download</p>
        </button>
      </Heading>
      <Separator />
      <SelectorContainer>
        {selectorData.map((item) => (
          <div className="w-full" key={item.label}>
            <SelectDropDown label={item.label} placeholder={item.placeholder} />
          </div>
        ))}
      </SelectorContainer>
      <CardContainer>
        <MiniCardContainer>
          <MiniCard>
            <MiniCardDescription>Active Users</MiniCardDescription>
            <MainContent>
              27<span className="font-semibold text-base opacity-70">/80</span>
            </MainContent>
          </MiniCard>
          <MiniCard>
            <MiniCardDescription>Questions Answered</MiniCardDescription>
            <MainContent>3,298</MainContent>
          </MiniCard>
          <MiniCard>
            <MiniCardDescription>Avg. Session Length</MiniCardDescription>
            <MainContent>2m 34s</MainContent>
          </MiniCard>
          <MiniCard>
            <MiniCardDescription>
              Starting Knowledge
              <InfoIcon />
            </MiniCardDescription>
            <MainContent>64%</MainContent>
            <Chart />
          </MiniCard>
          <MiniCard>
            <MiniCardDescription>Current Knowledge</MiniCardDescription>
            <MainContent>86%</MainContent>
            <Chart />
          </MiniCard>
          <MiniCard>
            <MiniCardDescription>Knowledge Gain</MiniCardDescription>
            <MainContent>+34%</MainContent>
            <Chart />
          </MiniCard>
        </MiniCardContainer>
        <MyCard>
          <div className="flex text-nowrap justify-between items-center font-medium text-sm -mt-3">
            <p className="text-[#4D4D4D]">Activity</p>
            <span className="">
              <CustomSelect
                label="Sort"
                placeholder="Month"
                items={activitySelectorData}
              />
            </span>
          </div>
          <Separator />
          <VerticalChart data={activityChartData} />
        </MyCard>
        <MyCard>
          <CardDescription>
            <p className="">Weakest Topics</p>
          </CardDescription>
          <div className="space-y-6 mt-2 pb-6">
            {weakTopics.map((item) => (
              <HorizontalBar
                key={item.percentage}
                title={item.title}
                percentage={item.percentage}
                url={item.url}
                color="orange"
              />
            ))}
          </div>
        </MyCard>
        <MyCard>
          <CardDescription>
            <p className="">Strongest Topics</p>
          </CardDescription>
          <div className="space-y-6 mt-2 pb-6">
            {strongTopics.map((item) => (
              <HorizontalBar
                key={item.percentage}
                title={item.title}
                percentage={item.percentage}
                url={item.url}
                color="green"
              />
            ))}
          </div>
        </MyCard>
        <MyCard>
          <CardDescription>
            <p className="">User Leaderboard</p>
          </CardDescription>
          <div className="space-y-6 mt-2 pb-6">
            {userLeaderboard.map((item) => (
              <LeaderboardProfile
                key={item.name}
                profileUrl={item.profileUrl}
                name={item.name}
                points={item.points}
                percentage={item.percentage}
                votes={item.votes}
              />
            ))}
          </div>
        </MyCard>
        <MyCard>
          <CardDescription>
            <p className="">Groups Leaderboard</p>
          </CardDescription>
          <div className="space-y-7 mt-2 pb-6">
            {groupLeaderboard.map((item) => (
              <GroupLeaderBoard
                key={item.name}
                name={item.name}
                points={item.points}
                percentage={item.percentage}
                votes={item.votes}
              />
            ))}
          </div>
        </MyCard>
      </CardContainer>
    </div>
  );
}
