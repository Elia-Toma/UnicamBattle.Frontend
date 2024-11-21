
import { parse, format, parseISO } from 'date-fns';
export function parseDate(date: string): Date | null {
    if (date) {
        const parsedDate = parse(date, "yyyy-MM-dd'T'HH:mm:ss", new Date());
        return parsedDate;
    }
    return null;
}
export function toString(date: Date): string {
    const formattedDate = format(date, "yyyy-MM-dd'T'HH:mm:ss");
    return formattedDate;
}

export function formatDate(date: Date, formatToUse: string): string {
    const formattedDate = format(date, formatToUse);
    return formattedDate;
}


const ISODateFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d*)?(?:[-+]\d{2}:?\d{2}|Z)?$/;
const isIsoDateString = (value: unknown): value is string => {
    return typeof value === "string" && ISODateFormat.test(value);
};

export function handleDates(data: any) {
    if (isIsoDateString(data)) return parseISO(data);
    if (data === null || data === undefined || typeof data !== "object") return data;
    for (const [key, val] of Object.entries(data)) {

        if (isIsoDateString(val)) data[key] = parseISO(val);
        else if (typeof val === "object") handleDates(val);
    }
    return data
};