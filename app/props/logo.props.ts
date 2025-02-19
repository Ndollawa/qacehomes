export interface LogoProps {
	src?:
		| "full-logo-blue"
		| "full-logo-white"
		| "logo-icon-blue"
		| "logo-icon-white";
	alt?: string;
	width?: string | number;
	height?: string | number;
	loading?: "eager" | "lazy";
	class?: string;
}
