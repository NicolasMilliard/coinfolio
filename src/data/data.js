import React from 'react'
import { SiBitcoin, SiEthereum } from 'react-icons/si'
import { BiPieChart, BiCoin, BiListUl, BiTrendingUp, BiCalendar } from 'react-icons/bi'
import { RiTodoLine } from 'react-icons/ri'
import { BsTextLeft } from 'react-icons/bs'

export const links = [
    {
        title: 'Dashboard',
        links: [
            {
                name: 'portfolio',
                icon: <BiPieChart />,
                link: 'portfolio'
            },
        ],
    },
    {
        title: 'Pages',
        links: [
            {
                name: 'crypto',
                icon: <BiCoin />,
                link: 'crypto'
            },
            {
                name: 'watchlist',
                icon: <BiListUl />,
                link: 'watchlist'
            },
            {
                name: 'trending',
                icon: <BiTrendingUp />,
                link: 'trending'
            },
        ],
    },
    {
        title: 'Live Charts',
        links: [
            {
                name: 'BTC-USD',
                icon: <SiBitcoin />,
                link: 'btc-usd'
            },
            {
                name: 'ETH-USD',
                icon: <SiEthereum />,
                link: 'eth-usd'
            }
        ],
    },
    {
        title: 'Tools',
        links: [
            {
                name: 'calendar',
                icon: <BiCalendar />,
                link: 'calendar'
            },
            {
                name: 'todo list',
                icon: <RiTodoLine />,
                link: 'todo-list'
            },
            {
                name: 'notes',
                icon: <BsTextLeft />,
                link: 'notes'
            },
        ],
    },
]

export const lineChartData = [
    [
        { x: new Date(2022, 6, 25), y: 9864.58 },
        { x: new Date(2022, 6, 26), y: 10221.63 },
        { x: new Date(2022, 6, 27), y: 9951.47 },
        { x: new Date(2022, 6, 28), y: 10123.75 },
        { x: new Date(2022, 6, 29), y: 10861.23 },
        { x: new Date(2022, 6, 30), y: 11654.24 },
        { x: new Date(2022, 6, 31), y: 11898.68 },
    ]
];

export const lineCustomSeries = [
{ dataSource: lineChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'Total Capital',
    width: '2',
    marker: { visible: false, width: 0, height: 0 },
    type: 'Line' },  
];

export const linePrimaryXAxis = {
    valueType: 'DateTime',
    labelFormat: 'd-0M',
    intervalType: 'Days',
    edgeLabelPlacement: 'Shift',
    majorGridLines: { width: 0 },
    background: 'white',
};
  
export const linePrimaryYAxis = {
    labelFormat: '${value}',
    rangePadding: 'None',
    minimum: 9000,
    maximum: 12000,
    interval: 1000,
    lineStyle: { width: 0 },
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 },
};

export const pieChartData = [
    { x: 'DOGE', y: 13.72, text: '17327.07 DOGE' },
    { x: 'BTC', y: 32.45, text: '0.1246 BTC' },
    { x: 'ETH', y: 30.02, text: '1.6146 ETH' },
    { x: 'BNB', y: 23.81, text: '7.8695 BNB' }
];

