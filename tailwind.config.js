const animate = require("tailwindcss-animate");

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	safelist: ["dark"],
	prefix: "",

	theme: {
		container: {
			center: true,
			padding: "1.5rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			fontFamily: {
				primary: "var(--font-primary)",
			},
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					hover: "hsl(var(--primary-hover))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					hover: "hsl(var(--secondary-hover))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					hover: "hsl(var(--destructive-hover))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				destructiveSecondary: {
					DEFAULT: "hsl(var(--destructive-secondary))",
					hover: "hsl(var(--destructive-secondary-hover))",
					foreground: "hsl(var(--destructive-secondary-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
			},
			borderRadius: {
				xl: "calc(var(--radius) + 4px)",
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: 0 },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: 0 },
				},
				"collapsible-down": {
					from: { height: 0 },
					to: { height: "var(--radix-collapsible-content-height)" },
				},
				"collapsible-up": {
					from: { height: "var(--radix-collapsible-content-height)" },
					to: { height: 0 },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"collapsible-down": "collapsible-down 0.2s ease-in-out",
				"collapsible-up": "collapsible-up 0.2s ease-in-out",
			},
		},
	},
	plugins: [animate],
};
