export interface Sport {
    id: number,
    sport_title: string,
    gold: string,
    silver: string,
    bronze: string
}

export interface Country {
    id: number,
    country: string,
    desc: string;
    img: string;
    gold: number;
    silver: number;
    bronze: number;
    total: number;
    sport_list: SportList[];
}

export interface SportList {
    sport_list: string,
    medal_type: string
}

export interface SportState {
    sport: Sport | null
}

export interface Comment {
    id: number,
    author: string,
    comment: string
}