export const cryptoData = [
    {
        Rank: 1, Coin: 'Bitcoin BTC', CurrentPrice: '$23377.12', Hour: '-0.7%', HourBg: '#dd1547', Day: '-1.6%', DayBg: '#dd1547', Week: '-0.1%', WeekBg: '#dd1547',
        DayVolume: '$41,829,211,589', MCap: '$441,293,035,772', ProductImage: 'https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579',
    },
    {
        Rank: 2, Coin: 'Ethereum ETH', CurrentPrice: '$1,660.06', Hour: '-0.8%', HourBg: '#dd1547', Day: '-2.6%', DayBg: '#dd1547', Week: '-1.6%', WeekBg: '#dd1547',
        DayVolume: '$14,254,201,962', MCap: '$198,110,897,073', ProductImage: 'https://assets.coingecko.com/coins/images/279/thumb/ethereum.png?1595348880',
    },
    {
        Rank: 3, Coin: 'Tether USDT', CurrentPrice: '$1.00', Hour: '-0.2%', HourBg: '#dd1547', Day: '0.2%', DayBg: '#15c46d', Week: '0.1%', WeekBg: '#15c46d',
        DayVolume: '$52,922,847,490', MCap: '$65,836,756,623', ProductImage: 'https://assets.coingecko.com/coins/images/325/thumb/Tether-logo.png?1598003707',
    },
    {
        Rank: 4, Coin: 'USD Coin USDC', CurrentPrice: '$1.00', Hour: '-0.1%', HourBg: '#dd1547', Day: '0.2%', DayBg: '#dd1547', Week: '-0.1%', WeekBg: '#dd1547',
        DayVolume: '$6,904,107,764', MCap: '$54,280,683,993', ProductImage: 'https://assets.coingecko.com/coins/images/6319/thumb/USD_Coin_icon.png?1547042389',
    },
    {
        Rank: 5, Coin: 'BNB', CurrentPrice: '$294.68', Hour: '1.1%', HourBg: '#15c46d', Day: '-0.1%', DayBg: '#dd1547', Week: '15.0%', WeekBg: '#15c46d',
        DayVolume: '$1,267,393,205', MCap: '$46,430,091,843', ProductImage: 'https://assets.coingecko.com/coins/images/825/thumb/bnb-icon2_2x.png?1644979850',
    },
    {
        Rank: 6, Coin: 'XRP', CurrentPrice: '$0.373838', Hour: '0.0%', HourBg: '#15c46d', Day: '-0.5%', DayBg: '#dd1547', Week: '-0.1%', WeekBg: '#dd1547',
        DayVolume: '$1,267,393,205', MCap: '$46,430,091,843', ProductImage: 'https://assets.coingecko.com/coins/images/44/thumb/xrp-symbol-white-128.png?1605778731',
    },
    {
        Rank: 7, Coin: 'Binance USD BUSD', CurrentPrice: '$0.999745', Hour: '0.2%', HourBg: '#15c46d', Day: '-0.8%', DayBg: '#dd1547', Week: '-1.5%', WeekBg: '#dd1547',
        DayVolume: '$1,267,393,205', MCap: '$46,430,091,843', ProductImage: 'https://assets.coingecko.com/coins/images/9576/thumb/BUSD.png?1568947766',
    },
    {
        Rank: 8, Coin: 'Caradano ADA', CurrentPrice: '$0.510244', Hour: '-0.6%', HourBg: '#dd1547', Day: '-1.5%', DayBg: '#dd1547', Week: '-3.8%', WeekBg: '#dd1547',
        DayVolume: '$1,267,393,205', MCap: '$46,430,091,843', ProductImage: 'https://assets.coingecko.com/coins/images/975/thumb/cardano.png?1547034860',
    },
    {
        Rank: 9, Coin: 'Solana SOL', CurrentPrice: '$40.29', Hour: '-1.5%', HourBg: '#dd1547', Day: '-3.5%', DayBg: '#dd1547', Week: '7.3%', WeekBg: '#15c46d',
        DayVolume: '$1,267,393,205', MCap: '$46,430,091,843', ProductImage: 'https://assets.coingecko.com/coins/images/4128/thumb/solana.png?1640133422',
    },
    {
        Rank: 10, Coin: 'Polkadot DOT', CurrentPrice: '$8.23', Hour: '-0.5%', HourBg: '#dd1547', Day: '-0.8%', DayBg: '#dd1547', Week: '0.1%', WeekBg: '#15c46d',
        DayVolume: '$1,267,393,205', MCap: '$46,430,091,843', ProductImage: 'https://assets.coingecko.com/coins/images/12171/thumb/polkadot.png?1639712644',
    },
    {
        Rank: 11, Coin: 'Dogecoin DOGE', CurrentPrice: '$0.068019', Hour: '0.2%', HourBg: '#15c46d', Day: '-1.1%', DayBg: '#dd1547', Week: '3.5%', WeekBg: '#15c46d',
        DayVolume: '$1,267,393,205', MCap: '$46,430,091,843', ProductImage: 'https://assets.coingecko.com/coins/images/5/thumb/dogecoin.png?1547792256',
    },
    {
        Rank: 12, Coin: 'Shiba SHIB', CurrentPrice: '$0.00001205', Hour: '-0.6%', HourBg: '#dd1547', Day: '-0.7%', DayBg: '#dd1547', Week: '0.1%', WeekBg: '#15c46d',
        DayVolume: '$1,267,393,205', MCap: '$46,430,091,843', ProductImage: 'https://assets.coingecko.com/coins/images/11939/thumb/shiba.png?1622619446',
    },
    {
        Rank: 13, Coin: 'Lido Stacked Ether STETH', CurrentPrice: '$1621.73', Hour: '0.1%', HourBg: '#15c46d', Day: '0.2%', DayBg: '#15c46d', Week: '-2.1%', WeekBg: '#dd1547',
        DayVolume: '$1,267,393,205', MCap: '$46,430,091,843', ProductImage: 'https://assets.coingecko.com/coins/images/13442/thumb/steth_logo.png?1608607546',
    },
    {
        Rank: 14, Coin: 'DAI', CurrentPrice: '$1.00', Hour: '-0.9%', HourBg: '#dd1547', Day: '-2.7%', DayBg: '#dd1547', Week: '-0.5%', WeekBg: '#dd1547',
        DayVolume: '$1,267,393,205', MCap: '$46,430,091,843', ProductImage: 'https://assets.coingecko.com/coins/images/9956/thumb/4943.png?1636636734',
    },
    {
        Rank: 15, Coin: 'Avalanche AVAX', CurrentPrice: '$24.01', Hour: '-1.0%', HourBg: '#dd1547', Day: '-2.2%', DayBg: '#dd1547', Week: '-0.1%', WeekBg: '#dd1547',
        DayVolume: '$1,267,393,205', MCap: '$46,430,091,843', ProductImage: 'https://assets.coingecko.com/coins/images/12559/thumb/coin-round-red.png?1604021818',
    },
    {
        Rank: 16, Coin: 'Polygon MATIC', CurrentPrice: '$0.911993', Hour: '-0.6%', HourBg: '#dd1547', Day: '-1.7%', DayBg: '#dd1547', Week: '-0.1%', WeekBg: '#dd1547',
        DayVolume: '$1,267,393,205', MCap: '$46,430,091,843', ProductImage: 'https://assets.coingecko.com/coins/images/4713/thumb/matic-token-icon.png?1624446912',
    },
    {
        Rank: 17, Coin: 'TRON TRX', CurrentPrice: '$0.069135', Hour: '-0.1%', HourBg: '#dd1547', Day: '-0.4%', DayBg: '#dd1547', Week: '-0.5%', WeekBg: '#dd1547',
        DayVolume: '$1,267,393,205', MCap: '$46,430,091,843', ProductImage: 'https://assets.coingecko.com/coins/images/1094/thumb/tron-logo.png?1547035066',
    },
    {
        Rank: 18, Coin: 'Wrapped Bitcoin WBTC', CurrentPrice: '$23338.42', Hour: '-0.7%', HourBg: '#dd1547', Day: '-0.1%', DayBg: '#dd1547', Week: '-0.3%', WeekBg: '#dd1547',
        DayVolume: '$1,267,393,205', MCap: '$46,430,091,843', ProductImage: 'https://assets.coingecko.com/coins/images/7598/thumb/wrapped_bitcoin_wbtc.png?1548822744',
    },
    {
        Rank: 19, Coin: 'Ethereum Classic ETC', CurrentPrice: '$37.49', Hour: '-1.3%', HourBg: '#dd1547', Day: '-1.5%', DayBg: '#dd1547', Week: '8.4%', WeekBg: '#15c46d',
        DayVolume: '$1,267,393,205', MCap: '$46,430,091,843', ProductImage: 'https://assets.coingecko.com/coins/images/453/thumb/ethereum-classic-logo.png?1547034169',
    },
    {
        Rank: 20, Coin: 'OKB', CurrentPrice: '$18.34', Hour: '-0.3%', HourBg: '#dd1547', Day: '-0.1%', DayBg: '#dd1547', Week: '-3.6%', WeekBg: '#dd1547',
        DayVolume: '$1,267,393,205', MCap: '$46,430,091,843', ProductImage: 'https://assets.coingecko.com/coins/images/4463/thumb/WeChat_Image_20220118095654.png?1642471050',
    },
    {
        Rank: 21, Coin: 'Leo Token LEO', CurrentPrice: '$5.01', Hour: '-0.9%', HourBg: '#dd1547', Day: '-1.5%', DayBg: '#dd1547', Week: '12.8%', WeekBg: '#15c46d',
        DayVolume: '$1,267,393,205', MCap: '$46,430,091,843', ProductImage: 'https://assets.coingecko.com/coins/images/8418/thumb/leo-token.png?1558326215',
    },
    {
        Rank: 22, Coin: 'Litecoin LTC', CurrentPrice: '$59.26', Hour: '-1.7%', HourBg: '#dd1547', Day: '0.5%', DayBg: '#15c46d', Week: '0.6%', WeekBg: '#15c46d',
        DayVolume: '$1,267,393,205', MCap: '$46,430,091,843', ProductImage: 'https://assets.coingecko.com/coins/images/2/thumb/litecoin.png?1547033580',
    },
    {
        Rank: 23, Coin: 'Uniswap UNI', CurrentPrice: '$9.10', Hour: '-2.9%', HourBg: '#dd1547', Day: '-3.9%', DayBg: '#dd1547', Week: '8.9%', WeekBg: '#15c46d',
        DayVolume: '$1,267,393,205', MCap: '$46,430,091,843', ProductImage: 'https://assets.coingecko.com/coins/images/12504/thumb/uniswap-uni.png?1600306604',
    },
    {
        Rank: 24, Coin: 'FTX FTT', CurrentPrice: '$29.70', Hour: '0.7%', HourBg: '#15c46d', Day: '-1.1%', DayBg: '#dd1547', Week: '-0.4%', WeekBg: '#dd1547',
        DayVolume: '$1,267,393,205', MCap: '$46,430,091,843', ProductImage: 'https://assets.coingecko.com/coins/images/9026/thumb/F.png?1609051564',
    },
    {
        Rank: 25, Coin: 'Cronos CRO', CurrentPrice: '$0.150491', Hour: '0.6%', HourBg: '#15c46d', Day: '-4.0%', DayBg: '#dd1547', Week: '9.8%', WeekBg: '#15c46d',
        DayVolume: '$1,267,393,205', MCap: '$46,430,091,843', ProductImage: 'https://assets.coingecko.com/coins/images/7310/thumb/oCw2s3GI_400x400.jpeg?1645172042',
    },
    {
        Rank: 26, Coin: 'Chainlink LINK', CurrentPrice: '$7.53', Hour: '-1.3%', HourBg: '#dd1547', Day: '-2.3%', DayBg: '#dd1547', Week: '7.0%', WeekBg: '#15c46d',
        DayVolume: '$1,267,393,205', MCap: '$46,430,091,843', ProductImage: 'https://assets.coingecko.com/coins/images/877/thumb/chainlink-new-logo.png?1547034700',
    },
    {
        Rank: 27, Coin: 'NEAR Protocol NEAR', CurrentPrice: '$4.44', Hour: '-0.5%', HourBg: '#dd1547', Day: '-0.3%', DayBg: '#dd1547', Week: '6.8%', WeekBg: '#15c46d',
        DayVolume: '$1,267,393,205', MCap: '$46,430,091,843', ProductImage: 'https://assets.coingecko.com/coins/images/10365/thumb/near_icon.png?1601359077',
    },
    {
        Rank: 28, Coin: 'Cosmos Hub ATOM', CurrentPrice: '$10.38', Hour: '-0.4%', HourBg: '#dd1547', Day: '0.9%', DayBg: '#15c46d', Week: '0.9%', WeekBg: '#15c46d',
        DayVolume: '$1,267,393,205', MCap: '$46,430,091,843', ProductImage: 'https://assets.coingecko.com/coins/images/1481/thumb/cosmos_hub.png?1555657960',
    },
    {
        Rank: 29, Coin: 'Stellar XLM', CurrentPrice: '$0.117140', Hour: '-0.3%', HourBg: '#dd1547', Day: '-1.4%', DayBg: '#dd1547', Week: '1.6%', WeekBg: '#15c46d',
        DayVolume: '$1,267,393,205', MCap: '$46,430,091,843', ProductImage: 'https://assets.coingecko.com/coins/images/100/thumb/Stellar_symbol_black_RGB.png?1552356157',
    },
    {
        Rank: 30, Coin: 'Monero XMR', CurrentPrice: '$158.63', Hour: '-1.1%', HourBg: '#dd1547', Day: '-0.2%', DayBg: '#dd1547', Week: '-2.3%', WeekBg: '#dd1547',
        DayVolume: '$1,267,393,205', MCap: '$46,430,091,843', ProductImage: 'https://assets.coingecko.com/coins/images/69/thumb/monero_logo.png?1547033729',
    },
  ];

  export const favoritesCryptoData = [
    {
        Rank: 1, Coin: 'Bitcoin BTC', CurrentPrice: '$23377.12', Hour: '-0.7%', HourBg: '#dd1547', Day: '-1.6%', DayBg: '#dd1547', Week: '-0.1%', WeekBg: '#dd1547',
        DayVolume: '$41,829,211,589', MCap: '$441,293,035,772', ProductImage: 'https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579',
    },
    {
        Rank: 2, Coin: 'Ethereum ETH', CurrentPrice: '$1,660.06', Hour: '-0.8%', HourBg: '#dd1547', Day: '-2.6%', DayBg: '#dd1547', Week: '-1.6%', WeekBg: '#dd1547',
        DayVolume: '$14,254,201,962', MCap: '$198,110,897,073', ProductImage: 'https://assets.coingecko.com/coins/images/279/thumb/ethereum.png?1595348880',
    },
    {
        Rank: 5, Coin: 'BNB', CurrentPrice: '$294.68', Hour: '1.1%', HourBg: '#15c46d', Day: '-0.1%', DayBg: '#dd1547', Week: '15.0%', WeekBg: '#15c46d',
        DayVolume: '$1,267,393,205', MCap: '$46,430,091,843', ProductImage: 'https://assets.coingecko.com/coins/images/825/thumb/bnb-icon2_2x.png?1644979850',
    },
    {
        Rank: 8, Coin: 'Caradano ADA', CurrentPrice: '$0.510244', Hour: '-0.6%', HourBg: '#dd1547', Day: '-1.5%', DayBg: '#dd1547', Week: '-3.8%', WeekBg: '#dd1547',
        DayVolume: '$1,267,393,205', MCap: '$46,430,091,843', ProductImage: 'https://assets.coingecko.com/coins/images/975/thumb/cardano.png?1547034860',
    },
    {
        Rank: 9, Coin: 'Solana SOL', CurrentPrice: '$40.29', Hour: '-1.5%', HourBg: '#dd1547', Day: '-3.5%', DayBg: '#dd1547', Week: '7.3%', WeekBg: '#15c46d',
        DayVolume: '$1,267,393,205', MCap: '$46,430,091,843', ProductImage: 'https://assets.coingecko.com/coins/images/4128/thumb/solana.png?1640133422',
    },
    {
        Rank: 10, Coin: 'Polkadot DOT', CurrentPrice: '$8.23', Hour: '-0.5%', HourBg: '#dd1547', Day: '-0.8%', DayBg: '#dd1547', Week: '0.1%', WeekBg: '#15c46d',
        DayVolume: '$1,267,393,205', MCap: '$46,430,091,843', ProductImage: 'https://assets.coingecko.com/coins/images/12171/thumb/polkadot.png?1639712644',
    },
    {
        Rank: 15, Coin: 'Avalanche AVAX', CurrentPrice: '$24.01', Hour: '-1.0%', HourBg: '#dd1547', Day: '-2.2%', DayBg: '#dd1547', Week: '-0.1%', WeekBg: '#dd1547',
        DayVolume: '$1,267,393,205', MCap: '$46,430,091,843', ProductImage: 'https://assets.coingecko.com/coins/images/12559/thumb/coin-round-red.png?1604021818',
    },
    {
        Rank: 16, Coin: 'Polygon MATIC', CurrentPrice: '$0.911993', Hour: '-0.6%', HourBg: '#dd1547', Day: '-1.7%', DayBg: '#dd1547', Week: '-0.1%', WeekBg: '#dd1547',
        DayVolume: '$1,267,393,205', MCap: '$46,430,091,843', ProductImage: 'https://assets.coingecko.com/coins/images/4713/thumb/matic-token-icon.png?1624446912',
    },
    {
        Rank: 17, Coin: 'TRON TRX', CurrentPrice: '$0.069135', Hour: '-0.1%', HourBg: '#dd1547', Day: '-0.4%', DayBg: '#dd1547', Week: '-0.5%', WeekBg: '#dd1547',
        DayVolume: '$1,267,393,205', MCap: '$46,430,091,843', ProductImage: 'https://assets.coingecko.com/coins/images/1094/thumb/tron-logo.png?1547035066',
    },
    {
        Rank: 22, Coin: 'Litecoin LTC', CurrentPrice: '$59.26', Hour: '-1.7%', HourBg: '#dd1547', Day: '0.5%', DayBg: '#15c46d', Week: '0.6%', WeekBg: '#15c46d',
        DayVolume: '$1,267,393,205', MCap: '$46,430,091,843', ProductImage: 'https://assets.coingecko.com/coins/images/2/thumb/litecoin.png?1547033580',
    },
    {
        Rank: 23, Coin: 'Uniswap UNI', CurrentPrice: '$9.10', Hour: '-2.9%', HourBg: '#dd1547', Day: '-3.9%', DayBg: '#dd1547', Week: '8.9%', WeekBg: '#15c46d',
        DayVolume: '$1,267,393,205', MCap: '$46,430,091,843', ProductImage: 'https://assets.coingecko.com/coins/images/12504/thumb/uniswap-uni.png?1600306604',
    },
    {
        Rank: 26, Coin: 'Chainlink LINK', CurrentPrice: '$7.53', Hour: '-1.3%', HourBg: '#dd1547', Day: '-2.3%', DayBg: '#dd1547', Week: '7.0%', WeekBg: '#15c46d',
        DayVolume: '$1,267,393,205', MCap: '$46,430,091,843', ProductImage: 'https://assets.coingecko.com/coins/images/877/thumb/chainlink-new-logo.png?1547034700',
    },
    {
        Rank: 27, Coin: 'NEAR Protocol NEAR', CurrentPrice: '$4.44', Hour: '-0.5%', HourBg: '#dd1547', Day: '-0.3%', DayBg: '#dd1547', Week: '6.8%', WeekBg: '#15c46d',
        DayVolume: '$1,267,393,205', MCap: '$46,430,091,843', ProductImage: 'https://assets.coingecko.com/coins/images/10365/thumb/near_icon.png?1601359077',
    },
    {
        Rank: 28, Coin: 'Cosmos Hub ATOM', CurrentPrice: '$10.38', Hour: '-0.4%', HourBg: '#dd1547', Day: '0.9%', DayBg: '#15c46d', Week: '0.9%', WeekBg: '#15c46d',
        DayVolume: '$1,267,393,205', MCap: '$46,430,091,843', ProductImage: 'https://assets.coingecko.com/coins/images/1481/thumb/cosmos_hub.png?1555657960',
    },
    {
        Rank: 29, Coin: 'Stellar XLM', CurrentPrice: '$0.117140', Hour: '-0.3%', HourBg: '#dd1547', Day: '-1.4%', DayBg: '#dd1547', Week: '1.6%', WeekBg: '#15c46d',
        DayVolume: '$1,267,393,205', MCap: '$46,430,091,843', ProductImage: 'https://assets.coingecko.com/coins/images/100/thumb/Stellar_symbol_black_RGB.png?1552356157',
    },
    {
        Rank: 30, Coin: 'Monero XMR', CurrentPrice: '$158.63', Hour: '-1.1%', HourBg: '#dd1547', Day: '-0.2%', DayBg: '#dd1547', Week: '-2.3%', WeekBg: '#dd1547',
        DayVolume: '$1,267,393,205', MCap: '$46,430,091,843', ProductImage: 'https://assets.coingecko.com/coins/images/69/thumb/monero_logo.png?1547033729',
    },
  ];

  export const trendingCryptoData = [
    {
        Rank: 31, Coin: 'Flow FLOW', CurrentPrice: '$2.76', Hour: '-3.0%', HourBg: '#dd1547', Day: '48.2%', DayBg: '#15c46d', Week: '46.5%', WeekBg: '#15c46d',
        DayVolume: '$1,297,384,560', MCap: '$2,849,764,043', ProductImage: 'https://assets.coingecko.com/coins/images/13446/thumb/5f6294c0c7a8cda55cb1c936_Flow_Wordmark.png?1631696776',
    },
    {
        Rank: 36, Coin: 'Filecoin FIL', CurrentPrice: '$8.37', Hour: '1.0%', HourBg: '#15c46d', Day: '1.4%', DayBg: '#15c46d', Week: '41.1%', WeekBg: '#15c46d',
        DayVolume: '$375,197,737', MCap: '$2,129,287,774', ProductImage: 'https://assets.coingecko.com/coins/images/12817/thumb/filecoin.png?1602753933',
    },
    {
        Rank: 71, Coin: 'Chiliz CHZ', CurrentPrice: '$0.146973', Hour: '0.2%', HourBg: '#15c46d', Day: '0.3%', DayBg: '#15c46d', Week: '21.4%', WeekBg: '#15c46d',
        DayVolume: '$201,496,913', MCap: '$782,844,621', ProductImage: 'https://assets.coingecko.com/coins/images/8834/thumb/Chiliz.png?1561970540',
    },
    {
        Rank: 45, Coin: 'Lido DAO LDO', CurrentPrice: '$2.71', Hour: '3.5%', HourBg: '#15c46d', Day: '9.4%', DayBg: '#15c46d', Week: '21.1%', WeekBg: '#15c46d',
        DayVolume: '$158,848,969', MCap: '$1,449,614,824', ProductImage: 'https://assets.coingecko.com/coins/images/13573/thumb/Lido_DAO.png?1609873644',
    },
    {
        Rank: 35, Coin: 'VeChain VET', CurrentPrice: '$0.03133127', Hour: '0.6%', HourBg: '#15c46d', Day: '5.3%', DayBg: '#15c46d', Week: '19.1%', WeekBg: '#15c46d',
        DayVolume: '$157,316,510', MCap: '$2,266,229,234', ProductImage: 'https://assets.coingecko.com/coins/images/1167/thumb/VeChain-Logo-768x725.png?1547035194',
    },
    {
        Rank: 84, Coin: 'PancakeSwap CAKE', CurrentPrice: '$4.22', Hour: '0.1%', HourBg: '#15c46d', Day: '4.9%', DayBg: '#15c46d', Week: '17.7%', WeekBg: '#15c46d',
        DayVolume: '$114,887,941', MCap: '$618,413,598', ProductImage: 'https://assets.coingecko.com/coins/images/12632/thumb/pancakeswap-cake-logo_%281%29.png?1629359065',
    },
    {
        Rank: 68, Coin: 'BitDAO BIT', CurrentPrice: '$0.782091', Hour: '1.3%', HourBg: '#15c46d', Day: '4.2%', DayBg: '#15c46d', Week: '16.7', WeekBg: '#15c46d',
        DayVolume: '$82,798,515', MCap: '$865,861,460', ProductImage: 'https://assets.coingecko.com/coins/images/17627/thumb/rI_YptK8.png?1653983088',
    },
    {
        Rank: 44, Coin: 'Theta Network THETA', CurrentPrice: '$1.55', Hour: '2.5%', HourBg: '#15c46d', Day: '9.6%', DayBg: '#15c46d', Week: '16.1%', WeekBg: '#15c46d',
        DayVolume: '$98,360,847', MCap: '$1,572,267,291', ProductImage: 'https://assets.coingecko.com/coins/images/2538/thumb/theta-token-logo.png?1548387191',
    },
    {
        Rank: 25, Coin: 'NEAR Protocol NEAR', CurrentPrice: '$5.20', Hour: '2.3%', HourBg: '#15c46d', Day: '16.6%', DayBg: '#15c46d', Week: '15.4%', WeekBg: '#15c46d',
        DayVolume: '$417,364,375', MCap: '$3,761,220,447', ProductImage: 'https://assets.coingecko.com/coins/images/10365/thumb/near_icon.png?1601359077',
    },
    {
        Rank: 5, Coin: 'BNB', CurrentPrice: '$294.68', Hour: '1.1%', HourBg: '#15c46d', Day: '-0.1%', DayBg: '#dd1547', Week: '15.0%', WeekBg: '#15c46d',
        DayVolume: '$1,267,393,205', MCap: '$46,430,091,843', ProductImage: 'https://assets.coingecko.com/coins/images/825/thumb/bnb-icon2_2x.png?1644979850',
    },
    {
        Rank: 95, Coin: 'Kava KAVA', CurrentPrice: '$2.22', Hour: '-0.7%', HourBg: '#dd1547', Day: '4.2%', DayBg: '#15c46d', Week: '14.5%', WeekBg: '#15c46d',
        DayVolume: '$48,539,996', MCap: '$539,587,869', ProductImage: 'https://assets.coingecko.com/coins/images/9761/thumb/kava.jpg?1639703080',
    },
    {
        Rank: 37, Coin: 'Internet Computer ICP', CurrentPrice: '$8.10', Hour: '0.9%', HourBg: '#15c46d', Day: '0.3%', DayBg: '#15c46d', Week: '14.4%', WeekBg: '#15c46d',
        DayVolume: '$71,589,114', MCap: '$2,067,498,082', ProductImage: 'https://assets.coingecko.com/coins/images/14495/thumb/Internet_Computer_logo.png?1620703073',
    },
    {
        Rank: 80, Coin: 'Enjin Coin ENJ', CurrentPrice: '$0.701003', Hour: '-0.3%', HourBg: '#dd1547', Day: '5.5%', DayBg: '#15c46d', Week: '14.2%', WeekBg: '#15c46d',
        DayVolume: '$249,614,060', MCap: '$654,858,730', ProductImage: 'https://assets.coingecko.com/coins/images/1102/thumb/enjin-coin-logo.png?1547035078',
    },
    {
        Rank: 78, Coin: 'Stacks STX', CurrentPrice: '$0.495382', Hour: '0.7%', HourBg: '#15c46d', Day: '4.2%', DayBg: '#15c46d', Week: '13.7%', WeekBg: '#15c46d',
        DayVolume: '$22,212,464', MCap: '$658,438,521', ProductImage: 'https://assets.coingecko.com/coins/images/2069/thumb/Stacks_logo_full.png?1604112510',
    },
    {
        Rank: 57, Coin: 'Fantom FTM', CurrentPrice: '$0.381380', Hour: '-0.8%', HourBg: '#dd1547', Day: '7.8%', DayBg: '#15c46d', Week: '12.5%', WeekBg: '#15c46d',
        DayVolume: '$464,754,591', MCap: '$969,864,397', ProductImage: 'https://assets.coingecko.com/coins/images/4001/thumb/Fantom.png?1558015016',
    },
    {
        Rank: 94, Coin: 'Celcius Network CEL', CurrentPrice: '$1.30', Hour: '-0.8%', HourBg: '#dd1547', Day: '7.8%', DayBg: '#15c46d', Week: '12.5%', WeekBg: '#15c46d',
        DayVolume: '$464,754,591', MCap: '$969,864,397', ProductImage: 'https://assets.coingecko.com/coins/images/3263/thumb/CEL_logo.png?1609598753',
    },
    {
        Rank: 98, Coin: 'Celo CELO', CurrentPrice: '$1.09', Hour: '0.2%', HourBg: '#15c46d', Day: '6.3%', DayBg: '#15c46d', Week: '11.0%', WeekBg: '#15c46d',
        DayVolume: '$21,020,278', MCap: '$495,681,168', ProductImage: 'https://assets.coingecko.com/coins/images/11090/thumb/icon-celo-CELO-color-500.png?1592293590',
    },
    {
        Rank: 34, Coin: 'ApeCoin APE', CurrentPrice: '$7.63', Hour: '1.1%', HourBg: '#15c46d', Day: '0.7%', DayBg: '#15c46d', Week: '10.6%', WeekBg: '#15c46d',
        DayVolume: '$464,694,080', MCap: '$2,349,708,307', ProductImage: 'https://assets.coingecko.com/coins/images/24383/thumb/apecoin.jpg?1647476455',
    },
    {
        Rank: 59, Coin: 'The Graph GRT', CurrentPrice: '$0.126897', Hour: '1.4%', HourBg: '#15c46d', Day: '4.1%', DayBg: '#15c46d', Week: '10.4%', WeekBg: '#15c46d',
        DayVolume: '$61,966,846', MCap: '$940,533,836', ProductImage: 'https://assets.coingecko.com/coins/images/13397/thumb/Graph_Token.png?1608145566',
    },
    {
        Rank: 82, Coin: 'Waves WAVES', CurrentPrice: '$6.33', Hour: '-0.9%', HourBg: '#dd1547', Day: '10.3%', DayBg: '#15c46d', Week: '10.3%', WeekBg: '#15c46d',
        DayVolume: '$860,352,945', MCap: '$635,376,330', ProductImage: 'https://assets.coingecko.com/coins/images/425/thumb/waves.png?1548386117',
    },
  ];

  export const coinCryptoImage = (props) => (
    <div className='flex items-center'>
        <img src={props.ProductImage} alt="order-item" /> 
        <span className='ml-2'>{props.Coin}</span>
    </div>
  );

  export const hourCryptoStatus = (props) => (
    <button
      type="button"
      style={{ color: props.HourBg }}
      className="font-semibold py-1 px-2"
    >
      {props.Hour}
    </button>
  );

  export const dayCryptoStatus = (props) => (
    <button
      type="button"
      style={{ color: props.DayBg }}
      className="font-semibold py-1 px-2"
    >
      {props.Day}
    </button>
  );

  export const weekCryptoStatus = (props) => (
    <button
      type="button"
      style={{ color: props.WeekBg }}
      className="font-semibold py-1 px-2"
    >
      {props.Week}
    </button>
  );

  export const cryptoGrid = [
    {
        field: 'Rank',
        headerText: '#',
        width: '80',
        textAlign: 'Center',
    },
    {
        field: 'Coin',
        template: coinCryptoImage,
        headerText: 'Coin',
        width: '220',
        textAlign: 'Left',
    },
    {
        field: 'CurrentPrice',
        headerText: 'Price',
        width: '150',
        textAlign: 'Right',
    },
    {
        field: 'Hour',
        template: hourCryptoStatus,
        headerText: '1h',
        width: '100',
        textAlign: 'Right',
    },
    {
        field: 'Day',
        template: dayCryptoStatus,
        headerText: '24h',
        width: '100',
        textAlign: 'Right',
    },
    {
        field: 'Week',
        template: weekCryptoStatus,
        headerText: '7j',
        width: '100',
        textAlign: 'Right',
    },
    {
        field: 'DayVolume',
        headerText: '24h Volume',
        width: '150',
        textAlign: 'Right',
    },
    {
        field: 'MCap',
        headerText: 'Mkt Cap',
        width: '150',
        textAlign: 'Right',
    }
  ];

