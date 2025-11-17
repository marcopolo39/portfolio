export default function WorkExperienceCard({ data }) {
  return (
    <div className="bg-[var(--secondary)]/30 rounded-[25px] px-5 py-3 backdrop-blur-md border border-white/20 shadow-lg">
      <div className="text-[1.5rem] leading-none">{data.jobTitle}</div>
      <div className="flex justify-between text-[1.1rem] pb-2">
        <div>{data.company}</div>
        <div>{data.dates}</div>
      </div>
      <div>{data.description}</div>
    </div>
  );
}
