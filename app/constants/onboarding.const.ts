import PropertyManagerImg from "@/assets/svgs/property-manager.svg";
import LandlordImg from "@/assets/svgs/landlord.svg";
import { AccountType } from "../enums";

const accountTypes = [
	{
		img: PropertyManagerImg,
		accountType: AccountType.PropertyManager,
		title: "Property Manager",
		description: "Handle multiple properties for different owners.",
	},
	{
		img: LandlordImg,
		accountType: AccountType.Landlord,
		title: "Landlord",
		description: "Manage your own property with ease.",
	},
];

export const onboardingConst = {
   accountTypes
};
