export default function capitalize(str: string): string {
    let ini = str.charAt(0).toUpperCase();

    return str.replace(str[0], ini);
}