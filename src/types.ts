export interface Sport {
    id: number,
    sport_title: string,
    gold: string,
    silver: string,
    bronze: string
}

export interface SportState {
    sport: Sport | null
}