export const bitcoinChartData = [
    { x: new Date('2020-03-16'), open: 5354.29, high: 6931.57, low: 4460.89, close: 5832.38 },
    { x: new Date('2020-03-23'), open: 5813.71, high: 6976.55, low: 5732.92, close: 5879.91 },
    { x: new Date('2020-03-30'), open: 5884.16, high: 7219.46, low: 5862.92, close: 6779.87 },
    { x: new Date('2020-04-06'), open: 6779.14, high: 7463.42, low: 6757.86, close: 6908.34 },
    { x: new Date('2020-04-13'), open: 6878, high: 7301.66, low: 6482.35, close: 7131.37 },
    { x: new Date('2020-04-20'), open: 7137.4, high: 7728.65, low: 6767.99, close: 7704.31 },
    { x: new Date('2020-04-27'), open: 7734.94, high: 9468.63, low: 7646.35, close: 8909.37 },
    { x: new Date('2020-05-04'), open: 8917, high: 10055.79, low: 8176.09, close: 8745.14 },
    { x: new Date('2020-05-11'), open: 8738.22, high: 9935.32, low: 8214.55, close: 9667.69 },
    { x: new Date('2020-05-18'), open: 9679.93, high: 9929.86, low: 8713.99, close: 8724.29 },
    { x: new Date('2020-05-25'), open: 8696.97, high: 9724.89, low: 8655.27, close: 9451.56 },
    { x: new Date('2020-06-01'), open: 9447.3, high: 10343.96, low: 9317.54, close: 9754.68 },
    { x: new Date('2020-06-08'), open: 9758.89, high: 9992.54, low: 9113.3, close: 9330.78 },
    { x: new Date('2020-06-15'), open: 9329.64, high: 9584.84, low: 8908.12, close: 9287.17 },
    { x: new Date('2020-06-22'), open: 9286.33, high: 9762.32, low: 8859.94, close: 9125.82 },
    { x: new Date('2020-06-29'), open: 9120.82, high: 9299.78, low: 8933.92, close: 9084.84 },
    { x: new Date('2020-07-06'), open: 9081.81, high: 9471.82, low: 9064.92, close: 9306.71 },
    { x: new Date('2020-07-13'), open: 9313.56, high: 9342.02, low: 9041.35, close: 9216.79 },
    { x: new Date('2020-07-20'), open: 9220.82, high: 10120.42, low: 9145.66, close: 9937.81 },
    { x: new Date('2020-07-27'), open: 9938.03, high: 12104.88, low: 9934.64, close: 11065.85 },
    { x: new Date('2020-08-03'), open: 11073.49, high: 11915.14, low: 10964.14, close: 11690.13 },
    { x: new Date('2020-08-10'), open: 11691.91, high: 12070.06, low: 11145.75, close: 11918.82 },
    { x: new Date('2020-08-17'), open: 11921.41, high: 12458.42, low: 11388.49, close: 11656.51 },
    { x: new Date('2020-08-24'), open: 11658, high: 11827.88, low: 11138.15, close: 11715.71 },
    { x: new Date('2020-08-31'), open: 11720.29, high: 12056.36, low: 9893.54, close: 10260.5 },
    { x: new Date('2020-09-07'), open: 10258.76, high: 10575.73, low: 9862.19, close: 10335.94 },
    { x: new Date('2020-09-14'), open: 10339.84, high: 11170.80, low: 10267.48, close: 10926.42 },
    { x: new Date('2020-09-21'), open: 10926.04, high: 10993.75, low: 10145.75, close: 10777.32 },
    { x: new Date('2020-09-28'), open: 10786.06, high: 10945.21, low: 10391.74, close: 10673.52 },
    { x: new Date('2020-10-05'), open: 10669.75, high: 11470.09, low: 10532.73, close: 11373.68 },
    { x: new Date('2020-10-12'), open: 11373.30, high: 11713.41, low: 11218.85, close: 11511.91 },
    { x: new Date('2020-10-19'), open: 11520.70, high: 13337.59, low: 11420.60, close: 13037.34 },
    { x: new Date('2020-10-26'), open: 13038.20, high: 14063.41, low: 12802.78, close: 13764.46 },
    { x: new Date('2020-11-02'), open: 13767.27, high: 15960.06, low: 13236.48, close: 15475.05 },
    { x: new Date('2020-11-09'), open: 15746.55, high: 16487.51, low: 14834.18, close: 15973.53 },
    { x: new Date('2020-11-16'), open: 15963.63, high: 18964.51, low: 15884.64, close: 18439.86 },
    { x: new Date('2020-11-23'), open: 18435, high: 19499.34, low: 16232.47, close: 18196.62 },
    { x: new Date('2020-11-30'), open: 18206.95, high: 19906.70, low: 18190.31, close: 19378.48 },
    { x: new Date('2020-12-07'), open: 19395.63, high: 19423.51, low: 17592.63, close: 19161.37 },
    { x: new Date('2020-12-14'), open: 19150.35, high: 24239.87, low: 18997.38, close: 23466.46 },
    { x: new Date('2020-12-21'), open: 23461.05, high: 28376.35, low: 22057.12, close: 26197.22 },
    { x: new Date('2020-12-28'), open: 26239.05, high: 34714.48, low: 25883.77, close: 33016.74 },
    { x: new Date('2021-01-04'), open: 33064.12, high: 41936.80, low: 27958.07, close: 38101.05 },
    { x: new Date('2021-01-11'), open: 38094.02, high: 40057.59, low: 30259.99, close: 35802.89 },
    { x: new Date('2021-01-18'), open: 35849.47, high: 37810.68, low: 28809.54, close: 32271.98 },
    { x: new Date('2021-01-25'), open: 32286.04, high: 38557.23, low: 29267.24, close: 33145.33 },
    { x: new Date('2021-02-01'), open: 33122.80, high: 40984.59, low: 32361.30, close: 38885.08 },
    { x: new Date('2021-02-08'), open: 38891.93, high: 49682.10, low: 38078.16, close: 48693.81 },
    { x: new Date('2021-02-15'), open: 48698.41, high: 58321.96, low: 46063.80, close: 57498.14 },
    { x: new Date('2021-02-22'), open: 57517.83, high: 57556.09, low: 43132.81, close: 45217.59 },
    { x: new Date('2021-03-01'), open: 45254.17, high: 52566.65, low: 45064.67, close: 50920.16 },
    { x: new Date('2021-03-08'), open: 50976.84, high: 61681.03, low: 49387.48, close: 59008.73 },
    { x: new Date('2021-03-15'), open: 59076.14, high: 60539.20, low: 53333.32, close: 57404.20 },
    { x: new Date('2021-03-22'), open: 57431.74, high: 58395.55, low: 50494.02, close: 55785.97 },
    { x: new Date('2021-03-29'), open: 55785.90, high: 60016.16, low: 54951.25, close: 58227.90 },
    { x: new Date('2021-04-05'), open: 58255.93, high: 61049.16, low: 55500.33, close: 59921.93 },
    { x: new Date('2021-04-12'), open: 60046.68, high: 64840.36, low: 52180.12, close: 56248.94 },
    { x: new Date('2021-04-19'), open: 56242.53, high: 57578.59, low: 47097.95, close: 49098.20 },
    { x: new Date('2021-04-26'), open: 49137.04, high: 58487.00, low: 48872.87, close: 56617.20 },
    { x: new Date('2021-05-03'), open: 56594.86, high: 59511.25, low: 52998.59, close: 58293.34 },
    { x: new Date('2021-05-10'), open: 58375.54, high: 59576.54, low: 43942.17, close: 46465.33 },
    { x: new Date('2021-05-17'), open: 46471.66, high: 46601.13, low: 30261.48, close: 34703.42 },
    { x: new Date('2021-05-24'), open: 34820.87, high: 40832.79, low: 33474.21, close: 35663.72 },
    { x: new Date('2021-05-31'), open: 35627.02, high: 39476.53, low: 34227.27, close: 35797.27 },
    { x: new Date('2021-06-07'), open: 35783.74, high: 39344.36, low: 31071.58, close: 39034.43 },
    { x: new Date('2021-06-14'), open: 39081.74, high: 41294.95, low: 33392.21, close: 35594.62 },
    { x: new Date('2021-06-21'), open: 35581.88, high: 35745.05, low: 28915.01, close: 34699.99 },
    { x: new Date('2021-06-28'), open: 34694.99, high: 36584.73, low: 32740.79, close: 35295.83 },
    { x: new Date('2021-07-05'), open: 35189.91, high: 35189.91, low: 32138.64, close: 34240.75 },
    { x: new Date('2021-07-12'), open: 34271.63, high: 34640.19, low: 31050.35, close: 31796.86 },
    { x: new Date('2021-07-19'), open: 31815.72, high: 35416.99, low: 29336.54, close: 35416.81 },
    { x: new Date('2021-07-26'), open: 35436.30, high: 42562.33, low: 35292.78, close: 39886.01 },
    { x: new Date('2021-08-02'), open: 39857.86, high: 45315.50, low: 37390.51, close: 43824.15 },
    { x: new Date('2021-08-09'), open: 43828.19, high: 48111.31, low: 42846.37, close: 47026.94 },
    { x: new Date('2021-08-16'), open: 47034.89, high: 49781.69, low: 43990.64, close: 49284.69 },
    { x: new Date('2021-08-23'), open: 49280.55, high: 50501.86, low: 46395.05, close: 48801.77 },
    { x: new Date('2021-08-30'), open: 48786.10, high: 51889.88, low: 46558.63, close: 51783.17 },
    { x: new Date('2021-09-06'), open: 51786.82, high: 52915.84, low: 43293.32, close: 46057.23 },
    { x: new Date('2021-09-13'), open: 46039.93, high: 48791.96, low: 47245.92, close: 47245.92 },
    { x: new Date('2021-09-20'), open: 47271.55, high: 47305.84, low: 39656.42, close: 43191.40 },
    { x: new Date('2021-09-27'), open: 43165.54, high: 49174.45, low: 40815.78, close: 48228.69 },
    { x: new Date('2021-10-04'), open: 48218.45, high: 56437.09, low: 47003.51, close: 54700.76 },
    { x: new Date('2021-10-11'), open: 54655.75, high: 62822.22, low: 54079.10, close: 61523.40 },
    { x: new Date('2021-10-18'), open: 61552.37, high: 66949.94, low: 59558.25, close: 60868.92 },
    { x: new Date('2021-10-25'), open: 60867.76, high: 63699.12, low: 58058.47, close: 61351.32 },
    { x: new Date('2021-11-01'), open: 61352.82, high: 64249.80, low: 59605.80, close: 63303.29 },
    { x: new Date('2021-11-08'), open: 63384.59, high: 68944.62, low: 62326.04, close: 65495.04 },
    { x: new Date('2021-11-15'), open: 65584.00, high: 66330.26, low: 55667.64, close: 58739.86 },
    { x: new Date('2021-11-22'), open: 58728.88, high: 59418.54, low: 53459.33, close: 57321.25 },
    { x: new Date('2021-11-29'), open: 57391.20, high: 59198.33, low: 42640.28, close: 49460.66 },
    { x: new Date('2021-12-06'), open: 49480.77, high: 51963.21, low: 46858.12, close: 50109.42 },
    { x: new Date('2021-12-13'), open: 50089.17, high: 50203.10, low: 45512.88, close: 46705.19 },
    { x: new Date('2021-12-20'), open: 46661.78, high: 51833.26, low: 45595.74, close: 50792.40 },
    { x: new Date('2021-12-27'), open: 50844.50, high: 52048.01, low: 45675.42, close: 47319.42 },
    { x: new Date('2022-01-03'), open: 47301.32, high: 47565.48, low: 40586.60, close: 41859.09 },
    { x: new Date('2022-01-10'), open: 41847.93, high: 44421.10, low: 39683.91, close: 43101.47 },
    { x: new Date('2022-01-17'), open: 43105.85, high: 43502.98, low: 34110.96, close: 36290.58 },
    { x: new Date('2022-01-24'), open: 36270.05, high: 38895.80, low: 33025.14, close: 37939.38 },
    { x: new Date('2022-01-31'), open: 37930.72, high: 42658.05, low: 36293.42, close: 42413.08 },
    { x: new Date('2022-02-07'), open: 42438.44, high: 45796.15, low: 41711.43, close: 42070.67 },
    { x: new Date('2022-02-14'), open: 42085.75, high: 44754.70, low: 38033.60, close: 38381.51 },
    { x: new Date('2022-02-21'), open: 38404.05, high: 40215.56, low: 34361.12, close: 37710.59 },
    { x: new Date('2022-02-28'), open: 37717.48, high: 45227.11, low: 37478.65, close: 38410.35 },
    { x: new Date('2022-03-07'), open: 38400.92, high: 42572.39, low: 37189.16, close: 37792.11 },
    { x: new Date('2022-03-14'), open: 37783.07, high: 42375.07, low: 37587.45, close: 41273.14 },
    { x: new Date('2022-03-21'), open: 41288.72, high: 46895.64, low: 40542.79, close: 46856.56 },
    { x: new Date('2022-03-28'), open: 46833.04, high: 48195.89, low: 44277.20, close: 46414.76 },
    { x: new Date('2022-04-04'), open: 46415.90, high: 47176.04, low: 41934.05, close: 42137.52 },
    { x: new Date('2022-04-11'), open: 42132.90, high: 42419.43, low: 39253.14, close: 39693.56 },
    { x: new Date('2022-04-18'), open: 39670.70, high: 42955.32, low: 38589.79, close: 39470.34 },
    { x: new Date('2022-04-25'), open: 39464.34, high: 40766.59, low: 37450.67, close: 38480.85 },
    { x: new Date('2022-05-02'), open: 38472.61, high: 39990.39, low: 33746.39, close: 34034.44 },
    { x: new Date('2022-05-09'), open: 34043.58, high: 34221.20, low: 25454.67, close: 31293.37 },
    { x: new Date('2022-05-16'), open: 31283.44, high: 31283.44, low: 28616.29, close: 30263.82 },
    { x: new Date('2022-05-23'), open: 30254.10, high: 30624.23, low: 28045.49, close: 29453.36 },
    { x: new Date('2022-05-30'), open: 29451.26, high: 32334.63, low: 29284.03, close: 29903.65 },
    { x: new Date('2022-06-06'), open: 29902.00, high: 31738.11, low: 26574.79, close: 26574.79 },
    { x: new Date('2022-06-13'), open: 26555.20, high: 26845.56, low: 17607.69, close: 20555.59 },
    { x: new Date('2022-06-20'), open: 20550.86, high: 21826.97, low: 19626.09, close: 21035.61 },
    { x: new Date('2022-06-27'), open: 21025.17, high: 21491.45, low: 18666.70, close: 19292.40 },
    { x: new Date('2022-07-04'), open: 19300.60, high: 22381.01, low: 19041.66, close: 20840.28 },
    { x: new Date('2022-07-11'), open: 20847.58, high: 21652.95, low: 18934.52, close: 20781.72 },
    { x: new Date('2022-07-18'), open: 20787.06, high: 24267.57, low: 20771.86, close: 22588.63 },
    { x: new Date('2022-07-25'), open: 23647.10, high: 24177.99, low: 23253.88, close: 23314.06 }
  ];

