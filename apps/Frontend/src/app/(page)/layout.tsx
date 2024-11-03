import PageContainer from "@/components/global/Page/Container"
import PageFooter from "@/components/global/Page/Footer"
import PageHeader from "@/components/global/Page/Header"


export default function PageLayout({
    children
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        <PageHeader/>
        <PageContainer className="bg-black">{children}</PageContainer>
        <PageFooter/>
      </section>
    )
  }