import moment from 'moment';
export const toLocalDate = (date: string | Date, format?: string) => {
    return moment(date).format(format || "D MMM YYYY");
};