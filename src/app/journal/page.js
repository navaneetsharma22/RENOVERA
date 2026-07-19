import { ComingSoonPage } from "@/components/coming-soon";

export const metadata = {
  title: "Coming Soon | Renovera",
  description: "This page is currently under development and will be available soon.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function JournalPage() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <ComingSoonPage />
    </main>
  );
}
