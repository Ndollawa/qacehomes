import { generateRoute } from "@/app/constants";
import { onboardingConst } from "@/app/constants/onboarding.const";
import type { AccountType } from "@/app/enums";

export const useOnboarding = () => {
	const selectedAccount = shallowRef<AccountType | null>(null);

	const handleSelectedAccount = (accountType: AccountType) => {
		selectedAccount.value = accountType;
	};

	const handleGetStarted = () => {
		navigateTo(
			generateRoute("register", {
				accountType: selectedAccount.value!,
			}),
		);
	};

	return { onboardingConst, selectedAccount, handleSelectedAccount, handleGetStarted };
};
