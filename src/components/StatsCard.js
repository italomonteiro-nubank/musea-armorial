import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid #f0f0f0;
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
  }
`;

const Title = styled.h3`
  font-size: 14px;
  font-weight: 500;
  color: #666;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const Value = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 8px;
`;

const Period = styled.div`
  font-size: 12px;
  color: #999;
  font-weight: 400;
`;

const StatsCard = ({ title, value, period }) => {
  return (
    <Card>
      <Title>{title}</Title>
      <Value>{value?.toLocaleString('pt-BR')}</Value>
      <Period>{period}</Period>
    </Card>
  );
};

export default StatsCard; 