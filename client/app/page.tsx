// import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
// import { AppSidebar } from "@/components/ui/app-sidebar"

// export default function Layout({ children }: { children: React.ReactNode }) {
//   return (
//     <SidebarProvider>
//       <AppSidebar />
//       <main>
//         <SidebarTrigger />
//         {children}
//       </main>
//     </SidebarProvider>
//   )
// }

'use client';

import { useEffect, useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";

const QuickSightEmbed = () => {
    const [embedUrl, setEmbedUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchEmbedUrl = async () => {
            try {
                const response = await fetch("http://localhost:5000/get-quicksight-url");
                const data = await response.json();
                if (response.ok && data.embedUrl) {
                    setEmbedUrl(data.embedUrl);
                } else {
                    setError("Failed to load the QuickSight dashboard.");
                }
            } catch (err) {
                setError("Error fetching QuickSight URL: " + (err instanceof Error ? err.message : "Unknown error"));
            } finally {
                setLoading(false);
            }
        };

        fetchEmbedUrl();
    }, []);

    return (
        <div>
            {loading && <p>Loading Dashboard...</p>}
            {error && <p>{error}</p>}
            {embedUrl && !loading && !error && (
                <iframe
                    title="QuickSight Dashboard"
                    width="100%"
                    height="600"
                    src={embedUrl}
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
            )}
        </div>
    );
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        <div>
          {children}
        </div>
        {/* Embed the QuickSight dashboard within the layout */}
        <QuickSightEmbed />
      </main>
    </SidebarProvider>
  );
}

