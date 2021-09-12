let config = {
    apiUrl: process.env['REACT_APP_API_URL'] || 'http://localhost:9090',
    debug: process.env['REACT_APP_DEBUG'] === 'true' || false
};

export default config;
