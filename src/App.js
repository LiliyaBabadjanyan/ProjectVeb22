import React from 'react';
import Header from "./сomponents/header/Header";
import ServicesScrin from "./сomponents/Services/ServiceScreen/ServicesScrin";
import SupportScreen from "./сomponents/support/supportScreen/SupportScreen";
import BurgerMenu from "./сomponents/burgerMenu/BurgerMenu";
import ExpirienceScreen from "./сomponents/expirience/ExpirienceScreen";
import PacksScreen from "./сomponents/Packs/Packs/PacksScreen";
import WorkerScreen from "./сomponents/workers/workerScreen/WorkerScreen";

function App() {

    return (
        <div className="App">
            <Header/>
            <ServicesScrin/>
            <SupportScreen/>
            <BurgerMenu/>
            <ExpirienceScreen/>
            <PacksScreen/>
            <WorkerScreen/>
        </div>
    );
}

export default App;
