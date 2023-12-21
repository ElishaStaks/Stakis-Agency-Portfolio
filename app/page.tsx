import CallToAction from "@/components/CallToAction";
import HomeHero from "@/components/HomeHero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <HomeHero />
      <Work />
      <Testimonials />
      <Services />
      <CallToAction />
    </>
  )
}
