import Footer from "@/shared/components/citrica-ui/organism/footer";
import SectionTypography from "./home/components/section-typography";
import { Header } from "@citrica-ui";
import SectionSkeleton from "./home/components/section-skeleton";

export const dynamic = 'force-dynamic'

export default async function Home() {
  return (
    <>
      <Header />
      <section className="pt-[64px]">
        <SectionTypography />
        <SectionSkeleton />
      </section>
    </>
  );
}