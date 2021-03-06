import { useState } from "react";
import Section from "./Section";
import Controls from "./Controls";
import Statistics from "./Statistics";

import s from "./Feedback.module.css";

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const state = { good, neutral, bad };

  const handleCLick = (e) => {
    const { name } = e.target;

    switch (name) {
      case "good":
        setGood((state) => state + 1);
        break;
      case "neutral":
        setNeutral((state) => state + 1);
        break;
      case "bad":
        setBad((state) => state + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + bad + neutral;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / countTotalFeedback());
  };

  return (
    <div className={s.container}>
      <Section title="Будь ласка залишіть свій відгук">
        <Controls options={state} onLeaveFeedback={handleCLick} />
      </Section>
      <Section title="Статистика">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </div>
  );
}
