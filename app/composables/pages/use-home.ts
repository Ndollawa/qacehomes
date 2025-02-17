export const useHome = () => {
	//  Navigate to onboarding. No landing page for now
	onMounted(() => {
		navigateTo("/onboarding");
	});

	const msg = "Welcome to Qace Homes";
	return { msg };
};
