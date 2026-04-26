"use client";
import React from "react";
import Image from "next/image";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";


const content = [
  {
    title: "Frontend Development",
    description:
      "I build clean and responsive user interfaces using React, Next.js, JavaScript, TypeScript, and Tailwind CSS. I focus on layout, spacing, typography, mobile responsiveness, and smooth user experience.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-black  text-white">
        <Image src="/img/frontend.webp" alt="Frontend development preview" width={320} height={240} className="h-full w-full object-cover" />
      </div>
    ),
  },
  {
    title: "Business Websites",
    description:
      "I create professional websites for companies, services, and personal brands. My focus is on trust-building design, clear content structure, fast loading speed, and proper call-to-action sections.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-black  text-white">
        <Image src="/img/business.webp" alt="Business website preview" width={320} height={240} className="h-full w-full object-cover" />

      </div>
    ),
  },
  {
    title: "Admin Dashboards",
    description:"I develop dashboard interfaces for managing business data such as users, customers, reports, tasks, bookings, tickets, and daily operations. I focus on clean tables, filters, forms, and useful reports.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-black    text-white">
        <Image src="/img/fullstact.webp" alt="Full-stack application preview" width={320} height={240} className="h-full w-full object-cover" />
      </div>

    ),
  },
  {
    title: "Full-Stack Applications",
    description:"I work with Laravel, MySQL, REST APIs, and Next.js to build complete web applications with authentication, database operations, CRUD features, and role-based access.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-black  text-white">
        <Image src="/img/dashboard.webp" alt="Dashboard development preview" width={320} height={240} className="h-full w-full object-cover" />

      </div>
    ),

  },
];
export default function StickyScrollRevealDemo({ isdark = true }) {
  return (
    <div className="w-full py-4">
      <StickyScroll content={content} isdark={isdark} />
    </div>
  );
}
