import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

export { default as Button } from "./Button.vue";

export const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
	{
		variants: {
			variant: {
				default:
					"bg-primary text-primary-foreground hover:bg-primary-hover",
				destructive:
					"bg-destructive text-destructive-foreground hover:bg-destructive-hover",
				destructiveSecondary:
					"bg-destructiveSecondary text-destructiveSecondary-foreground hover:bg-destructiveSecondary-hover",
				outline:
					"border border-input bg-background hover:bg-accent hover:text-accent-foreground",
				secondary:
					"bg-secondary text-secondary-foreground hover:bg-secondary-hover",
				ghost: "hover:bg-accent hover:text-accent-foreground",
				link: "text-primary underline-offset-4 hover:underline",
			},
			size: {
				default: "py-2.5 rounded-md px-10",
				sm: "h-8 rounded-md px-3 text-xs",
				md: "h-9 px-4 py-2",
				icon: "h-9 w-9",
			},
			disabled: {
				true: "pointer-events-none bg-muted text-muted-foreground",
				false: "",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
			disabled: false,
		},
	},
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
