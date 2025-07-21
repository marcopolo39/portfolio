"use client";
import { useState } from "react";
import { Download } from "lucide-react";

export default function ResumeDownloadButton() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDownload = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/resume");
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to fetch resume");
      }

      // Get filename from Content-Disposition header
      const disposition = res.headers.get("Content-Disposition");
      let filename = "resume.pdf";
      if (disposition && disposition.includes("filename=")) {
        filename = disposition.split("filename=")[1].replace(/"/g, "").trim();
      }

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error(err);
      setError("Unable to download resume");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      className="flex gap-3 px-4 py-1.5 rounded-[15px] bg-[var(--primary)] text-[var(--secondary)] cursor-pointer hover:bg-[var(--primary)]/95"
      disabled={loading}
    >
      <Download />
      <span>Download Resume</span>
    </button>
  );
}
