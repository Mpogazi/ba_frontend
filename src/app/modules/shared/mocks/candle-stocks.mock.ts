export interface Candle {
    date: Date;
    open: number;
    high: number;
    low: number;
    close: number;
}

export const CANDLES: Candle[] = [
    { date: new Date('2008-05-14'), open: 7.673,  high:  7.673,  low: 7.673,  close: 7.673  },
    { date: new Date('2008-05-15'), open: 7.4801, high:  7.5356, low: 7.3532, close: 7.4224 },
    { date: new Date('2008-05-16'), open: 7.3829, high:  7.6759, low: 7.3829, close: 7.6681 },
    { date: new Date('2008-05-19'), open: 7.6289, high:  7.6681, low: 7.3829, close: 7.4824 },
    { date: new Date('2008-05-20'), open: 7.4764, high:  7.5988, low: 7.3898, close: 7.4224 },
    { date: new Date('2008-05-21'), open: 7.3943, high:  7.4565, low: 7.3796, close: 7.3829 },
    { date: new Date('2008-05-22'), open: 7.3156, high:  7.4384, low: 7.2888, close: 7.2888 },
    { date: new Date('2008-05-23'), open: 7.3111, high:  7.3446, low: 7.2888, close: 7.307  },
    { date: new Date('2008-05-27'), open: 7.307,  high:  7.4635, low: 7.2888, close: 7.3255 },
    { date: new Date('2008-05-28'), open: 7.3302, high:  7.4353, low: 7.135,  close: 7.3829 },
    { date: new Date('2008-05-29'), open: 7.3031, high:  7.6322, low: 7.2888, close: 7.5563 },
    { date: new Date('2008-05-30'), open: 7.6022, high:  7.6136, low: 7.4021, close: 7.5563 },
    { date: new Date('2008-06-02'), open: 7.5525, high:  7.5799, low: 7.4713, close: 7.5197 },
    { date: new Date('2008-06-03'), open: 7.5399, high:  7.6136, low: 7.307,  close: 7.3156 },
    { date: new Date('2008-06-04'), open: 7.2957, high:  7.41,   low: 7.2957, close: 7.3255 },
    { date: new Date('2008-06-05'), open: 7.3339, high:  7.4801, low: 7.2987, close: 7.4136 },
    { date: new Date('2008-06-06'), open: 7.3874, high:  7.3874, low: 7.2957, close: 7.2957 },
    { date: new Date('2008-06-09'), open: 7.3446, high:  7.3829, low: 7.2888, close: 7.2888 },
    { date: new Date('2008-06-10'), open: 7.2888, high:  7.3111, low: 6.4476, close: 6.981  },
    { date: new Date('2008-06-11'), open: 6.981,  high:  6.981,  low: 5.8689, close: 6.5785 },
    { date: new Date('2008-06-12'), open: 6.6206, high:  6.6356, low: 6.3675, close: 6.6097 },
    { date: new Date('2008-06-13'), open: 6.6125, high:  6.6125, low: 6.4247, close: 6.544  },
    { date: new Date('2008-06-16'), open: 6.4136, high:  6.8881, low: 6.3486, close: 6.8276 },
    { date: new Date('2008-06-17'), open: 6.8657, high:  6.9085, low: 6.57,   close: 6.8547 },
    { date: new Date('2008-06-18'), open: 6.7889, high:  6.8728, low: 6.3716, close: 6.5357 },
    { date: new Date('2008-06-19'), open: 6.544,  high:  6.5899, low: 6.3675, close: 6.4751 },
    { date: new Date('2008-06-20'), open: 6.4136, high:  6.5131, low: 6.2373, close: 6.3789 },
    { date: new Date('2008-06-23'), open: 6.3866, high:  6.938,  low: 6.3789, close: 6.8657 },
    { date: new Date('2008-06-24'), open: 6.8082, high:  6.8657, low: 6.57,   close: 6.8125 },
    { date: new Date('2008-06-25'), open: 6.8728, high:  6.9109, low: 6.7701, close: 6.8276 },
    { date: new Date('2008-06-26'), open: 6.8504, high:  6.9109, low: 6.5979, close: 6.6014 },
    { date: new Date('2008-06-27'), open: 6.6356, high:  6.7781, low: 6.4476, close: 6.5628 },
    { date: new Date('2008-06-30'), open: 6.5131, high:  6.896,  low: 6.3289, close: 6.3826 },
    { date: new Date('2008-07-01'), open: 6.1793, high:  6.4205, low: 6.0028, close: 6.29   }
];
