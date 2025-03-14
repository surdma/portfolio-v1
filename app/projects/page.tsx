import AnimatedText from "@/components/animated-text";
import AuthModal from "@/components/auth-modal";
import PageTransistion from "@/components/page-transistion";
import PageLayout from "@/components/page_layout";

export default function Projects() {
  return (
    <>
      <PageTransistion />
      <main className="flex flex-col w-full min-h-screen mb-32">
        <PageLayout className="pt-16">
          <AnimatedText text="Imagination Trumps Knowledge!" className="p-6 !text-3xl md:!text-6xl" />

        </PageLayout>
      </main>

      <AuthModal />
    </>
  );
}