export const FinancialPrimaryXAxis = {
    valueType: 'DateTime',
    minimum: new Date('2020, 3, 15'),
    maximum: new Date('2022, 7, 25'),
    crosshairTooltip: { enable: true },
    majorGridLines: { width: 0 },
};
  
export const BitcoinPrimaryYAxis = {
    title: 'Price',
    minimum: 4000,
    maximum: 70000,
    interval: 5000,
    lineStyle: { width: 0 },
    majorTickLines: { width: 0 },
};

export const ethereumChartData = [
    { x: new Date('2020-03-16'), open: 123.82, high: 152.55, low: 101.10, close: 122.32 },
    { x: new Date('2020-03-23'), open: 122.31, high: 143.36, low: 119.50, close: 124.50 },
    { x: new Date('2020-03-30'), open: 124.47, high: 149.76, low: 124.06, close: 142.68 },
    { x: new Date('2020-04-06'), open: 142.69, high: 176.22, low: 142.60, close: 158.59 },
    { x: new Date('2020-04-13'), open: 158.56, high: 189.54, low: 148.33, close: 180.03 },
    { x: new Date('2020-04-20'), open: 180.02, high: 200.00, low: 166.70, close: 197.38 },
    { x: new Date('2020-04-27'), open: 197.39, high: 227.30, low: 189.29, close: 209.86 },
    { x: new Date('2020-05-04'), open: 209.86, high: 216.61, low: 179.59, close: 187.54 },
    { x: new Date('2020-05-11'), open: 187.62, high: 209.85, low: 176.00, close: 207.00 },
    { x: new Date('2020-05-18'), open: 207.02, high: 217.07, low: 191.71, close: 199.90 },
    { x: new Date('2020-05-25'), open: 199.90, high: 247.00, low: 196.90, close: 231.57 },
    { x: new Date('2020-06-01'), open: 231.56, high: 253.80, low: 225.00, close: 244.56 },
    { x: new Date('2020-06-08'), open: 244.57, high: 250.28, low: 226.20, close: 231.77 },
    { x: new Date('2020-06-15'), open: 231.74, high: 237.30, low: 218.27, close: 228.04 },
    { x: new Date('2020-06-22'), open: 228.03, high: 249.24, low: 216.00, close: 224.93 },
    { x: new Date('2020-06-29'), open: 224.89, high: 232.71, low: 221.26, close: 227.56 },
    { x: new Date('2020-07-06'), open: 227.54, high: 248.88, low: 226.93, close: 242.79 },
    { x: new Date('2020-07-13'), open: 242.76, high: 245.33, low: 230.02, close: 239.11 },
    { x: new Date('2020-07-20'), open: 239.12, high: 318.75, low: 234.05, close: 311.00 },
    { x: new Date('2020-07-27'), open: 311.02, high: 415.85, low: 305.86, close: 372.42 },
    { x: new Date('2020-08-03'), open: 372.45, high: 407.00, low: 362.85, close: 390.14 },
    { x: new Date('2020-08-10'), open: 390.14, high: 444.71, low: 365.85, close: 433.62 },
    { x: new Date('2020-08-17'), open: 433.61, high: 446.00, low: 379.92, close: 390.71 },
    { x: new Date('2020-08-24'), open: 390.72, high: 429.89, low: 370.00, close: 428.94 },
    { x: new Date('2020-08-31'), open: 428.94, high: 488.84, low: 308.42, close: 352.80 },
    { x: new Date('2020-09-07'), open: 352.85, high: 390.43, low: 323.00, close: 366.42 },
    { x: new Date('2020-09-14'), open: 366.43, high: 394.14, low: 355.00, close: 371.04 },
    { x: new Date('2020-09-21'), open: 371.04, high: 376.80, low: 313.29, close: 357.49 },
    { x: new Date('2020-09-28'), open: 357.58, high: 370.45, low: 334.24, close: 352.37 },
    { x: new Date('2020-10-05'), open: 352.34, high: 378.40, low: 332.18, close: 374.16 },
    { x: new Date('2020-10-12'), open: 374.17, high: 394.80, low: 361.18, close: 378.11 },
    { x: new Date('2020-10-19'), open: 378.12, high: 420.73, low: 365.27, close: 405.86 },
    { x: new Date('2020-10-26'), open: 405.85, high: 411.11, low: 373.29, close: 396.67 },
    { x: new Date('2020-11-02'), open: 396.68, high: 468.28, low: 370.23, close: 454.30 },
    { x: new Date('2020-11-09'), open: 454.29, high: 478.01, low: 433.09, close: 448.08 },
    { x: new Date('2020-11-16'), open: 448.07, high: 580.88, low: 445.45, close: 560.03 },
    { x: new Date('2020-11-23'), open: 560.03, high: 623.00, low: 481.00, close: 576.30 },
    { x: new Date('2020-11-30'), open: 576.32, high: 635.70, low: 560.00, close: 601.54 },
    { x: new Date('2020-12-07'), open: 601.59, high: 603.15, low: 530.43, close: 590.70 },
    { x: new Date('2020-12-14'), open: 590.81, high: 676.25, low: 575.60, close: 638.18 },
    { x: new Date('2020-12-21'), open: 638.10, high: 717.13, low: 551.28, close: 685.11 },
    { x: new Date('2020-12-28'), open: 685.10, high: 1011.07, low: 681.04, close: 978.28 },
    { x: new Date('2021-01-04'), open: 978.33, high: 1348.33, low: 890.00, close: 1254.25 },
    { x: new Date('2021-01-11'), open: 1254.24, high: 1298.00, low: 915.00, close: 1232.45 },
    { x: new Date('2021-01-18'), open: 1232.50, high: 1438.30, low: 1042.31, close: 1392.51 },
    { x: new Date('2021-01-25'), open: 1392.19, high: 1475.00, low: 1207.00, close: 1312.55 },
    { x: new Date('2021-02-01'), open: 1312.45, high: 1760.49, low: 1269.99, close: 1611.62 },
    { x: new Date('2021-02-08'), open: 1611.46, high: 1871.72, low: 1563.89, close: 1800.42 },
    { x: new Date('2021-02-15'), open: 1800.03, high: 2042.34, low: 1655.67, close: 1933.53 },
    { x: new Date('2021-02-22'), open: 1933.54, high: 1936.29, low: 1293.18, close: 1419.18 },
    { x: new Date('2021-03-01'), open: 1418.67, high: 1734.16, low: 1409.91, close: 1726.16 },
    { x: new Date('2021-03-08'), open: 1726.46, high: 1944.30, low: 1664.96, close: 1848.10 },
    { x: new Date('2021-03-15'), open: 1848.10, high: 1891.76, low: 1711.68, close: 1782.98 },
    { x: new Date('2021-03-22'), open: 1783.23, high: 1807.51, low: 1536.92, close: 1687.01 },
    { x: new Date('2021-03-29'), open: 1687.16, high: 2146.00, low: 1677.85, close: 2075.69 },
    { x: new Date('2021-04-05'), open: 2075.70, high: 2200.00, low: 1930.01, close: 2151.36 },
    { x: new Date('2021-04-12'), open: 2151.42, high: 2548.29, low: 1946.80, close: 2235.64 },
    { x: new Date('2021-04-19'), open: 2235.65, high: 2644.47, low: 2055.00, close: 2320.49 },
    { x: new Date('2021-04-26'), open: 2320.44, high: 2985.00, low: 2303.64, close: 2949.56 },
    { x: new Date('2021-05-03'), open: 2949.33, high: 3983.65, low: 2949.32, close: 3923.95 },
    { x: new Date('2021-05-10'), open: 3923.95, high: 4372.72, low: 3343.06, close: 3582.10 },
    { x: new Date('2021-05-17'), open: 3581.81, high: 3587.06, low: 1728.74, close: 2096.39 },
    { x: new Date('2021-05-24'), open: 2096.63, high: 2910.00, low: 2079.94, close: 2385.98 },
    { x: new Date('2021-05-31'), open: 2385.82, high: 2891.95, low: 2271.44, close: 2711.92 },
    { x: new Date('2021-06-07'), open: 2711.92, high: 2847.55, low: 2256.22, close: 2509.33 },
    { x: new Date('2021-06-14'), open: 2509.33, high: 2640.00, low: 2040.68, close: 2243.47 },
    { x: new Date('2021-06-21'), open: 2243.49, high: 2260.16, low: 1700.48, close: 1982.28 },
    { x: new Date('2021-06-28'), open: 1982.27, high: 2389.93, low: 1960.52, close: 2322.69 },
    { x: new Date('2021-07-05'), open: 2322.69, high: 2409.00, low: 2046.51, close: 2140.45 },
    { x: new Date('2021-07-12'), open: 2140.54, high: 2167.83, low: 1844.45, close: 1891.64 },
    { x: new Date('2021-07-19'), open: 1891.65, high: 2199.50, low: 1706.00, close: 2189.79 },
    { x: new Date('2021-07-26'), open: 2189.82, high: 2697.61, low: 2150.50, close: 2555.69 },
    { x: new Date('2021-08-02'), open: 2555.50, high: 3189.99, low: 2442.32, close: 3011.85 },
    { x: new Date('2021-08-09'), open: 3011.84, high: 3330.98, low: 2893.23, close: 3307.09 },
    { x: new Date('2021-08-16'), open: 3307.35, high: 3335.00, low: 2950.00, close: 3238.00 },
    { x: new Date('2021-08-23'), open: 3238.00, high: 3377.89, low: 3053.30, close: 3223.47 },
    { x: new Date('2021-08-30'), open: 3223.47, high: 4027.88, low: 3143.00, close: 3950.29 },
    { x: new Date('2021-09-06'), open: 3950.28, high: 3970.00, low: 3005.00, close: 3404.21 },
    { x: new Date('2021-09-13'), open: 3404.30, high: 3676.28, low: 3108.49, close: 3328.62 },
    { x: new Date('2021-09-20'), open: 3328.57, high: 3347.82, low: 2652.00, close: 3059.37 },
    { x: new Date('2021-09-27'), open: 3059.36, high: 3488.00, low: 2782.00, close: 3417.73 },
    { x: new Date('2021-10-04'), open: 3417.73, high: 3695.00, low: 3270.00, close: 3414.22 },
    { x: new Date('2021-10-11'), open: 3414.22, high: 3971.00, low: 3371.00, close: 3846.85 },
    { x: new Date('2021-10-18'), open: 3847.00, high: 4375.00, low: 3676.00, close: 4082.33 },
    { x: new Date('2021-10-25'), open: 4082.33, high: 4460.47, low: 3890.17, close: 4287.21 },
    { x: new Date('2021-11-01'), open: 4287.48, high: 4665.87, low: 4146.30, close: 4612.59 },
    { x: new Date('2021-11-08'), open: 4612.59, high: 4868.00, low: 4461.93, close: 4626.50 },
    { x: new Date('2021-11-15'), open: 4626.50, high: 4772.01, low: 3956.44, close: 4258.31 },
    { x: new Date('2021-11-22'), open: 4259.70, high: 4551.00, low: 3913.00, close: 4294.78 },
    { x: new Date('2021-11-29'), open: 4294.77, high: 4778.75, low: 3503.68, close: 4196.44 },
    { x: new Date('2021-12-06'), open: 4196.44, high: 4488.00, low: 3828.22, close: 4130.00 },
    { x: new Date('2021-12-13'), open: 4130.00, high: 4142.75, low: 3643.73, close: 3924.14 },
    { x: new Date('2021-12-20'), open: 3924.14, high: 4150.00, low: 3753.00, close: 4063.56 },
    { x: new Date('2021-12-27'), open: 4063.57, high: 4127.46, low: 3585.00, close: 3828.27 },
    { x: new Date('2022-01-03'), open: 3828.11, high: 3900.73, low: 3000.00, close: 3151.97 },
    { x: new Date('2022-01-10'), open: 3151.97, high: 3411.43, low: 2928.83, close: 3346.88 },
    { x: new Date('2022-01-10'), open: 3151.97, high: 3411.43, low: 2928.83, close: 3346.88 },
    { x: new Date('2022-01-17'), open: 3346.89, high: 3357.57, low: 2300.00, close: 2539.01 },
    { x: new Date('2022-01-24'), open: 2539.00, high: 2722.00, low: 2159.00, close: 2601.68 },
    { x: new Date('2022-01-31'), open: 2601.67, high: 3074.56, low: 2476.07, close: 3054.99 },
    { x: new Date('2022-02-07'), open: 3055.00, high: 3283.66, low: 2836.70, close: 2871.13 },
    { x: new Date('2022-02-14'), open: 2871.14, high: 3196.19, low: 2576.00, close: 2621.99 },
    { x: new Date('2022-02-21'), open: 2621.99, high: 2878.00, low: 2300.00, close: 2616.79 },
    { x: new Date('2022-02-28'), open: 2616.79, high: 3043.91, low: 2535.00, close: 2551.29 },
    { x: new Date('2022-03-07'), open: 2551.30, high: 2775.85, low: 2445.00, close: 2515.65 },
    { x: new Date('2022-03-14'), open: 2515.66, high: 2987.70, low: 2498.67, close: 2861.38 },
    { x: new Date('2022-03-21'), open: 2861.39, high: 3299.37, low: 2829.81, close: 3295.65 },
    { x: new Date('2022-03-28'), open: 3295.65, high: 3580.34, low: 3210.68, close: 3521.91 },
    { x: new Date('2022-04-04'), open: 3521.90, high: 3555.00, low: 3143.15, close: 3203.04 },
    { x: new Date('2022-04-11'), open: 3203.04, high: 3213.63, low: 2950.00, close: 2988.06 },
    { x: new Date('2022-04-18'), open: 2988.07, high: 3180.00, low: 2883.22, close: 2921.00 },
    { x: new Date('2022-04-25'), open: 2920.99, high: 3039.54, low: 2709.26, close: 2824.81 },
    { x: new Date('2022-05-02'), open: 2824.81, high: 2965.85, low: 2484.00, close: 2519.71 },
    { x: new Date('2022-05-09'), open: 2519.71, high: 2530.78, low: 1800.00, close: 2145.29 },
    { x: new Date('2022-05-16'), open: 2145.29, high: 2145.29, low: 1903.18, close: 2043.19 },
    { x: new Date('2022-05-23'), open: 2043.19, high: 2088.50, low: 1703.00, close: 1813.64 },
    { x: new Date('2022-05-30'), open: 1813.64, high: 2016.45, low: 1737.00, close: 1806.23 },
    { x: new Date('2022-06-06'), open: 1806.22, high: 1920.00, low: 1423.00, close: 1434.84 },
    { x: new Date('2022-06-13'), open: 1434.84, high: 1455.00, low: 881.56, close: 1128.53 },
    { x: new Date('2022-06-20'), open: 1128.53, high: 1280.00, low: 1043.65, close: 1197.79 },
    { x: new Date('2022-06-27'), open: 1197.79, high: 1238.93, low: 998.00, close: 1074.26 },
    { x: new Date('2022-07-04'), open: 1074.26, high: 1276.46, low: 1045.37, close: 1168.36 },
    { x: new Date('2022-07-11'), open: 1168.37, high: 1422.91, low: 1006.32, close: 1338.65 },
    { x: new Date('2022-07-18'), open: 1338.65, high: 1664.34, low: 1336.07, close: 1597.70 },
    { x: new Date('2022-07-25'), open: 1597.70, high: 1784.79, low: 1356.17, close: 1678.12 },
];

