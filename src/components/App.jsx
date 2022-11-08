import React, { useState } from 'react';
import { FeedbackSet, Section, Statistic, Notification } from './Compon';


export default function App() { 
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const onFeedbackClicked = type => {
    switch (type) {
      case 'good':
        setGood(prevState => prevState + 1)
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1)
        break;
      case 'bad':
        setBad(prevState => prevState + 1)
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedback = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };


    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackSet
            options={['good', 'neutral', 'bad']}
            onLeaveFeedBack={onFeedbackClicked}
          />
        </Section>

        <Section title="Statistic">
          {countTotalFeedback ? (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedback()}
          />
          ) : (<Notification message="There is no feedback" />)}
        </Section>
      </>
    );
};
  

