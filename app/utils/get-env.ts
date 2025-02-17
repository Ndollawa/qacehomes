export const getENV = (key: string, defaultValue = null) =>
	import.meta.env[key] || defaultValue;
