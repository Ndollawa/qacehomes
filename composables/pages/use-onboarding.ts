import { onboardingConst } from "@/app/constants/onboarding.const";
import type { AccountType } from "@/app/enums";

export const useOnboarding = () => {
	const selectedAccount = shallowRef<AccountType | null>(null);

	const setSelectedAccount = (accountType: AccountType) => {
		selectedAccount.value = accountType;
	};

   // ✅ Debugging: Watch for changes
	watchEffect(() => {
		console.log("Updated selectedAccount:", selectedAccount.value);
	});


	return { onboardingConst, selectedAccount, setSelectedAccount };
};
