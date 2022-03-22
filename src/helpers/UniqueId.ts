export const uniqueId = (): string => '_' + Math.floor((1 + Math.random()) * 0x10000).toString(36).substring(1);
