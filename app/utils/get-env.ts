/**
 * @param key {string} - the environment key from the .env file
 * @param defaultValue {null} - the default key if the value dont exists
 * @returns {string}
 */
export const getENV = (key: string, defaultValue = null) =>
	import.meta.env[key] || defaultValue;
