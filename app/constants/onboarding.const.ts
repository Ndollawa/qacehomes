import PropertyManagerImg from "@/assets/svgs/property-manager.svg";
import LandlordImg from "@/assets/svgs/landlord.svg";
import { UserType } from "../enums";

const accountTypes = [
	{
		img: PropertyManagerImg,
		accountType: UserType.PropertyManager,
		title: "Property Manager",
		description: "Handle multiple properties for different owners.",
	},
	{
		img: LandlordImg,
		accountType: UserType.Landlord,
		title: "Landlord",
		description: "Manage your own property with ease.",
	},
];

export const onboardingConst = {
   accountTypes
};
