"use client";
import SectionTypography from "./home/components/section-typography";
import SectionSkeleton from "./home/components/section-skeleton";
import { Header, Text } from "@citrica-ui";
import useHomeHooks from "./home/hooks/hooks-home";
import FormComponentsExample from "@/shared/components/examples/form-components-example";

export const dynamic = 'force-dynamic'

export default function Home() {
  const { ctaOnClick } = useHomeHooks();
  const logo = (
    <img
      src="/img/citrica-logo.png"
      alt="Citrica Logo"
      className="h-8 w-auto"
    />
  );

  return (
    <>
      <Header 
        logo={logo} 
        variant="basic" 
        showButton 
        buttonText="Hello" 
        onButtonClick={ctaOnClick}
      />
      <section className="pt-[80px]">
        <SectionTypography />
        <SectionSkeleton />
      </section>
      <section className="pt-[64px]">
        <FormComponentsExample />
      </section>
      <section className="pt-[64px]">
        <SectionTypography />
        <SectionSkeleton />
      </section>
    </>
  );
}