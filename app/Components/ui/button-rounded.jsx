import { ArrowUpIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
export function ButtonRounded({ onClick, className = "", ariaLabel = "Toggle menu" }) {
  return (
    <motion.div className="flex flex-col gap-8"   animate={{ y: [0, 5, 0] }} // Keyframes: top, high, top
    transition={{
      duration: 0.6,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeOut"
    }}>
      <Button
        type="button"
        onClick={onClick}
        aria-label={ariaLabel}
        variant="outline"
        size="icon"
        className={`h-12 w-12 rounded-full bg-black text-black ${className}`.trim()}
      >
        <ArrowUpIcon />
      </Button>
    </motion.div>
  )
}
