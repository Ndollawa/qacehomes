import {
	JaFillHome,
	BxSolidBriefcase,
	IcSolidReports,
	HiSolidUsers,
	AnFilledBank,
	BxSolidHelpCircle,
	AnTwotoneSetting
} from "@kalimahapps/vue-icons";
// This is sample data.

export const links = {
	user: {
		name: "Ndollawa",
		email: "ndollawa@yahoo.com",
		avatar: "/avatars/shadcn.jpg",
		initials: "NO",
	},
	dashboard:{},
	navMain: [
		{
			groupLabel: "Features",
			menus: [
				{
					title: "Properties",
					url: "#",
					icon: JaFillHome,
					isActive: true,
				},
				{
					title: "Portfolio",
					url: "#",
					icon: BxSolidBriefcase,
				},
				{
					title: "User",
					url: "#",
					icon: HiSolidUsers,
				},
				{
					title: "Report",
					url: "#",
					icon: IcSolidReports,
				},
				
			],
		},
		{
			groupLabel: "General",
			menus: [
				{
					title: "Billing",
					url: "#",
					icon: AnFilledBank,
					isActive: true,
				},
				{
					title: "Help",
					url: "#",
					icon: BxSolidHelpCircle,
				},
				
				{
					title: "Settings",
					url: "#",
					icon: AnTwotoneSetting,
				},
			
			],
		},
	],
};
