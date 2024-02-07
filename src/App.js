import React, { useState } from 'react';
import './App.css';

const VotePollApp = () => {
  const [question, setQuestion] = useState('What is your favorite programming language?');
  const [options, setOptions] = useState(['JavaScript', 'Python', 'Java', 'C++',]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [votes, setVotes] = useState(new Array(options.length).fill(0));

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleOptionChange = (index, event) => {
    const newOptions = [...options];
    newOptions[index] = event.target.value;
    setOptions(newOptions);
  };

  const handleVoteSubmit = () => {
    if (selectedOption !== null) {
      const newVotes = [...votes];
      newVotes[selectedOption]++;
      setVotes(newVotes);
      alert(`You voted for: ${options[selectedOption]}`);
    } else {
      alert('Please select an option before voting.');
    }
  };

  const getWinner = () => {
    let maxVotes = -1;
    let winnerIndex = -1;

    votes.forEach((vote, index) => {
      if (vote > maxVotes) {
        maxVotes = vote;
        winnerIndex = index;
      }
    });

    return winnerIndex;
  };

  const winnerIndex = getWinner();

  return (
    <div className="background">
      <label>
        Question:
        <input type="text" value={question} onChange={handleQuestionChange} />
      </label>
      <h1>{question}</h1>
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            <label>
              <input
                type="radio"
                name="option"
                checked={selectedOption === index}
                onChange={() => setSelectedOption(index)}
              />
              <input type="text" value={option} onChange={(e) => handleOptionChange(index, e)} />
            </label>
            <span>Votes: {votes[index]}</span>
          </li>
        ))}
      </ul>
      <button onClick={handleVoteSubmit}>Vote</button>
      {winnerIndex !== -1 && <p>The winner is: {options[winnerIndex]}</p>}
    </div>
  );
};

export default VotePollApp;
