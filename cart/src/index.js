const express = require('express');
const app = express();

app.get('/api/cart', (req, res) => {
    res.json({ message: 'Once  hello from CART' })
})

app.listen(3001, () => console.log('listening ons port 3001'));


