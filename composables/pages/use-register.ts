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
		if (
			![AccountType.Landlord, AccountType.PropertyManager].includes(
				accountType,
			)
		) {
			handleThrowError("ERR_404");
		}
	});

	// Get validation schema dynamically
	const validationSchema = getValidationSchema(accountType);

	// Init form
	const form = useForm({ validationSchema });

	// Conditionally show fields
	const isPropertyManager = computed(
		() => accountType === AccountType.PropertyManager,
	);
	const isLandlord = computed(() => accountType === AccountType.Landlord);

	const onSubmit = form.handleSubmit((values) => {
		console.log("Form Submitted: ", values);
	});

	return {
		form,
		onSubmit,
		accountType,
		validationSchema,
		isPropertyManager,
		isLandlord,
	};
};
