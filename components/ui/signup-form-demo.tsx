"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export default function SignupFormDemo({isdark= true}) {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [message,setMessage] = useState("");
  const [loading,setLoading] = useState(false); 



 async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  setLoading(true);

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    const text = await res.text();
    console.log("RAW RESPONSE:", text);

    let data;

    try {
      data = JSON.parse(text);
    } catch {
      console.error("Response is not JSON. Actual response:", text);
      alert("API did not return JSON. Check terminal error.");
      return;
    }

    if (!res.ok) {
      alert(data.error || "Failed to send message");
      return;
    }

    alert("Message sent successfully");

    setName("");
    setEmail("");
    setMessage("");
  } catch (error) {
    console.error("CONTACT_FORM_ERROR", error);
    alert("Something went wrong");
  } finally {
    setLoading(false);
  }
}


  return (
    <motion.div
     initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{duration: 0.8, ease: "easeInOut" }}
    className={`relative sm:mx-auto sm:w-full w-[85vw] md:-left-[0.4rem]   lg:-left-39 mb-6 left-7  mt-2 max-w-md overflow-hidden rounded-2xl border border-white/10    p-4 shadow-[0_25px_45px_rgba(0,0,0,0.35)] backdrop-blur-[18px] md:p-8`}>
      <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 opacity-80 blur-none" />
      <div className="pointer-events-none absolute -left-12 top-2/2 h-36 w-36 -translate-y-1/2 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 opacity-80 blur-none" />

      <div className={`pointer-events-none absolute inset-0 rounded-2xl ${isdark ? ' bg-[linear-gradient(135deg,rgba(255,255,255,0.18),rgba(255,255,255,0.06),rgba(255,255,255,0.02))]' : 'bg-[linear-gradient(135deg,rgba(30,30,30,0.35),rgba(20,20,20,0.18),rgba(10,10,10,0.08))]'}`} />
      <div className="pointer-events-none absolute left-1/2 top-0 h-24 w-3/4 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

      <div className="relative z-10">
        <h2 className={`text-[20px] text-center font-bold ${isdark ? 'text-white': 'text-black'} `}>
          Send your query
        </h2>

  
        <form className="my-8" onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
            <LabelInputContainer>
              <Label htmlFor="firstname" className={` ${isdark ? 'text-white': 'text-black'} text-md`}>
                Your name
              </Label>
           <Input
           id="firstname"
           placeholder="Your Name"
           type="text"
           value={name}
           onChange={(e)=>setName(e.target.value)}
           className={`border border-white/10 bg-white/5 ${
           isdark ? "text-white placeholder:text-white/70" : "text-black placeholder:text-black/70"
           } backdrop-blur-md focus-visible:ring-2 focus-visible:ring-white/20`}/>
            </LabelInputContainer>
          </div>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="email"  className={` ${isdark ? 'text-white': 'text-black'} text-md`}>
              Email Address
            </Label>
            <Input
              id="email"
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
              placeholder="Your Email"
              type="email"
              className={`border border-white/10 bg-white/5 ${
           isdark ? "text-white placeholder:text-white/70" : "text-black placeholder:text-black/70"
           } backdrop-blur-md focus-visible:ring-2 focus-visible:ring-white/20`}            />
          </LabelInputContainer>

          <LabelInputContainer className="mb-8">
            <Label htmlFor="twitterpassword" className={` ${isdark ? 'text-white': 'text-black'} text-md`}>
              Your Message
            </Label>
            <textarea
              id="twitterpassword"
              placeholder="Message"
              rows={4}
              value={message}
              onChange={(e)=> setMessage(e.target.value)}
              className={`w-full rounded-md border border-white/10 bg-white/5 p-3 ${
           isdark ? "text-white placeholder:text-white/70" : "text-black placeholder:text-black/70"
           }   shadow-[0_10px_25px_rgba(0,0,0,0.18)] backdrop-blur-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 disabled:cursor-not-allowed disabled:opacity-50`}
            />
          </LabelInputContainer>

          <button
            className={`group/btn relative block h-10 w-full overflow-hidden rounded-md border border-white/10 bg-white/10 text-[14px] font-medium  ${isdark ? 'text-white' : 'text-black' } shadow-[0_10px_25px_rgba(0,0,0,0.2)] backdrop-blur-md transition duration-300 hover:bg-white/15`}
            type="submit"
          >
            <span className={`relative z-10 cursor-pointer`}>{loading ? `Sending`: 'Send'}</span>
            <BottomGradient />
          </button> 

          <div className="flex flex-col space-y-4"></div>
        </form>
      </div>
    </motion.div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-400 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute left-[-120%] top-0 h-full w-[60%] skew-x-[-20deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.22),transparent)] transition-all duration-700 group-hover/btn:left-[130%]" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
