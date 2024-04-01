// App.js
import React from 'react';
import Header from './components/Header';
import ServicesList from './components/ServicesList';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import GlobalStyles from './styles/GlobalStyles';
import './App.css'

const App = () => {
    return (
        <div>
            <GlobalStyles />
            <Header />
            <ServicesList />
            <ContactForm />
            <Footer />
        </div>
    );
};

export default App;
