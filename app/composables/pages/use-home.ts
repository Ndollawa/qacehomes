import { generateRoute } from "@/app/utils/generate-route";

export const useHome = () => {
	//  Navigate to onboarding. No landing page for now
	onMounted(() => {
		navigateTo(generateRoute("onboarding"));
	});

	const msg = "Welcome to Qace Homes";
	return { msg };
};
