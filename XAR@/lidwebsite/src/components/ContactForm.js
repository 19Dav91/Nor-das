// ContactForm.js
import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  margin: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
`;

const TextArea = styled.textarea`
  margin-bottom: 10px;
  padding: 8px;
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

const ContactForm = () => {
  // Логика для формы обратной связи

  return (
    <ContactContainer>
      <h2>Свяжитесь с нами:</h2>
      <Form>
        <Input type="text" placeholder="Ваше имя" />
        <Input type="email" placeholder="Email" />
        <TextArea placeholder="Сообщение" />
        <Button>Отправить</Button>
      </Form>
    </ContactContainer>
  );
};

export default ContactForm;
