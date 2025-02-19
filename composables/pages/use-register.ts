import { AccountType } from "@/app/enums";
import { registerFormSchema } from "@/app/validators";
import { handleThrowError } from "@/app/utils";
import { useForm } from "vee-validate";

export const useRegister = () => {
	useHead({
		title: "Register",
	});

	const route = useRoute();
	const accountType = computed(() => route.params.accountType as AccountType);

	// If the account type mis-match the enums then error
	onMounted(() => {
		if (
			![AccountType.Landlord, AccountType.PropertyManager].includes(
				accountType.value,
			)
		) {
			handleThrowError("ERR_404");
		}
	});

   // TODO: Resole the error causing navigation failure below
	const form = useForm({
		validationSchema:
			accountType.value === AccountType.PropertyManager
				? registerFormSchema.projectManagerSchema
				: registerFormSchema.landlordSchema,
	});

	return { form, accountType };
};
