const fetch = require('node-fetch');

module.exports = async (req, res) => {
    const apiKey = process.env.GOOGLE_MAPS_API_KEY;
    const url = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=geometry`;

    try {
        const response = await fetch(url);
        const data = await response.text();
        res.setHeader('Content-Type', 'application/javascript');
        res.status(200).send(data);
    } catch (error) {
        console.error('Error fetching Google Maps API:', error);
        res.status(500).json({ error: 'Failed to load Google Maps API' });
    }
};
