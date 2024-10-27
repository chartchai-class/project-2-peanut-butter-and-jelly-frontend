export interface Sport {
  id: number
  title: string
  gold: SportCountry
  silver: SportCountry
  bronze: SportCountry
}

export interface SportCountry {
  id: number
  countryName: string
  desc: string
  img: string
  amountGold: number
  amountSilver: number
  amountBronze: number
  total: number
  firstOlympicAppearance: string
  numberOfOlympicsParticipatedIn: number
}

export interface Country {
  id: number
  countryName: string
  desc: string
  img: string
  amountGold: number
  amountSilver: number
  amountBronze: number
  total: number
  firstOlympicAppearance: string
  numberOfOlympicsParticipatedIn: number
  goldMedals: SportList[]
  silverMedals: SportList[]
  bronzeMedals: SportList[]
}

export interface SportList {
  id: number
  title: string
}

export interface SportState {
  sport: Sport | null
}

export interface CountryState {
  country: Country | null
}

export interface Comment {
  id: number
  author: string
  message: string
}

export interface CommentUser {
  id: number,
  username: string,
  role: string
}

export interface MessageState {
  message: string
  messageType: 'success' | 'error' | '';
}
export interface Page {
  pageOfNumber: number;
}

export interface User{
  id: number
  username: string
  email: string
  password: string
  roles: string[]
}

export interface UserState{
  user: User | null
}
export interface CountryInfo {
  id: number;
  countryName: string;
  description: string;
  flag: string;
  // sports: string[]; 
}
export enum MedalType{
  GOLD = "gold",
  SILVER = "silver",
  BRONZE = "bronze"
}

export interface SportsInfo{
  id: number;
  sportName: string,
  eventCategory: string,
  medalType: MedalType.GOLD,
  medalCount: number;
}

