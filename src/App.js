import React from 'react';
import Header from "./сomponents/header/Header";
import ServicesScrin from "./сomponents/Services/ServiceScreen/ServicesScrin";
import SupportScreen from "./сomponents/support/supportScreen/SupportScreen";
import BurgerMenu from "./сomponents/burgerMenu/BurgerMenu";
import ExpirienceScreen from "./сomponents/expirience/ExpirienceScreen";
import PacksScreen from "./сomponents/Packs/Packs/PacksScreen";
import WorkerScreen from "./сomponents/workers/workerScreen/WorkerScreen";
import DevSpeedScreen from "./сomponents/devSpeedScreen/devSpeedScreen";

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
            <BurgerMenu/>
            <ExpirienceScreen/>
            <PacksScreen/>
            <DevSpeedScreen/>
            <WorkerScreen/>
        </div>
    );
}

export default App;
