export interface HoldingModel {
    id: Number;
    code: String;
    date: Date;
    Participant_id: string;
    Participant_name: string;
    Participant_addr: string;
    holding: Number;
    holding_percent: Number;
    is_cip: Number
}

export interface StockModel {
    id: Number;
    date: Date;
    code: string;
    sec_name: string;
    ashare: string;
}

export interface UserModel {
    name: string;
    uuid: string;
    email: string;
    picture_url?: string;
    type: string;
    metadata?: any;
}

export interface CcassDate {
    date: Date;
}

export interface stockInfo {
    id: Number;
    yf_code: string;
    ccass_code: string;
    date: Date;
    short_name: string;
    long_name: string;
    currency: string;
    beta: Number;
    market_cap: Number;
    enter_val: Number;
    shares_outstanding: Number;
    shares_float: Number;
    adv10: Number;
    bid: Number;
    ask: Number;
}

export interface historicalInfo {
    id: string;
    yf_code: string;
    ccass_code: string;
    date: Date;
    open: Number;
    high: Number;
    low: Number;
    close: Number;
    volume: Number;
    dividends: Number;
    splits: Number;
}

export interface summary {
    id: string;
    code: string;
    date: Date;
    mi_holding: Number;
    mi_count: Number;
    mi_percent: Number;
    cip_holding: Number;
    cip_count: Number;
    cip_percent: Number;
    ncip_holding: Number;
    ncip_count: Number;
    ncip_percent: Number;
    total_holding: Number;
    total_count: Number;
    total_percent: Number;
    shares_outstanding: Number;
    scrape_date: Date;
}

export class CcassConfigModel {
    url: string;
}
