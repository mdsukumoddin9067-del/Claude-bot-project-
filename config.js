const num = (v, d) => {
  const n = parseInt(v, 10);
  return Number.isFinite(n) ? n : d;
};

module.exports = {
  host: process.env.MC_HOST || 'localhost',
  port: num(process.env.MC_PORT, 25565),
  username: process.env.MC_USERNAME || 'Steve',
  version: process.env.MC_VERSION || undefined,
  auth: process.env.MC_AUTH || 'offline',
  owner: (process.env.OWNER_NAME || '').trim(),
  leash: num(process.env.LEASH, 60), // max horizontal distance from owner while working
  followDistance: 3,
};
