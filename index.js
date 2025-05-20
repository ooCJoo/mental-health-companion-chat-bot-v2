const express = require('express');
const axios = require('axios');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Route to handle DeepSeek API requests
app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }
    
    const response = await axios.post(
      'https://api.deepseek.com/v1/chat/completions',
      {
        model: 'deepseek-chat', // Use the appropriate model
        messages: [
          {
            role: 'system',
            content: 'You are a compassionate mental health assistant. Provide supportive and helpful responses. Never give harmful advice, and always recommend seeking professional help for serious concerns. Keep responses concise and supportive.'
          },
          {
            role: 'user',
            content: message
          }
        ],
        max_tokens: 300, // Limit token usage to stay within free tier
        temperature: 0.7
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`
        }
      }
    );
    
    // Extract the AI's response
    const aiResponse = response.data.choices[0].message.content;
    
    return res.json({ message: aiResponse });
  } catch (error) {
    console.error('Error calling DeepSeek API:', error.response?.data || error.message);
    return res.status(500).json({ 
      error: 'Failed to get response from AI',
      details: error.message
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});