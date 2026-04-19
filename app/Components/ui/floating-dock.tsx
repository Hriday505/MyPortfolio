"use client";
/**
 * Note: Use position fixed according to your needs
 * Desktop navbar is better positioned at the bottom
 * Mobile navbar is better positioned at bottom right.
 **/
import {ButtonRounded} from "@/app/Components/ui/button-rounded";
import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
 
import { useRef, useState } from "react";
 
export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
       
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};
 
const FloatingDockMobile = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn("relative block lg:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            className="
              absolute bottom-full left-1/2 mb-3 -translate-x-1/2
              w-[calc(100vw-2rem)]
              max-w-[90vw]
              sm:max-w-[34rem]
              md:max-w-[42rem]
              overflow-x-auto rounded-2xl p-4 md:p-5
              backdrop-blur-md
              [scrollbar-width:none]
              [-ms-overflow-style:none]
              [-webkit-overflow-scrolling:touch]
              touch-pan-x
            "
          >
            <div className="flex w-max min-w-full items-center justify-center gap-2 md:gap-3">
              {items.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{
                    opacity: 0,
                    y: 10,
                    transition: {
                      delay: idx * 0.05,
                    },
                  }}
                  transition={{ delay: (items.length - 1 - idx) * 0.05 }}
                  className="shrink-0"
                >
                  <a
                    href={item.href}
                    className="
                      flex items-center justify-center rounded-full
                      bg-[#171717]/60 dark:bg-neutral-900
                      h-12 w-12
                      sm:h-13 sm:w-13
                      md:h-14 md:w-14
                    "
                  >
                    <div className="h-7 w-7 md:h-8 md:w-8">{item.icon}</div>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ButtonRounded
        onClick={() => setOpen(!open)}
        ariaLabel={open ? "Close skills menu" : "Open skills menu"}
        className="mt-2  border-0 bg-gray-50 dark:bg-neutral-800"
      />
    </div>
  );
};
 
const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  let mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto w-[87vw] hidden h-16  items-end gap-4 rounded-2xl bg-[#171717]/50 backdrop-blur-md border border-white/10 px-28 pb-3 md:hidden lg:flex dark:bg-black/40 dark:backdrop-blur-md dark:border dark:border-white/10",
        className,
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};
 
function IconContainer({
  mouseX,
  title,
  icon,
  href,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
}) {
  let ref = useRef<HTMLDivElement>(null);
 
  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
 
    return val - bounds.x - bounds.width / 2;
  });
 
  let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
 
  let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  let heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20],
  );
 
  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
 
  let widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
 
  const [hovered, setHovered] = useState(false);
 
  return (
    <a href={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex aspect-square items-center justify-center rounded-full bg-[#171717]/500 dark:bg-black"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="absolute -top-8 left-1/2 w-fit rounded-md border border-gray-200 text-white px-2 py-0.5 text-xs whitespace-pre text-neutral-700 dark:border-neutral-900 dark:bg-neutral-800 dark:text-white"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
          
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center text-white"
        >
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
}
