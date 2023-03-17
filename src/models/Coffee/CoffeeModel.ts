import { ObjectId } from 'mongodb';

export type Coffee = {
    _id: ObjectId;
    Id: number;
    Acidity: number;
    Aftertaste: number;
    Altitude: string;
    Aroma: number;
    Balance: number;
    Body: number;
    Color: string | undefined;
    Company: string | undefined;
    Country: { Of: { Origin: string } };
    Cupper: { Points: number };
    Flavor: number;
    Harvest: { Year: string };
    Moisture: number;
    Owner: Array<string> | string | null;
    Producer: string | undefined;
    Region: string | undefined;
    Sweetness: number;
    Total: { Cup: { Points: number } };
    Uniformity: number;
    Variety: string | undefined;
};
