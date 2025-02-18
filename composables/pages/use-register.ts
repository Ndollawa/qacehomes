import { AccountType } from "@/app/enums";
import { registerSchema } from "@/app/props/schema";
import { handleThrowError } from "@/app/utils";

export const useRegister = () => {
	useHead({
		title: "Register",
	});

	const { accountType } = useRoute().params;

	// If the account type mis-match the enums then error
	onMounted(() => {
		if (
			accountType !== AccountType.Landlord &&
			accountType !== AccountType.PropertyManager
		) {
			handleThrowError("ERR_404");
		}
	});
   
	console.log(accountType);

	return {};
};
