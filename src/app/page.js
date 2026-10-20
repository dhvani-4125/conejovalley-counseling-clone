import fs from "node:fs";
import path from "node:path";
import Script from "next/script";

export default function HomePage() {
  const contentPath = path.join(process.cwd(), "src/app/content.html");
  const content = fs.readFileSync(contentPath, "utf8");
  return (
    <main className="min-h-screen">
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <Script src="/site.js" strategy="afterInteractive" />
    </main>
  );
}
