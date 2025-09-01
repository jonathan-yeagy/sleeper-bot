const https = require('https');

/**
 * Fetch league information from Sleeper API
 * @param {string} leagueId - The Sleeper league ID
 * @returns {Promise<Object>} League information
 */
async function getLeagueInfo(leagueId) {
  return new Promise((resolve, reject) => {
    const url = `https://api.sleeper.app/v1/league/${leagueId}`;
    
    https.get(url, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        try {
          const leagueInfo = JSON.parse(data);
          resolve(leagueInfo);
        } catch (error) {
          reject(new Error('Failed to parse league data'));
        }
      });
    }).on('error', (error) => {
      reject(error);
    });
  });
}

/**
 * Get the league name from Sleeper API
 * @param {string} leagueId - The Sleeper league ID
 * @returns {Promise<string>} League name or fallback text
 */
async function getLeagueName(leagueId) {
  try {
    if (!leagueId) {
      console.warn('No league ID provided, using fallback text');
      return 'your Fantasy League';
    }
    
    const leagueInfo = await getLeagueInfo(leagueId);
    
    if (leagueInfo && leagueInfo.name) {
      return leagueInfo.name;
    } else {
      console.warn('Could not fetch league name, using fallback text');
      return 'your Fantasy League';
    }
  } catch (error) {
    console.error('Error fetching league name:', error.message);
    return 'your Fantasy League';
  }
}

module.exports = {
  getLeagueInfo,
  getLeagueName
};
