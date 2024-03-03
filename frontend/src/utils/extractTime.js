export function extractTime(dataString){
    const data = new Date(dataString);
    const hours = padZero(data.getHours());
    const minutes = padZero(data.getMinutes());
    return `${hours}:${minutes}`;
}
// them so 0 vao truoc 1 so duong co 1 chu so ( dam bao so do luon co 2 chu so)
function padZero(number){
    return number.toString().padStart(2, "0");
}