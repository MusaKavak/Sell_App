export function getCurrentDate(): Date {
    return new Date();
}

export function getVaultFileName(date: Date = getCurrentDate()): string {
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
}

export function getVaultPathDesign(fileName: string): string {
    return "SellApp\\Vault\\" + fileName + "\\vault.txt";
}

export function getLongDate(filename: string) {
    const split = filename.split("-");

    const month = months[
        parseInt(split[1]) - 1
    ]

    return `${split[0]} ${month} ${split[2]}`
}

const months = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık"
]

