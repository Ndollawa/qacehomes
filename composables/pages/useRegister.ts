import { AccountType } from "@/app/enums";
import { registerFormSchema } from "@/app/validators";
import { handleThrowError } from "@/app/utils";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";

export const useRegister = () => {
	useHead({
		title: "Register",
	});

	const route = useRoute();
	const { getValidationSchema } = registerFormSchema;
	const accountType = route.params.accountType as AccountType;

	// If account type is invalid, throw error
	onMounted(() => {
		if (!Object.values(AccountType).includes(accountType)) {
			handleThrowError("ERR_404");
		}
	});

	// Get Zod schema dynamically
	const zodSchema = getValidationSchema(accountType);

	// Init form with `toTypedSchema`
	const form = useForm({
		validationSchema: toTypedSchema(zodSchema), 
	});

	const onSubmit = form.handleSubmit((values) => {
		console.log("Form Submitted: ", values);
	});

	return {
		form,
		onSubmit,
		accountType,
		isPropertyManager: computed(() => accountType === AccountType.PropertyManager),
		isLandlord: computed(() => accountType === AccountType.Landlord),
	};
};
