const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// POST /bfhl
app.post('/bfhl', (req, res) => {
    const data = req.body.data;
    const user_id = "savithri_nair_19052002"; 
    const email = "savithrinair456@gmail.com"; 
    const roll_number = "21BCE6169"; 

    const numbers = [];
    const alphabets = [];
    let highest_lowercase_alphabet = null;

    // Process the data
    data.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(item);
        } else {
            alphabets.push(item);
            if (item === item.toLowerCase() && (!highest_lowercase_alphabet || item > highest_lowercase_alphabet)) {
                highest_lowercase_alphabet = item;
            }
        }
    });

    // Prepare the response
    res.json({
        "is_success": true,
        "user_id": user_id,
        "email": email,
        "roll_number": roll_number,
        "numbers": numbers,
        "alphabets": alphabets,
        "highest_lowercase_alphabet": highest_lowercase_alphabet ? [highest_lowercase_alphabet] : []
    });
});

// GET /bfhl
app.get('/bfhl', (req, res) => {
    res.json({ "operation_code": 1 });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
