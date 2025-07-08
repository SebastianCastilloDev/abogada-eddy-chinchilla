export const formatPhoneNumber = (phone: string) => {
  if (!phone) return '';
  const cleaned = phone.replace(/[^\d+]/g, '');
  if (cleaned.startsWith('+58') && cleaned.length === 13) {
    return `+58 (${cleaned.substring(3, 6)}) ${cleaned.substring(6, 9)}-${cleaned.substring(9)}`;
  }
  return phone;
};
