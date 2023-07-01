import React from "react";
import SocialMedia from "./SocialMedia";
type Props = {
  hasFollowerGain: (netChange: number) => boolean;
};

export default function SocialMediaList({ hasFollowerGain }: Props) {
  return (
    <div className="lg:flex w-full lg:justify-between lg:flex-wrap">
      <SocialMedia
        border="bg-[#178FF5]"
        username="@nathanf"
        followerCount="1987"
        followerNetChange={12}
        description="FOLLOWERS"
        icon="icon-facebook.svg"
        alternateText="Facebook Icon"
        hasFollowerGain={hasFollowerGain}
      />
      <SocialMedia
        border="bg-[#1DA1F2]"
        username="@nathanf"
        followerCount="1044"
        followerNetChange={99}
        description="FOLLOWERS"
        icon="icon-twitter.svg"
        alternateText="Twitter Icon"
        hasFollowerGain={hasFollowerGain}
      />
      <SocialMedia
        border="bg-gradient-to-l from-[#DF4896] via-[#EE877E] to-[#FDC366]"
        username="@realnathanf"
        followerCount="11k"
        followerNetChange={1099}
        description="FOLLOWERS"
        icon="icon-instagram.svg"
        alternateText="Instagram Icon"
        hasFollowerGain={hasFollowerGain}
      />
      <SocialMedia
        border="bg-[#C4032B]"
        username="Nathan F."
        followerCount="82349"
        followerNetChange={-144}
        description="SUBSCRIBERS"
        icon="icon-youtube.svg"
        alternateText="Youtube Icon"
        hasFollowerGain={hasFollowerGain}
      />
    </div>
  );
}
