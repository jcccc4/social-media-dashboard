import React from "react";
import Image from "next/image";
type Props = {
  border: String;
  username: String;
  followerCount: String;
  followerNetChange: Number;
  description:String;
  icon: String;
};
function SocialMedia({
  username,
  followerCount,
  followerNetChange,
  border,
  icon,
  description,
}: Props) {
  return (
    <section
      className={`mt-10 pt-1 w-full rounded-[5px] ${border}`}
    >
      <section className={` bg-[#F1F3FA] w-full h-auto rounded-b-[5px] `}>
        <ul className="flex flex-col items-center h-[216px]">
          <li className="flex mt-8 gap-x-2 font-bold items-center text-[#63687D]">
            <Image
              src={`/${icon}`}
              height={20}
              width={20}
              alt="Facebook Icon"
            />
            {username}
          </li>
          <li className="text-followerCount font-bold mt-7 tracking-[-2px]">
            {followerCount.toString()}
          </li>
          <li className="text-username mt-[9px] tracking-[5px]">{description}</li>
          <li className="mt-[24px] font-bold text-username text-[#1EB589] flex items-center gap-1">
            <Image
              src="/icon-up.svg"
              height={4}
              width={8}
              alt="Follower Gain"
            />
            <span>
              <span>{followerNetChange.toString()}</span> Today
            </span>
          </li>
        </ul>
      </section>
    </section>
  );
}

export default SocialMedia;
