export interface CardDataType {
    id: string;
    balance: number;
    lastDeposit: string;
    lastUsed: string;
    cardType: "Normal" | "Preferencial";
}

export interface LastUsedType {
    lastUsed: string;
    route: string;
    cost: number;
}
