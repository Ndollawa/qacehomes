import type { AccountType } from "../enums";

export interface AccountTypeCardProps {
	src: string;
	role: AccountType;
	alt?: string;
	title: string;
	description: string;
   class?: string;
}
