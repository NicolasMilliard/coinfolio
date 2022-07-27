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