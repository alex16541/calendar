export const getCurrentMonth = () => new Date().getMonth();
export const getCurrentYear = () => new Date().getFullYear();
export const getMonthLength = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
};
export const getFormatedDate = (year: number, month: number) => {
    let m: number | string = month + 1;

    if (+m < 10) m = `0${m}`;

    return `${year}-${m}`;
};
