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
    { x: 'DOGE', y: 13.72, text: '17327.07 DOGE' },
    { x: 'BTC', y: 32.45, text: '0.1246 BTC' },
    { x: 'ETH', y: 30.02, text: '1.6146 ETH' },
    { x: 'BNB', y: 23.81, text: '7.8695 BNB' }
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
  
  export const FinancialPrimaryYAxis = {
    title: 'Price',
    minimum: 4000,
    maximum: 70000,
    interval: 5000,
    lineStyle: { width: 0 },
    majorTickLines: { width: 0 },
  };