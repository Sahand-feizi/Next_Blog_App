'use client'
import React, { useRef } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useGetAllComment } from './useGetAllComment';
import Button from '@/ui/Button';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

export const options = {
    responsive: false, // ❌ غیرفعال کردن ریسپانسیو، اندازه ثابت
    plugins: {
        legend: {
            display: false, // حذف legend
        },
        title: {
            display: false, // حذف title
        },
        tooltip: {
            callbacks: {
                label: function (context) {
                    return context.formattedValue; // فقط عدد نشان داده شود
                }
            }
        }
    },
    scales: {
        x: {
            ticks: {
                font: {
                    family: 'sans-serif',
                    size: 10,
                }
            }
        },
        y: {
            beginAtZero: true,
        },
    },
};

const labels = [
    "فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور",
    "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"
];

export default function Chart() {
    const chartRef = useRef(null);
    const { ChartYearComment, comments } = useGetAllComment()

    const data = {
        labels,
        datasets: [
            {
                data: ChartYearComment,
                fill: true,
                tension: 0.4,
                borderColor: 'rgba(255, 255, 255, 1)',
                backgroundColor: function (context) {
                    const chart = context.chart;
                    const { ctx, chartArea } = chart;
                    if (!chartArea) return 'rgba(75,192,192,0.2)';
                    const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
                    gradient.addColorStop(0, 'rgba(255, 255, 255,0.5)');
                    gradient.addColorStop(1, 'rgba(255, 255, 255,0)');
                    return gradient;
                },
                pointBackgroundColor: '#fff',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#fff',
            },
        ],
    };

    return (
        <div className='col-span-12 md:row-span-3 md:col-span-8 p-4 rounded-xl bg-secondary-950'>
            <div className='flex items-start justify-between'>
                <div>
                    <h2 className="text-6xl md:text-7xl font-black text-secondary-0">{comments?.length}</h2>
                    <p className="text-xs md:text-sm font-normal text-secondary-300">تعداد نظرات</p>
                </div>
                <Button variant={'white'}
                    className={`border-2 !border-secondary-0 !text-secondary-0 !py-1 !px-3 bg-secondary-400/40
            !rounded-full`}>
                    سالانه
                </Button>
            </div>

            <div className='overflow-x-auto mt-4'>
                <div className='inline-block min-w-[600px]'>
                    <Line
                        ref={chartRef}
                        data={data}
                        options={{ ...options, responsive: false }}
                        width={600}
                        height={300} 
                    />
                </div>
            </div>
        </div>
    )
}
