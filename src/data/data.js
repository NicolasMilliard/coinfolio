import React from 'react'
import { SiBitcoin, SiEthereum, SiBinance } from 'react-icons/si'
import { BiPieChart, BiCoin, BiListUl, BiTrendingUp, BiCalendar } from 'react-icons/bi'
import { RiTodoLine } from 'react-icons/ri'
import { BsTextLeft } from 'react-icons/bs'

export const links = [
    {
        title: 'Dashboard',
        links: [
            {
                name: 'overview',
                icon: <BiPieChart />,
                link: 'overview'
            },
        ],
    },
    {
        title: 'Pages',
        links: [
            {
                name: 'portfolio',
                icon: <BiCoin />,
                link: 'portfolio'
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
            },
            {
                name: 'BNB-USD',
                icon: <SiBinance />,
                link: 'bnb-usd'
            },
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
    { x: 'USDC', y: 1224, text: '1224.57 USDC' },
    { x: 'BTC', y: 2895, text: '0.1246 BTC' },
    { x: 'ETH', y: 2678, text: '1.6146 ETH' },
    { x: 'BNB', y: 2124, text: '7.8695 BNB' }
];