# TTFHW - Den backend-koden implementerar flera säkerhetsåtgärder bland annat: 

## Inplementerar Säkerhet mot Brute Force-attacker, Clickjacking,  Brute Force-attacker


## Funktioner:

1. **Autentisering med JWT:**
   - Implementerar autentisering med JSON Web Token (JWT).
   - Använder `jsonwebtoken` för att skapa och verifiera tokens.

2. **Rate Limiting:**
   - Inkluderar rate limiting för att förhindra Brute Force-attacker.
   - Begränsar varje IP till högst 5 förfrågningar per 15 minuter.

3. **Säkerhetsheaders med Helmet:**
   - Använder `helmet` för att ställa in säkra headers och skydda mot vissa attacker.
   - Tillämpar Content Security Policy för att begränsa källor för olika typer av resurser.

4. **Miljövariabler:**
   - Laddar miljövariabler från en `.env`-fil med `dotenv`.

5. **Skydd mot ogiltiga förfrågningar:**
   - Implementerar rate limiting för alla förfrågningar till denna route.
   - Tillämpar åtgärder vid ogiltiga förfrågningar och ger lämpliga meddelanden.

6. **Åtkomst till konfidentiell data:**
   - Tillhandahåller en enkel GET-route (`/`) för att få åtkomst till konfidentiell data.
   - Kräver giltig JWT-token i authorization headern för åtkomst.

## Kom igång:

1. **Installera beroenden:**
   ```bash
   npm install
   ```

2. **Konfigurera miljövariabler:**
   - Skapa en `.env`-fil med `JWT_SECRET` och andra nödvändiga variabler.

3. **Kör applikationen:**
   ```bash
   npm start
   ```

4. **Använd API-routen:**
   - Gör en GET-förfrågan till `/` med en giltig JWT-token i authorization headern.

## Noteringar:
- Se till att miljövariablerna är korrekt inställda innan du kör applikationen.
- Använder Content Security Policy för att förbättra webbsäkerheten.
- Vid problem eller frågor, referera till [https://github.com/Ismail-m-a/Grupp3-Backend-Server).
