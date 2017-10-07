module.exports = {
    AppName: "LastManStanding",
    APP_ID: process.env.APP_ID || 'nhub_lms',
    MASTER_KEY: process.env.MASTER_KEY || 'lmsStreamkey',
    SERVER_URL: process.env.SERVER_URL || 'http://lmsstream.herokuapp.com/parse', 
    DASHBOARD_USER: process.env.DASHBOARD_USER || "dihwenglms",
    DASHBOARD_PASS: process.env.DASHBOARD_PASS || "dihwenglms",
}
