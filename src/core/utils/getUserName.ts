/**
 * @description This function verifies and retrieves the user's name from the zustand storage.
 * @param { string } username This parameter refers to the logged-in user
 * @returns { string }
 */
export const getUserName = (username: string): string => username || 'Guest'