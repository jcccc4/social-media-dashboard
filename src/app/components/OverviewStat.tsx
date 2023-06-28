import React from "react";
import Image from "next/image";
type Props = {
  icon: string;
  alternateText: string;
  statistic: string;
  statisticCount: string;
  netChange: number;
  hasFollowerGain: (netChange: number) => boolean;
};

function OverviewStat({
  icon,
  alternateText,
  statistic,
  statisticCount,
  netChange,
  hasFollowerGain,
}: Props) {
  return (
    <li className="h-[125px] px-6 pt-[26px] bg-[#F1F3FA] rounded-[5px]">
      <ul>
        <li className="flex justify-between items-center text-statistics font-bold">
          <span>{statistic}</span>
          <Image src={`/${icon}`} height={20} width={20} alt={alternateText} />
        </li>

        <li className="mt-[21px] flex justify-between items-start ">
          <span className="text-statisticsNumber font-bold">
            {statisticCount}
          </span>
          <span
            className={`flex gap-[2px] mt-[19px] items-center font-bold text-username ${
              hasFollowerGain(netChange) ? "text-[#1EB589]" : "text-[#DC414C]"
            } `}
          >
            {hasFollowerGain(netChange) ? (
              <Image
                src="/icon-up.svg"
                height={4}
                width={8}
                alt="Follower Gain"
              />
            ) : (
              <Image
                src="/icon-down.svg"
                height={4}
                width={8}
                alt="Follower Loss"
              />
            )}
            <span>{Math.abs(netChange).toString()}%</span>
          </span>
        </li>
      </ul>
    </li>
  );
}

export default OverviewStat;
