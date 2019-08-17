module.exports = {
  launch: {
    dumpio: true,
    headless: process.env.HEADLESS !== 'false',
  },
  viewports: {
    Mobile: [480, 800],
    Desktop: [1920, 1000],
  },
  environments: {
    Google: 'https://google.com',
  },
}