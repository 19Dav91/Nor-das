// ServicesList.js
import React from 'react';
import styled from 'styled-components';

const ServicesContainer = styled.div`
  margin: 20px;
`;

const ServiceItem = styled.li`
  margin-bottom: 20px;
  list-style: none;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
  background-color: #f9f9f9;
`;

const Button = styled.button`
  background-color: #ffcc00;
  color: #333;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff9900;
  }
`;

const ServicesList = () => {
    const services = [
        { id: 1, title: 'Маникюр', description: 'Услуги маникюра', price: '$20' },
        { id: 2, title: 'Педикюр', description: 'Услуги педикюра', price: '$30' },
        // Другие услуги...
    ];

    return (
        <ServicesContainer>
            <h2>Наши услуги:</h2>
            <ul>
                {services.map(service => (
                    <ServiceItem key={service.id}>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        <p>Цена: {service.price}</p>
                        <Button>Записаться</Button>
                    </ServiceItem>
                ))}
            </ul>
        </ServicesContainer>
    );
};

export default ServicesList;
