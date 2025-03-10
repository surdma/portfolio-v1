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
      <main className="flex items-center w-full overflow-hidden">
        <PageLayout className="pt-0">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 p-8">
            <div className="flex-1/3">
              <HeroImage />
            </div>
            <div className="flex-1/2">
              <div className="flex flex-col items-center self-center">
                <HeroText />
                <HeroButton />
                <HeroBulb />
              </div>
            </div>
          </div>
        </PageLayout>
        {/* <HireMe /> */}
      </main>
    </>
  );
}
