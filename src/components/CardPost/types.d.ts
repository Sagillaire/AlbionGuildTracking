import { type Dayjs } from 'dayjs'

export interface ICardPost {
    title:              string;
    remaining:          IRemaining;
    handleModalRoute:   (id?: string) => void;
}

export interface IRemaining { 
    timeHour:           string;
    updatedAt:          string;
}
