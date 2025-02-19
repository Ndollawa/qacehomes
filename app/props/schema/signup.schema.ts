import * as z from "zod";
import { toTypedSchema } from "@vee-validate/zod";

/** Reusable Password Schema */
const passwordSchema = z
	.string()
	.min(8, { message: "Password must be at least 8 characters long" })
	.regex(/[a-z]/, {
		message: "Password must contain at least one lowercase letter",
	})
	.regex(/[A-Z]/, {
		message: "Password must contain at least one uppercase letter",
	})
	.regex(/[0-9]/, { message: "Password must contain at least one number" })
	.regex(/[^a-zA-Z0-9]/, {
		message: "Password must contain at least one special character",
	});

/** Base User Schema (Shared Fields) */
const baseUserSchema = z.object({
	email: z.string().email({ message: "Please enter a valid email" }),
	password: passwordSchema,
});

/** Project Manager Schema */
const projectManagerSchema = toTypedSchema(
	baseUserSchema.extend({
		fullname: z.string().min(3, { message: "Please enter your full name" }),
		company_name: z.string().min(3, { message: "Please enter company name" }),
		company_email: z
			.string()
			.email({ message: "Please enter a valid company email" }),
		company_size: z
			.string()
			.min(4, { message: "Please select company size" }),
	}),
);

/** Landlord Schema */
const landlordSchema = toTypedSchema(
	baseUserSchema.extend({
		first_name: z
			.string()
			.min(3, { message: "Please enter your first name" }),
		last_name: z.string().min(3, { message: "Please enter your last name" }),
	}),
);

export const signUpFormSchema = {
	projectManagerSchema,
	landlordSchema,
};
