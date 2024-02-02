const express = require('express'); // Importera Express för att skapa en router
const jwt = require('jsonwebtoken'); // Importera JSON Web Token (JWT) för autentisering
const rateLimit = require('express-rate-limit'); // Lägg till rate limiting
const helmet = require('helmet'); // Lägg till Helmet för att hantera HTTP-säkerhet

require('dotenv').config(); // Ladda miljövariabler från en .env-fil

const router = express.Router(); // Skapa en router-instans från Express

// Använd Helmet för att sätta säkra headers och skydda mot vissa attacker
router.use(helmet());

// Rate limiting middleware för att förhindra Brute Force-attacker
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minuters fönster
  max: 5, // Tillåt högst 5 förfrågningar per fönster
  message: 'Too many requests from this IP, please try again later.', // Meddelande vid för många förfrågningar
});

// Använd rate limiting för alla förfrågningar till denna route
router.use('/', limiter);

// Set Content Security Policy headers
router.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"], // Standardkälla för alla typer av resurser
      scriptSrc: ["'self'", 'trusted-cdn.com'], // Tillåtna källor för skript
      styleSrc: ["'self'", 'trusted-cdn.com'], // Tillåtna källor för stilar
      imgSrc: ['data:', 'trusted-cdn.com'], // Tillåtna källor för bilder
    },
  })
);

router.get('/', (req, res) => {
  const authHeader = req.headers['authorization']; // Hämta authorization header från förfrågan
  const token = authHeader && authHeader.split(' ')[1]; // Extrahera JWT-token från authorization header

  if (!token) return res.status(401).send('Access Denied'); // Om ingen token finns, skicka Access Denied

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET); // Verifiera JWT-token mot hemlig nyckel

    if (verified.role === 'admin') {
      res.json({ data: 'Secret data for admin!' }); // Skicka konfidentiell data om användaren är admin
    } else {
      res.json({ data: 'Secret data for user!' }); // Skicka konfidentiell data om användaren är vanlig användare
    }
  } catch (error) {
    // Logga fel för ytterligare undersökning
    console.error('Error verifying token:', error);
    res.status(401).send('Invalid Token'); // Om token inte kan verifieras, skicka Invalid Token
  }
});

module.exports = router; // Exportera router för användning i andra filer
