import React, { useState } from 'react'
import Header from './Components/Common/header/header'
import TabOptions from './Components/Common/tabOptions/TabOptions'
import Footer from './Components/Common/footer/footer'
import Delivery from './Components/delivery/Delivery'
import DiningOut from './Components/diningOut/DiningOut'
import NightLife from './Components/nightLife/NightLife'

const App = () => {

  const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <div>
      <Header />
      <TabOptions activeTab = {activeTab} setActiveTab = {setActiveTab} />
      {getCorrectScreen(activeTab)}
      <Footer />
    </div>
  )
}

const getCorrectScreen = (tab) =>{
  switch (tab) {
    case "Delivery":
      return <Delivery />;
    case "Dining Out":
      return <DiningOut />;
    case "NightLife":
      return <NightLife />;
    default:
      return <Delivery />;
  }
}

export default App
