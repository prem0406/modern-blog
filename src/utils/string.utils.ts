/**
 * Capitalizes the first letter of a given string.
 * Handles empty strings and non-string inputs safely.
 * @param {string} str - The input string.
 * @returns {string} - String with the first letter capitalized.
 */
export function capitalizeFirstLetter(str: string) {
  if (typeof str !== "string") return "";
  if (str.length === 0) return "";

  return str.charAt(0).toUpperCase() + str.slice(1);
}
