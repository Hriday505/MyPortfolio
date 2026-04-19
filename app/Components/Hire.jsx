"use client";;
import { Lock, Search, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { NoiseBackgroundDemo } from "@/app/Components/ui/noise-button";
import { easeIn, motion } from "framer-motion";

export function  Hire({isdark = true}) {
  return (
    <ul
      className={`grid grid-cols-1 gap-4 ${isdark ? 'bg-[#d0d4db]' : 'bg-black'} px-4 py-8 sm:px-6 md:grid-cols-2 md:gap-5 md:px-8 xl:max-h-[34rem] xl:grid-cols-12 xl:grid-rows-2 xl:gap-4 xl:px-12 xl:py-12`}>
      <li className="list-none flex justify-center md:col-span-2 xl:ml-22 xl:mt-42 xl:block xl:[grid-area:1/1/2/5]">
        <NoiseBackgroundDemo />
      </li>


      <GridItem
        initial={{opacity:0, y:-100}} whileInView={{opacity:1,y:0}} transition={{delay:0.5,duration:0.4,easeIn}}
        area="md:col-span-1 xl:[grid-area:1/5/3/8]"
        icon={<Lock className="h-4 w-4 text-white" />}
        title="You should buy Aceternity UI Pro"
        description="It's the best money you'll ever spend" />
      <GridItem
        initial={{opacity:0, x:100}} whileInView={{opacity:1,x:0}} transition={{delay:0.5,duration:0.4,easeIn}}
        area="md:col-span-1 xl:[grid-area:1/8/2/12]"
        icon={<Sparkles className="h-4 w-4 text-white" />}
        title="This card is also built by Cursor"
        description="I'm not even kidding. Ask my mom if you don't believe me." />
      <GridItem
        initial={{opacity:0, y:100}} whileInView={{opacity:1,y:0}} transition={{delay:0.5,duration:0.4,easeIn}}
        area="md:col-span-2 xl:[grid-area:2/8/3/12]"
        icon={<Search className="h-4 w-4 text-white" />}
        title="Coming soon on Aceternity UI"
        description="I'm writing the code as I record this, no shit." />
    </ul>
  );
}

function GridItem({ area, icon, title, description, initial, whileInView , transition}) {
  return (
    <motion.li
      initial={initial}
      whileInView={whileInView}
      transition={transition}
      className={`min-h-[12rem] list-none md:min-h-[14rem] ${area}`}
     
    >
      
      <div  className="relative h-full rounded-2xl border border-white/20 bg-black/30 p-2 backdrop-blur-xl md:rounded-3xl md:p-3">
          
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01} />
        <div
          className="border-0.75 relative flex h-full flex-col justify-between gap-5 overflow-hidden rounded-xl border border-white/15 bg-white/8 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.24),inset_0_-1px_0_rgba(255,255,255,0.06),0_20px_45px_rgba(0,0,0,0.45)] backdrop-blur-2xl md:gap-6 md:p-6">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(10,10,10,0.86)_0%,rgba(24,24,27,0.78)_45%,rgba(38,38,42,0.72)_100%)]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(255,255,255,0.32),rgba(255,255,255,0.08),transparent)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.28),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.18),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.1),transparent_30%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_30%,transparent_70%,rgba(255,255,255,0.06))]" />
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-white/20 bg-white/10 p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-md">
              {icon}
            </div>
            <div className="space-y-3">
              <h3
                className="-tracking-4 pt-0.5 font-sans sm:text-lg/[1.5rem] text-[22px] font-semibold text-balance text-white sm:text-xl/[1.375rem] md:text-2xl/[1.875rem]">
                {title}
              </h3>
              <h2
                className="font-sans text-sm/[1.125rem] text-white/90 sm:text-[15px]/[1.2rem] text-[15px] md:text-base/[1.375rem] [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </motion.li>
  );
}
