import Footer from "@/shared/components/citrica-ui/organism/footer";
import SectionTypography from "./components/section-typography";
import Header from "@ui/organism/header";
import SectionSkeleton from "../home/components/section-skeleton";

export const dynamic = 'force-dynamic'

export default async function Home() {
  return (
    <>
      <Header />
      <section>
        <SectionTypography />
        <SectionSkeleton />
      </section>
    </>
  );
}