import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await client.fetch(`
      *[_type == "resume"][0]{
        pdfFile {
          asset->{
            url,
            originalFilename
          }
        }
      }
    `);

    const url = data?.pdfFile?.asset?.url;
    const filename = data?.pdfFile?.asset?.originalFilename || "resume.pdf";

    if (!url) {
      return NextResponse.json({ error: "Resume not found" }, { status: 404 });
    }

    const response = await fetch(url);
    const buffer = await response.arrayBuffer();

    return new NextResponse(Buffer.from(buffer), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"`,
      },
    });
  } catch (err) {
    console.error("Error downloading resume:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
