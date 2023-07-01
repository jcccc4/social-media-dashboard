import React from "react";
import OverviewStat from "./OverviewStat";
type Props = {
  hasFollowerGain: (netChange: number) => boolean;
};

export default function Overview({ hasFollowerGain }: Props) {
  return (
    <section className="mt-[46px] w-full  ">
      <h1 className="text-[#63687D]">Overview - Today</h1>
      <ul className="mt-[27px] lg:mt-6 flex flex-col gap-4 lg:flex-row w-full lg:justify-between lg:flex-wrap">
        <OverviewStat
          icon="icon-facebook.svg"
          alternateText="Facebook Icon"
          statistic={"Page Views"}
          statisticCount={"87"}
          netChange={3}
          hasFollowerGain={hasFollowerGain}
        />
        <OverviewStat
          icon="icon-facebook.svg"
          alternateText="Facebook Icon"
          statistic={"Likes"}
          statisticCount={"52"}
          netChange={-2}
          hasFollowerGain={hasFollowerGain}
        />
        <OverviewStat
          icon="icon-instagram.svg"
          alternateText="Instagram Icon"
          statistic={"Likes"}
          statisticCount={"5462"}
          netChange={2257}
          hasFollowerGain={hasFollowerGain}
        />
        <OverviewStat
          icon="icon-instagram.svg"
          alternateText="Instagram Icon"
          statistic={"Profile Views"}
          statisticCount={"52k"}
          netChange={1375}
          hasFollowerGain={hasFollowerGain}
        />
        <OverviewStat
          icon="icon-twitter.svg"
          alternateText="Twitter Icon"
          statistic={"Retweets"}
          statisticCount={"117"}
          netChange={303}
          hasFollowerGain={hasFollowerGain}
        />
        <OverviewStat
          icon="icon-twitter.svg"
          alternateText="Twitter Icon"
          statistic={"Likes"}
          statisticCount={"507"}
          netChange={553}
          hasFollowerGain={hasFollowerGain}
        />
        <OverviewStat
          icon="icon-youtube.svg"
          alternateText="Youtube Icon"
          statistic={"Likes"}
          statisticCount={"107"}
          netChange={-19}
          hasFollowerGain={hasFollowerGain}
        />
        <OverviewStat
          icon="icon-youtube.svg"
          alternateText="Youtube Icon"
          statistic={"Total Views"}
          statisticCount={"1407"}
          netChange={-12}
          hasFollowerGain={hasFollowerGain}
        />
      </ul>
    </section>
  );
}
