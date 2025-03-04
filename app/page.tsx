import HeroBulb from "@/components/home/hero-bulb";
import HeroButton from "@/components/home/hero-button";
import HeroImage from "@/components/home/hero-image";
import HeroText from "@/components/home/hero-text";
import PageTransistion from "@/components/page-transistion";
import PageLayout from "@/components/page_layout";

export default function Home() {
  return (
    
   <>
   <PageTransistion />
    <main className="flex items-center w-full ">
      <PageLayout className="pt-0">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-1/2">
            <HeroImage />
          </div>
          <div className="w-1/2 flex flex-col items-center self-center">
            <HeroText />
            <HeroButton />
            <HeroBulb />
          </div>
        </div>
       
      </PageLayout>
      {/* <HireMe /> */}
    </main>
   </>
  );
}
