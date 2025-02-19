import { generateRoute } from "@/app/constants/route-const";

export const useHome = () => {
	//  Navigate to onboarding. No landing page for now
	onMounted(() => {
		navigateTo(generateRoute("onboarding"));
	});

	const msg = "Welcome to Qace Homes";
	return { msg };
};
