// Example using OpenAI API
export async function getAIResponse(message: string): Promise<string> {
  try {
    const response = await fetch('YOUR_AI_ENDPOINT', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.VITE_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        messages: [{ role: 'user', content: message }],
        model: 'gpt-3.5-turbo',
      }),
    });

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error('Error getting AI response:', error);
    return 'Sorry, I encountered an error. Please try again.';
  }
} 