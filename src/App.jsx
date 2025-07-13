import { useState, useEffect } from "react";

import Description  from "./components/description/description";
import  OptionsUi  from "./components/options/options";
import  FeedbackUi  from "./components/feedback/feedback";
import NotificationUi from "./components/Notification/notification";


export const App = () => {
  const [clicks, setClicks] = useState(() => {
    const savedClicks = window.localStorage.getItem("saved-clicks");
    return savedClicks ? JSON.parse(savedClicks) :
      {
        good: 0,
        neutral: 0,
        bad: 0,
    }
  });

  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;
  
  const updateFeedback = feedbackType => {
    setClicks(clicks => ({
      ...clicks,
      [feedbackType]: clicks[feedbackType] + 1
    }))
  }

  const positive = Math.round((clicks.good / totalFeedback) * 100)

  
  const resetUpdate = () => {
    setClicks({
      good: 0,
      neutral: 0,
      bad: 0
    })
  }
  useEffect(() => {
    window.localStorage.setItem("saved-clicks", JSON.stringify(clicks))
  }, [clicks]);
  
  return (
    <div>
      <Description />
      
      <OptionsUi onUpdateFeedback={updateFeedback} onReset={resetUpdate} totalFeedback={totalFeedback} />

      {totalFeedback > 0 ? (<FeedbackUi clicks={clicks} onPositive={positive} totalFeedback={totalFeedback} />) : (<NotificationUi />)}
     
    </div>
  )
}