import React, { useState } from 'react';
import './App.css';
import Statistics from "./Components/Statistics/Statistics"
import  FeedbackOptions from "./Components/FeedbackOptions/FeedbackOptions"
import Section from './Components/Section/Section'

const options = {
  good: 'good',
  neutral: 'neutral',
  bad: 'bad',
};



export default function App () {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);



  const countTotalFeedback = () => good + neutral + bad;
 
  const countPositiveFeedbackPercentage = () => Math.round((good * 100) / countTotalFeedback());

  const addFeedback = (evt) => {
    
    switch (evt) {
      case 'good':
        setGood(state => state + 1);
        break;

      case 'neutral':
        setNeutral(state => state + 1);
        break;

      case 'bad':
        setBad(state => state + 1);
        break;

      default:
        return;
    }
    
  }


    const total = countTotalFeedback();
    const countFeedback = countPositiveFeedbackPercentage();
  

    return (
      <div className="container">
        <Section title="Please leave feedback">
          
          <FeedbackOptions
            value={options}
            onLeaveFeedback={addFeedback}
          />
        </Section>
      

        <Section title="Statistics">
           {total > 0 ? (
          <Statistics
            good = {good}
            neutral= {neutral}
            bad = {bad}
            total={total}
            countFeedback = {countFeedback}
          />) : 
            <div>No feedback given</div> 
          }
       </Section>
      </div>
    )
  
}


