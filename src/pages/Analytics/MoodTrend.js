import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Box } from '@mui/material';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const MoodTrend = () => {
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        const fetchEntries = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/entries');
                console.log('Fetched entries:', response.data); // Log fetched data
                setEntries(response.data);
            } catch (error) {
                console.error('Error fetching entries:', error);
            }
        };
        fetchEntries();
    }, []);

    // Prepare data for the chart
    const moodCount = { happy: 1, sad: 3, angry: 2, neutral: 0, excited: 0 };

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
                fill: true,
                tension: 0.4, // Smooth curves
            }
        ]
    };

    return (
        <Box sx={{ marginTop: '60px', padding: '30px'  }}> {/* Using MUI Box with sx prop */}
            <h2>Mood Trends</h2>
            <Line data={chartData} />
        </Box>
    );
};

export default MoodTrend;
