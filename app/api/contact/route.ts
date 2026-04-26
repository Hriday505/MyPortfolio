import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { enforceRateLimit, getClientIp } from "@/lib/rate-limit";

export async  function POST(req:Request){

    try{
        const ip = getClientIp(req);
        const rateLimit = enforceRateLimit(`contact:${ip}`, 5, 60_000);

        if (!rateLimit.allowed) {
          return NextResponse.json(
            {
              success: false,
              error: "Too many requests. Please try again later.",
            },
            {
              status: 429,
              headers: { "Retry-After": String(rateLimit.retryAfterSeconds) },
            },
          );
        }


        const body = await req.json();

        const {name,email,message} = body;
        
       // Basic regex for email format check
       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        const trimmedName = typeof name === "string" ? name.trim() : "";
        const trimmedEmail = typeof email === "string" ? email.trim() : "";
        const trimmedMessage = typeof message === "string" ? message.trim() : "";

        if(!trimmedName || !trimmedEmail || !trimmedMessage){


        return NextResponse.json({error:"Name, email and message are required" },{status:400})

        }else if(!email || !emailRegex.test(trimmedEmail)){

         return new Response(JSON.stringify({ error: 'Invalid email format' }), {
         status: 400,
         });

        } else if (
          trimmedName.length > 100 ||
          trimmedEmail.length > 200 ||
          trimmedMessage.length > 5000
        ) {
          return NextResponse.json(
            { error: "Input is too long." },
            { status: 400 },
          );
        }


        await prisma.inquiry.create({
          data: {
            name: trimmedName,
            email: trimmedEmail,
            message: trimmedMessage,
          },
        })

        return NextResponse.json({success:true,meessage:'message send sucessfully'}, {status:201})
        


    } catch(error){

         console.error("CONTACT_API_ERROR", error);

       return NextResponse.json(
      { success: false, error: "Something went wrong" },
      { status: 500 });

    }

    
}
