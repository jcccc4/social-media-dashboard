import Header from "@/app/components/Headers";
import SocialMediaList from "@/app/components/SocialMediaList";
import Overview from "@/app/components/Overview";
export default function Home() {
    const hasFollowerGain = (netChange: number): boolean => {
      if (netChange >= 0) {
        return true;
      }
      return false;
    };
  return (
    <>
      <section className="bg-[#F7F9FF] absolute top-0 left-0 w-full h-[216px] rounded-b-[20px] -z-10 dark:bg-[#20222F]"></section>

      <main className="relative mt-9 mx-6 mb-[45px]">
        <Header />
        <SocialMediaList hasFollowerGain={hasFollowerGain} />
        <Overview hasFollowerGain={hasFollowerGain}/>
      </main>
    </>
  );
}
