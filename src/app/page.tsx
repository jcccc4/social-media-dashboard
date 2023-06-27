import Header from "@/app/components/Headers";
import SocialMedia from "@/app/components/SocialMedia";
export default function Home() {
  return (
    <>
      <section className="bg-[#F7F9FF] absolute top-0 left-0 w-full h-[216px] rounded-b-[20px] -z-10 dark:bg-[#20222F]"></section>

      <main className="relative mt-9 m-6 x-6 mb-[45px] ">
        <Header />
        <SocialMedia border={"bg-[#178FF5]"} username={'@nathanf'} followerCount={'1987'} followerNetChange={12} description={'FOLLOWERS'} icon={'icon-facebook.svg'}/>
        <SocialMedia border={"bg-[#1DA1F2]"} username={'@nathanf'} followerCount={'1044'} followerNetChange={99} description={'FOLLOWERS'} icon={'icon-twitter.svg'}/>
        <SocialMedia border={"bg-gradient-to-l from-[#DF4896] via-[#EE877E] to-[#FDC366]"} username={'@realnathanf'} followerCount={'11k'} followerNetChange={1099} description={'FOLLOWERS'} icon={'icon-instagram.svg'}/>
        <SocialMedia border={"bg-[#C4032B]"} username={'Nathan F.'} followerCount={'82349'} followerNetChange={99} description={'SUBSCRIBERS'} icon={'icon-instagram.svg'}/>

        {/* @nathanf 1044 Followers 99 Today @realnathanf 11k
      Followers 1099 Today Nathan F. 8239 Subscribers 144 Today  */}
        <h1>Overview - Today</h1>
        <section>
          <section>Page Views</section>
          <section> 3% </section>
          <section>87</section>
        </section>

        {/* Likes 52 2% Likes 5462 2257% Profile Views 52k 1375%
      Retweets 117 303% Likes 507 553% Likes 107 19% Total Views 1407 12% */}
      </main>
    </>
  );
}
