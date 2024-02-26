import React, { useState } from 'react';

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example"
};

const App = () => {
  const [text, setText] = useState('');
  const [correction, setCorrection] = useState('');

  const handleTextChange = (event) => {
    const inputText = event.target.value;
    setText(inputText);
    setCorrection('');
    const words = inputText.split(/\s+/);
    for (let word of words) {
      const corrected = customDictionary[word.toLowerCase()];
      if (corrected && word.toLowerCase() !== corrected.toLowerCase()) {
        setCorrection(`Did you mean: ${corrected}?`);
        break;
      }
    }
  };

  return (
    <div>
      <h2>Spell Check and Auto-Correction</h2>
      <textarea
        style={{ marginLeft: '50px', width: '300px', height: '200px' }}
        value={text}
        placeholder='Enter text...'
        onChange={handleTextChange}
      />
      <div style={{ marginLeft: '50px', marginTop: '10px' }}>
        <span>{correction}</span>
      </div>
    </div>
  );
};

export default App;
