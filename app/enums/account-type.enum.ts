/**
 * The account type of the user in the initial onboarding page
 *
 * @enum {string}
 * @property {string} PropertyManager - Represents a property manager who manages multiple properties.
 * @property {string} Landlord - Represents a landlord who owns and manages their own properties.
 */
export enum AccountType {
	PropertyManager = "property-manager",
	Landlord = "landlord",
}
