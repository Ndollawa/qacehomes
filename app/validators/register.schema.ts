import * as z from "zod";
import { AccountType } from "../enums";

/** Reusable Password Schema */
const passwordErrorMsg =
	"Try a stronger password with the guidelines provided.";
const passwordSchema = z
	.string({
		required_error: "Password is required",
	})
	.superRefine((password, ctx) => {
		if (password.length < 8) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: passwordErrorMsg,
			});
		}
		if (!/[a-z]/.test(password)) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: passwordErrorMsg,
			});
		}
		if (!/[A-Z]/.test(password)) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: passwordErrorMsg,
			});
		}
		if (!/[0-9]/.test(password)) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: passwordErrorMsg,
			});
		}
		if (!/[^a-zA-Z0-9]/.test(password)) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: passwordErrorMsg,
			});
		}
	});

/** Base User Schema (Shared Fields) */
const baseUserSchema = z.object({
	email: z
		.string({
			required_error: "Email is required",
		})
		.email({ message: "Please enter a valid email" }),
	password: passwordSchema,
});

/** Project Manager Schema */
const projectManagerSchema = baseUserSchema.extend({
	full_name: z
		.string({
			required_error: "Full name is required",
		})
		.min(3, { message: "Please enter your full name" }),
	company_name: z
		.string({
			required_error: "Company name is required",
		})
		.min(3, { message: "Please enter company name" }),
	company_email: z
		.string({
			required_error: "Company email is required",
		})
		.email({ message: "Please enter a valid company email" }),
	company_size: z
		.string({
			required_error: "Company size is required",
		})
		.min(1, { message: "Please select company size" }),
});

/** Landlord Schema */
const landlordSchema = baseUserSchema.extend({
	first_name: z
		.string({
			required_error: "First name is required",
		})
		.min(3, { message: "Please enter your first name" }),
	last_name: z
		.string({
			required_error: "Last name is required",
		})
		.min(3, { message: "Please enter your last name" }),
});

export const registerFormSchema = {
	projectManagerSchema,
	landlordSchema,

	/**
	 * Get the validation schema dynamically based on the account type.
	 *
	 * @param {AccountType} accountType - The account type (either "PropertyManager" or "Landlord").
	 * @returns {ZodSchema} - The corresponding Zod validation schema.
	 * @throws {Error} If the account type is invalid.
	 */
	getValidationSchema: (accountType: AccountType) => {
		switch (accountType) {
			case AccountType.PropertyManager:
				return projectManagerSchema;
			case AccountType.Landlord:
				return landlordSchema;
			default:
				throw new Error("Invalid account type");
		}
	},
};
