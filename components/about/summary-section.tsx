export default function SummarySection() {
  return (
    <div className="col-span-3 flex flex-col items-start justify-start">
      <h2 className="mb-4 text-lg font-bold uppercase text-black/75">
        Summary
      </h2>

      <SummaryText
        text={`Hi, I'm Surdma, a web developer and UI/UX designer with a
        passion for creating beautiful, functional, and user-centered
        digital experiences. With 4 years of experience in the field. I
        am always looking for new and innovative ways to bring my
        clients' visions to life.`}
      />

      <SummaryText
        text={`I believe that design is about more than just making things look
        pretty. it's about solving problems and creating intuitive,
        enjoyable experiences for users.`}
      />

      <SummaryText
        text={`Whether I'm working on a website, mobile app, or other digital
        product, I bring my commitment to design excellence and
        user-centered thinking to every project I work on. I look
        forward to the opportunity to bring my skills and passion to
        your next project.`}
      />
    </div>
  );
}
const SummaryText: React.FC<{ text: string }> = ({ text }) => (
  <p className="font-medium my-2">{text}</p>
);
