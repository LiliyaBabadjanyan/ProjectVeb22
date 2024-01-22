import React from 'react';
import Header from "./сomponents/header/Header";
import ServicesScrin from "./сomponents/Services/ServiceScreen/ServicesScrin";
import SupportScreen from "./сomponents/support/supportScreen/SupportScreen";
import ExpirienceScreen from "./сomponents/expirience/ExpirienceScreen";
import PacksScreen from "./сomponents/Packs/Packs/PacksScreen";
import WorkerScreen from "./сomponents/workers/workerScreen/WorkerScreen";
import DevSpeedScreen from "./сomponents/devSpeedScreen/devSpeedScreen";
import SliderColoborators from "./сomponents/Slider/SliderColoborators";
import Faq from "./сomponents/Faq/faq";

function App() {
    const headerData = [
        {
            menuItems: [
                { label: "ПОДДЕРЖКА DRUPAL", type: 'a' },
                { label: "АДМИНИСТРИРОВАНИЕ", type: 'a', options: ["МИГРАЦИЯ", "БЭКАПЫ", "АУДИТ БЕЗОПАСНОСТИ", "ОПТИМИЗАЦИЯ СКОРОСТИ", "ПЕРЕЕЗД НА HTTPS"] },
                { label: "ПРОДВИЖЕНИЕ", type: 'a' },
                { label: "РЕКЛАМА", type: 'a' },
                { label: "О НАС", type: 'a', options: ["КОМАНДА", "DRUPALGIVE", "БЛОГ", "КУРСЫ DRUPAL"] },
                { label: "ПРОЕКТЫ", type: 'a' },
                { label: "Контакты", type: 'a' }
            ],
            number: "8 800 222-26-73",
            locale: "RU",
            languageOptions: ["EN", "CH"]
        },
    ];

    return (
        <div className="App">
            {headerData.map((data, index) => (
                <Header key={index} {...data} />
            ))}
            <ServicesScrin/>
            <SupportScreen/>
            <ExpirienceScreen/>
            <PacksScreen/>
            <DevSpeedScreen/>
            <WorkerScreen/>
            <SliderColoborators/>
            <Faq/>
        </div>
    );
}

export default App;
