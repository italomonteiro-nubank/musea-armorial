import React, { useState } from 'react';
import styled from 'styled-components';
import { Printer, ChevronDown } from 'lucide-react';
import { cityData, getUnifiedData } from '../data/mockData';
import StatsCard from './StatsCard';
import LineChart from './LineChart';
import BarChart from './BarChart';

const Container = styled.div`
  min-height: 100vh;
  background: #f8fafc;
  padding: 24px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const Controls = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: stretch;
  }
`;

const SelectContainer = styled.div`
  position: relative;
`;

const Select = styled.select`
  appearance: none;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 12px 48px 12px 16px;
  font-size: 14px;
  font-weight: 500;
  color: #1a1a1a;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 200px;
  
  &:hover {
    border-color: #d1d5db;
  }
  
  &:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
  }
`;

const SelectIcon = styled(ChevronDown)`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  color: #666;
  pointer-events: none;
`;

const PrintButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 12px;
  padding: 12px 20px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: #1d4ed8;
  }
  
  &:active {
    transform: translateY(1px);
  }
  
  @media print {
    display: none;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
`;

const ChartsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  
  @media (min-width: 1200px) {
    grid-template-columns: 2fr 1fr;
  }
`;

const ChartsColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Dashboard = () => {
  const [selectedCity, setSelectedCity] = useState('unified');
  
  const getCurrentData = () => {
    if (selectedCity === 'unified') {
      return getUnifiedData();
    }
    return cityData[selectedCity];
  };

  const currentData = getCurrentData();

  const handlePrint = () => {
    window.print();
  };

  const cityOptions = [
    { value: 'unified', label: 'Todas as Cidades' },
    { value: 'fortaleza', label: 'Fortaleza' },
    { value: 'natal', label: 'Natal' },
    { value: 'salvador', label: 'Salvador' },
  ];

  return (
    <Container>
      <Header>
        <Title>Movimento Armorial 50 - {currentData.name}</Title>
        <Controls className="no-print">
          <SelectContainer>
            <Select 
              value={selectedCity} 
              onChange={(e) => setSelectedCity(e.target.value)}
            >
              {cityOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
            <SelectIcon />
          </SelectContainer>
          <PrintButton onClick={handlePrint}>
            <Printer size={16} />
            Imprimir
          </PrintButton>
        </Controls>
      </Header>

      <StatsGrid>
        <StatsCard
          title="Total de Acessos"
          value={currentData.totalAccess}
          period={currentData.period}
        />
        <StatsCard
          title="Média Diária"
          value={Math.round(currentData.totalAccess / currentData.dailyData.length)}
          period="Visitas por dia"
        />
        <StatsCard
          title="Pico de Visitas"
          value={Math.max(...currentData.dailyData.map(d => d.visits))}
          period="Maior número em um dia"
        />
      </StatsGrid>

      <ChartsGrid>
        <ChartsColumn>
          <LineChart
            data={currentData.dailyData}
            title="Total por dia"
            subtitle={`Período: ${currentData.period}`}
          />
          <BarChart
            data={currentData.resources}
            title="Por recurso"
            subtitle={`Período: ${currentData.period}`}
            colorScheme="green"
          />
        </ChartsColumn>
        
        <ChartsColumn>
          <BarChart
            data={currentData.artworks}
            title="Por obra"
            subtitle={`Período: ${currentData.period}`}
            colorScheme="purple"
          />
          <BarChart
            data={currentData.cities}
            title="Por cidade"
            subtitle={`Período: ${currentData.period}`}
            colorScheme="orange"
          />
        </ChartsColumn>
      </ChartsGrid>
    </Container>
  );
};

export default Dashboard; 