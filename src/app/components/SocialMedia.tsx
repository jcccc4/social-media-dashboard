import React from "react";
import Image from "next/image";
type Props = {
  border: string;
  username: string;
  followerCount: string;
  followerNetChange: number;
  description:string;
  icon: string;
  alternateText:string;
  hasFollowerGain: (netChange: number) => boolean;
};
function SocialMedia({
  username,
  followerCount,
  followerNetChange,
  border,
  icon,
  description,
  alternateText,
  hasFollowerGain
}: Props) {
  return (
    <section
      className={`mt-10 pt-1 w-full rounded-[5px] ${border} lg:w-[255px] lg:mt-[46px]`}
    >
      <section className={` bg-[#F1F3FA] w-full h-auto rounded-b-[5px] dark:bg-[#252B42]`}>
        <ul className="flex flex-col items-center h-[216px]">
          <li className="flex mt-8 gap-x-2 font-bold items-center text-[#63687D] dark:text-[#8C98C6]">
            <Image
              src={`/${icon}`}
              height={20}
              width={20}
              alt={alternateText}
            />
            {username}
          </li>
          <li className="text-followerCount font-bold mt-7 tracking-[-2px]">
            {followerCount.toString()}
          </li>
          <li className="text-username mt-[9px] tracking-[5px] dark:text-[#8C98C6]">{description}</li>
          <li className={`mt-[24px] font-bold text-username flex items-center gap-1 ${hasFollowerGain(followerNetChange) ? "text-[#1EB589]" : "text-[#DC414C]"}`}>
          {hasFollowerGain(followerNetChange) ? (
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
            <span>
              <span>{Math.abs(followerNetChange).toString()}</span> Today
            </span>
          </li>
        </ul>
      </section>
    </section>
  );
}

export default SocialMedia;
