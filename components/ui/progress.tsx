"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"


function Progress({
  className,
  value = 0,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {


  const [progress, setProgress] = React.useState(0);
  const [animated,setAnimated] = React.useState(false);
  const progressRef = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(()=>{

  const element = progressRef.current

  if(!element) return;


  const observer = new IntersectionObserver(([entry])=>{

      if(entry.isIntersecting && !animated){

          setProgress(value as any);
          setAnimated(true)
      }

  },{ threshold: 0.4 }

)


   observer.observe(element)

   return () => observer.disconnect()


  },[value,animated])


  return (
    <div  ref={ progressRef}>

      <ProgressPrimitive.Root
      data-slot="progress"  
      value={progress}
      className={cn(
        "relative flex h-2 w-full items-center rounded-full bg-muted",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
   
        data-slot="progress-indicator"
        className="h-full  bg-green-400 transition-all duration-4000 ease-out"
        
        style={{width:`${progress}%`}}
      />
    </ProgressPrimitive.Root>

    </div>

  )
}

export { Progress }
