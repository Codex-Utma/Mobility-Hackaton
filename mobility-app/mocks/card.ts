import { CardDataType } from "@/types/Card";

export const cardDataMock: CardDataType = {
    id: "0A-1B-2C-3D",
    balance: 55.55,
    lastDeposit: "2021-01-01",
    lastUsed: "2021-01-01",
    cardType: "Normal",
};

import { LastUsedType } from "@/types/Card";

export const lastUsesMocks: LastUsedType[] = [
    {
        lastUsed: "2021-01-01",
        route: "Ruta 1",
        cost: 5.25,
    },
    {
        lastUsed: "2021-01-02",
        route: "Ruta 2",
        cost: 10.5,
    },
    {
        lastUsed: "2021-01-03",
        route: "Ruta 3",
        cost: 10.50,
    },
    {
        lastUsed: "2021-01-04",
        route: "Ruta 4",
        cost: 5.25,
    },
    {
        lastUsed: "2021-01-05",
        route: "Ruta 5",
        cost: 10.5,
    }
];
