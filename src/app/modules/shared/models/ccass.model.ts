export interface HoldingModel {
    id: number;
    code: String;
    date: Date;
    Participant_id: string;
    Participant_name: string;
    Participant_addr: string;
    holding: number;
    holding_percent: number;
    is_cip: number
}

export interface StockModel {
    id: number;
    date: Date;
    code: string;
    sec_name: string;
    ashare: string;
}

export interface CcassDate {
    date: Date;
}

export interface stockInfo {
    id: number;
    yf_code: string;
    ccass_code: string;
    date: Date;
    short_name: string;
    long_name: string;
    currency: string;
    beta: number;
    market_cap: number;
    enter_val: number;
    shares_outstanding: number;
    shares_float: number;
    adv10: number;
    bid: number;
    ask: number;
}

export interface historicalInfo {
    id: string;
    yf_code: string;
    ccass_code: string;
    date: Date;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    dividends: number;
    splits: number;
}

export interface summary {
    id: string;
    code: string;
    date: Date;
    mi_holding: number;
    mi_count: number;
    mi_percent: number;
    cip_holding: number;
    cip_count: number;
    cip_percent: number;
    ncip_holding: number;
    ncip_count: number;
    ncip_percent: number;
    total_holding: number;
    total_count: number;
    total_percent: number;
    shares_outstanding: number;
    scrape_date: Date;
}

export class CcassConfigModel {
    url: string;
}