export const EthereumPrimaryYAxis = {
    title: 'Price',
    minimum: 100,
    maximum: 5000,
    interval: 400,
    lineStyle: { width: 0 },
    majorTickLines: { width: 0 },
};

export const scheduleData = [
    {
      Id: 1,
      Subject: 'GAUCHECASH',
      Location: 'Ethereum',
      LocationImg: 'https://assets.coingecko.com/coins/images/279/thumb/ethereum.png?1595348880',
      StartTime: '2022-08-02T00:00:00.000Z',
      EndTime: '2022-08-02T00:00:00.000Z',
      IsAllDay: true,
    },
    {
      Id: 2,
      Subject: 'BLACKROSE COIN',
      Location: 'BSC',
      LocationImg: 'https://assets.coingecko.com/coins/images/825/thumb/bnb-icon2_2x.png?1644979850',
      StartTime: '2022-08-05T00:00:00.000Z',
      EndTime: '2022-08-05T00:00:00.000Z',
      IsAllDay: true,
    },
    {
      Id: 3,
      Subject: 'Sanzooz Finance',
      Location: 'Ethereum',
      LocationImg: 'https://assets.coingecko.com/coins/images/279/thumb/ethereum.png?1595348880',
      StartTime: '2022-08-03T00:00:00.000Z',
      EndTime: '2022-08-03T00:00:00.000Z',
      IsAllDay: true,
    },
    {
      Id: 4,
      Subject: 'Kweek Coin',
      Location: 'BSC',
      LocationImg: 'https://assets.coingecko.com/coins/images/825/thumb/bnb-icon2_2x.png?1644979850',
      StartTime: '2022-08-09T00:00:00.000Z',
      EndTime: '2022-08-09T00:00:00.000Z',
      IsAllDay: true,
    },
    {
      Id: 5,
      Subject: 'RoboApe',
      Location: 'Ethereum',
      LocationImg: 'https://assets.coingecko.com/coins/images/279/thumb/ethereum.png?1595348880',
      StartTime: '2022-08-11T00:00:00.000Z',
      EndTime: '2022-08-11T00:00:00.000Z',
      IsAllDay: true,
    },
    {
      Id: 6,
      Subject: 'Gnox',
      Location: 'BSC',
      LocationImg: 'https://assets.coingecko.com/coins/images/825/thumb/bnb-icon2_2x.png?1644979850',
      StartTime: '2022-08-12T00:00:00.000Z',
      EndTime: '2022-08-12T00:00:00.000Z',
      IsAllDay: true,
    },
    {
      Id: 7,
      Subject: 'GEMS',
      Location: 'TRON',
      LocationImg: 'https://assets.coingecko.com/coins/images/1094/thumb/tron-logo.png?1547035066',
      StartTime: '2022-08-22T00:00:00.000Z',
      EndTime: '2022-08-22T00:00:00.000Z',
      IsAllDay: true,
    },
    {
      Id: 8,
      Subject: 'Magnium Token',
      Location: 'Ethereum',
      LocationImg: 'https://assets.coingecko.com/coins/images/279/thumb/ethereum.png?1595348880',
      StartTime: '2022-08-17T00:00:00.000Z',
      EndTime: '2022-08-17T00:00:00.000Z',
      IsAllDay: true,
    },
    {
      Id: 9,
      Subject: 'Avoteo',
      Location: 'BSC',
      LocationImg: 'https://assets.coingecko.com/coins/images/825/thumb/bnb-icon2_2x.png?1644979850',
      StartTime: '2022-08-10T00:00:00.000Z',
      EndTime: '2022-08-10T00:00:00.000Z',
      IsAllDay: true,
    },
    {
      Id: 10,
      Subject: 'exeno coin',
      Location: 'Ethereum',
      LocationImg: 'https://assets.coingecko.com/coins/images/279/thumb/ethereum.png?1595348880',
      StartTime: '2022-08-15T00:00:00.000Z',
      EndTime: '2022-08-15T00:00:00.000Z',
      IsAllDay: true,
    },
    {
      Id: 11,
      Subject: 'Uniglo',
      Location: 'Ethereum',
      LocationImg: 'https://assets.coingecko.com/coins/images/279/thumb/ethereum.png?1595348880',
      StartTime: '2022-10-07T00:00:00.000Z',
      EndTime: '2022-10-07T00:00:00.000Z',
      IsAllDay: true,
    },
    {
      Id: 12,
      Subject: 'GameStack',
      Location: 'BSC',
      LocationImg: 'https://assets.coingecko.com/coins/images/825/thumb/bnb-icon2_2x.png?1644979850',
      StartTime: '2022-08-01T00:00:00.000Z',
      EndTime: '2022-08-01T00:00:00.000Z',
      IsAllDay: true,
    },
    {
      Id: 13,
      Subject: 'Jindo Inu',
      Location: 'BSC',
      LocationImg: 'https://assets.coingecko.com/coins/images/825/thumb/bnb-icon2_2x.png?1644979850',
      StartTime: '2022-08-08T00:00:00.000Z',
      EndTime: '2022-08-08T00:00:00.000Z',
      IsAllDay: true,
    },
    {
      Id: 14,
      Subject: 'Great Deal Coin',
      Location: 'BSC',
      LocationImg: 'https://assets.coingecko.com/coins/images/825/thumb/bnb-icon2_2x.png?1644979850',
      StartTime: '2022-08-16T00:00:00.000Z',
      EndTime: '2022-08-16T00:00:00.000Z',
      IsAllDay: true,
    },
    {
      Id: 15,
      Subject: 'Gerino Coin',
      Location: 'BSC',
      LocationImg: 'https://assets.coingecko.com/coins/images/825/thumb/bnb-icon2_2x.png?1644979850',
      StartTime: '2022-08-20T00:00:00.000Z',
      EndTime: '2022-08-20T00:00:00.000Z',
      IsAllDay: true,
    },
    {
      Id: 16,
      Subject: 'Legendary PAW',
      Location: 'BSC',
      LocationImg: 'https://assets.coingecko.com/coins/images/825/thumb/bnb-icon2_2x.png?1644979850',
      StartTime: '2022-08-24T00:00:00.000Z',
      EndTime: '2022-08-24T00:00:00.000Z',
      IsAllDay: true,
    },
    {
      Id: 17,
      Subject: 'Reit Coin',
      Location: 'Ethereum',
      LocationImg: 'https://assets.coingecko.com/coins/images/279/thumb/ethereum.png?1595348880',
      StartTime: '2022-08-25T00:00:00.000Z',
      EndTime: '2022-08-25T00:00:00.000Z',
      IsAllDay: true,
    },
    {
      Id: 18,
      Subject: 'Armacoin',
      Location: 'Ethereum',
      LocationImg: 'https://assets.coingecko.com/coins/images/279/thumb/ethereum.png?1595348880',
      StartTime: '2022-08-26T00:00:00.000Z',
      EndTime: '2022-08-26T00:00:00.000Z',
      IsAllDay: true,
    },
    {
      Id: 19,
      Subject: 'CryptoDragons Coin',
      Location: 'Ethereum',
      LocationImg: 'https://assets.coingecko.com/coins/images/279/thumb/ethereum.png?1595348880',
      StartTime: '2022-08-30T00:00:00.000Z',
      EndTime: '2022-08-30T02:00:00.000Z',
      IsAllDay: true,
    },
    {
      Id: 20,
      Subject: 'A4R Fitness Lifestyle Token',
      Location: 'BSC',
      LocationImg: 'https://assets.coingecko.com/coins/images/825/thumb/bnb-icon2_2x.png?1644979850',
      StartTime: '2022-08-31T00:00:00.000Z',
      EndTime: '2022-08-31T00:00:00.000Z',
      IsAllDay: true,
    },
  ];

  export const todoData = [
    {
      Id: 'SYL',
      Status: 'Open',
      Summary: 'Define a strategy to eventually participate to this ICO.',
      Assignee: 'ICO',
    },
    {
      Id: 'Lightning Location',
      Status: 'InProgress',
      Summary: 'Learn how Lightning Location is working',
      Assignee: 'Bitcoin',
    },
    {
      Id: 'Incomplete Guide to Rollups',
      Status: 'Open',
      Summary: 'Read an Incomplete Guide to Rollups from Vitalik.',
      Assignee: 'Ethereum',
    },
    {
      Id: 'Whitepaper',
      Status: 'Close',
      Summary: 'Read the Ethereum Whitepaper.',
      Assignee: 'Ethereum',
    },
    {
      Id: 'Binance Smart Chain',
      Status: 'Close',
      Summary: 'Read the Binance Smart Chain Whitepaper.',
      Assignee: 'Binance',
    },
    {
      Id: 'Bitcoin',
      Status: 'Open',
      Summary: 'Create a recurring purchase of Bitcoin on Binance.',
      Assignee: 'Binance',
    },
    {
      Id: 'Soul Bound Token',
      Status: 'InProgress',
      Summary: 'Learn how to create SBT.',
      Assignee: 'Ethereum',
    },
    {
      Id: 'Whitepaper',
      Status: 'Close',
      Summary: 'Read the Bitcoin Whitepaper.',
      Assignee: 'Bitcoin',
    },
    {
      Id: 'Binance NFT',
      Status: 'Close',
      Summary: 'Publish my NFT to the Binance marketplace.',
      Assignee: 'Binance',
    },
    {
      Id: 'Axie Infinity',
      Status: 'Close',
      Summary: 'Create my new team of Axies to prepare myself for Origin.',
      Assignee: 'Play To Earn',
    },
    {
      Id: 'Vitalik Buterin',
      Status: 'Close',
      Summary: 'Discover who he is (much easier than Satoshi Nakamoto).',
      Assignee: 'Ethereum',
    },
    {
      Id: 'Task 18',
      Status: 'Validate',
      Summary: 'Validate editing issues.',
      Assignee: 'ICO',
    },
    {
      Id: 'Task 19',
      Status: 'Review',
      Summary: 'Test editing functionality.',
      Assignee: 'ICO',
    },
    {
      Id: 'Satoshi Nakamoto',
      Status: 'Open',
      Summary: 'Discover who he is. Or not.',
      Assignee: 'Bitcoin',
    },
    {
      Id: 'Galeon',
      Status: 'InProgress',
      Summary: 'Participate to the ICO and stake the token.',
      Assignee: 'ICO',
    },
    {
      Id: 'STEPN',
      Status: 'Open',
      Summary: 'Participate to the Genesis sneaker event',
      Assignee: 'Play To Earn',
    },
  ];
  
  export const todoGrid = [
    {
        headerText: 'To Do',
        keyField: 'Open',
        allowToggle: true
    },  
    {
        headerText: 'In Progress',
        keyField: 'InProgress',
        allowToggle: true
    },
    {
        headerText: 'Done',
        keyField: 'Close',
        allowToggle: true
    },
  ];

  export const NotesData = () => (
    <div>
        <h3>Bitcoin: A Peer-to-Peer Electronic Cash System</h3>
        <p><strong>Abstract.</strong> A  purely   peer-to-peer   version   of   electronic   cash   would   allow   online payments   to   be   sent   directly   from   one   party   to   another   without   going   through   a financial institution.   Digital signatures provide part of the solution, but the main benefits are lost if a trusted third party is still required to prevent double-spending. We propose a solution to the double-spending problem using a peer-to-peer network. The   network   timestamps   transactions   by   hashing   them   into   an   ongoing   chain   of hash-based proof-of-work, forming a record that cannot be changed without redoing the proof-of-work.   The longest chain not only serves as proof of the sequence of events witnessed, but proof that it came from the largest pool of CPU power.   As long as a majority of CPU power is controlled by nodes that are not cooperating to attack the network,  they'll  generate the  longest  chain  and  outpace attackers.   The network itself requires minimal structure.   Messages are broadcast on a best effort basis,   and   nodes   can   leave   and   rejoin   the   network   at   will,   accepting   the   longest proof-of-work chain as proof of what happened while they were gone.</p>
        <h4>1. Introduction</h4>
        <p>Commerce on the Internet has come to rely almost exclusively on financial institutions serving as trusted third  parties  to process electronic payments.   While the  system works  well enough for most   transactions,   it   still   suffers   from   the   inherent   weaknesses   of   the   trust   based   model. Completely non-reversible transactions are not really possible, since financial institutions cannot avoid   mediating   disputes.     The   cost   of   mediation   increases   transaction   costs,   limiting   the minimum practical transaction size and cutting off the possibility for small casual transactions, and   there   is   a   broader   cost   in   the   loss   of   ability   to   make   non-reversible   payments   for   non-reversible services.  With the possibility of reversal, the need for trust spreads.  Merchants must be wary of their customers, hassling them for more information than they would otherwise need. A certain percentage of fraud is accepted as unavoidable.  These costs and payment uncertainties can be avoided in person by using physical currency, but no mechanism exists to make payments over a communications channel without a trusted party.</p>
        <p>What is needed is an electronic payment system based on cryptographic proof instead of trust, allowing any two willing parties to transact directly with each other without the need for a trusted third  party.    Transactions  that  are  computationally  impractical  to   reverse   would  protect  sellers from fraud, and routine escrow mechanisms could easily be implemented to protect buyers.   In this paper, we propose a solution to the double-spending problem using a peer-to-peer distributed timestamp server to generate computational proof of the chronological order of transactions.  The system   is   secure   as   long   as   honest   nodes   collectively   control   more   CPU   power   than   any cooperating group of attacker nodes.</p>
    </div>
  );