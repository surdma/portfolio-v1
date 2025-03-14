import AchievementText from "./achievement-text";
import ProfileSection from "./profile-section";
import SummarySection from "./summary-section";

export default function BioSection() {
  return (
    <div className="flex flex-col md:grid md:grid-cols-8 w-full gap-16">
      <SummarySection />
      <ProfileSection />
      <div className="col-span-2 flex flex-row md:flex-col items-end justify-between">
        <AchievementText stat={10} comment="satiisfied clients" />
        <AchievementText stat={30} comment="project completed" />
        <AchievementText stat={4} comment="years of experience" />
      </div>
    </div>
  );
}
