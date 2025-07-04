import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartContainer = styled.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid #f0f0f0;
  margin-bottom: 24px;
`;

const ChartTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 16px;
`;

const ChartSubtitle = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 24px;
`;

const BarChart = ({ data, title, subtitle, colorScheme = 'blue' }) => {
  const colorMap = {
    blue: ['#2563eb', '#3b82f6', '#60a5fa', '#93c5fd', '#dbeafe'],
    green: ['#059669', '#10b981', '#34d399', '#6ee7b7', '#a7f3d0'],
    purple: ['#7c3aed', '#8b5cf6', '#a78bfa', '#c4b5fd', '#ddd6fe'],
    orange: ['#ea580c', '#f97316', '#fb923c', '#fdba74', '#fed7aa'],
    red: ['#dc2626', '#ef4444', '#f87171', '#fca5a5', '#fecaca'],
  };

  const colors = colorMap[colorScheme];

  const options = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: '#1a1a1a',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        cornerRadius: 8,
        displayColors: false,
      },
    },
    scales: {
      x: {
        grid: {
          color: '#f0f0f0',
        },
        ticks: {
          color: '#666',
          font: {
            size: 12,
          },
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#666',
          font: {
            size: 12,
          },
        },
      },
    },
    elements: {
      bar: {
        borderRadius: 4,
      },
    },
  };

  const chartData = {
    labels: data.map(item => item.name),
    datasets: [
      {
        label: 'Valor',
        data: data.map(item => item.value),
        backgroundColor: data.map((_, index) => colors[index % colors.length]),
        borderColor: 'transparent',
        borderWidth: 0,
      },
    ],
  };

  return (
    <ChartContainer>
      <ChartTitle>{title}</ChartTitle>
      <ChartSubtitle>{subtitle}</ChartSubtitle>
      <div style={{ height: `${Math.max(data.length * 40, 200)}px` }}>
        <Bar options={options} data={chartData} />
      </div>
    </ChartContainer>
  );
};

export default BarChart; 