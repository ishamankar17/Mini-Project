import React, { useState } from 'react';
import './App.css';

function App() {
    const [text, setText] = useState('');
    const [result, setResult] = useState(null);

    const analyzeSentiment = async (e) => {
        e.preventDefault();

        if (!text.trim()) {
            alert('Please enter some text to analyze.');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/analyze', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text }),
            });

            if (!response.ok) {
                throw new Error('Failed to fetch sentiment analysis result.');
            }

            const data = await response.json();
            setResult(data);
        } catch (error) {
            alert(error.message);
        }
    };

    const getSentimentMessage = () => {
        if (!result) return '';

        if (result.compound >= 0.05) {
            return { message: `Positive Sentiment (Score: ${result.compound})`, color: 'green' };
        } else if (result.compound <= -0.05) {
            return { message: `Negative Sentiment (Score: ${result.compound})`, color: 'red' };
        } else {
            return { message: `Neutral Sentiment (Score: ${result.compound})`, color: 'gray' };
        }
    };

    const sentimentMessage = getSentimentMessage();

    return (
        <div className="container">
            <h1 className="text-center">Sentiment Analysis Tool</h1>
            <div className="card shadow mt-4">
                <div className="card-body">
                    <form onSubmit={analyzeSentiment}>
                        <div className="mb-3">
                            <label htmlFor="inputText" className="form-label">Enter Text:</label>
                            <textarea
                                id="inputText"
                                className="form-control"
                                rows="4"
                                placeholder="Type your text here..."
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Analyze Sentiment</button>
                    </form>
                    {result && (
                        <div id="result" className="mt-4">
                            <h5>Analysis Result:</h5>
                            <p style={{ color: sentimentMessage.color }} className="fs-5">
                                {sentimentMessage.message}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
