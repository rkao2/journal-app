import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const MoodTrend = () => {
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        // Fetch entries from the backend
        const fetchEntries = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/entries');
                setEntries(response.data);
            } catch (error) {
                console.error('Error fetching entries:', error);
            }
        };
        fetchEntries();
    }, []);

    // Prepare data for the chart
    const moodCount = { happy: 0, sad: 0, angry: 0, neutral: 0, excited: 0 };

    entries.forEach(entry => {
        moodCount[entry.mood] = (moodCount[entry.mood] || 0) + 1;
    });

    const chartData = {
        labels: Object.keys(moodCount),
        datasets: [
            {
                label: 'Mood Count',
                data: Object.values(moodCount),
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true
            }
        ]
    };

    return (
        <div>
            <h2>Mood Trends</h2>
            <Line data={chartData} />
        </div>
    );
};

export default MoodTrend;
