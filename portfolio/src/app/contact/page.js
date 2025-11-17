import Navbar from "@/components/Navbar";

export default function Contact() {
  return (
    <div className="flex justify-center w-full">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen pt-25 px-4">
        <div className="bg-[var(--secondary)]/30 backdrop-blur-md rounded-[25px] px-8 py-6 border border-white/20 shadow-lg">
          <div className="text-[3rem] text-center mb-2">Coming Soon!</div>
        </div>
      </div>
    </div>
  );
}
