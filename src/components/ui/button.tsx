import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean
    variant?: "default" | "outline" | "ghost" | "link" | "white"
    size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"

        // Premium styling: rounded-full by default for modern look, uppercase tracking-wide
        const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 tracking-wide"

        const variants = {
            default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md",
            white: "bg-white text-primary hover:bg-white/90 shadow-md",
            outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground border-white/20 text-white",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline",
        }

        const sizes = {
            default: "h-11 px-6 py-2",
            sm: "h-9 rounded-full px-4",
            lg: "h-12 rounded-full px-8 text-base",
            icon: "h-10 w-10",
        }

        return (
            <Comp
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, cn }
