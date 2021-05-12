export const htmlDecode = (text: string): string => {
    return !text ? text : String(text).replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&quot;/g, '"').replace(/&amp;/g, "&");
}

export const htmlEncode = (text: string): string => {
    return !text ? text : String(text).replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;").replace(/'/g, "&quot;");
}