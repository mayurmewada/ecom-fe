export const getFormatedAmount = (amount) => {
    return new Intl.NumberFormat("hi-IN", {
        style: "currency",
        currency: "INR",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(Number(amount));
};
export const getFormatedDate = (date) => {
    const formatedDate = new Date(date * 1000);
    return formatedDate.toLocaleString();
};
