import PageContainer from "@/components/global/Page/Container";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <PageContainer className="bg-black">{children}</PageContainer>
    </section>
  );
}
