export const getFormatedAmount = (amount) => {
    return new Intl.NumberFormat("hi-IN", { style: "currency", currency: "INR", maximumSignificantDigits: 3 }).format(amount);
};
