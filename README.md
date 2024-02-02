Den backend-koden implementerar flera säkerhetsåtgärder bland annat: inplementera den här koden med Säkerhet mot Brute Force-attacker, Clickjacking,  Brute Force-attacker

1. **Helmet Middleware:** Använder Helmet för att sätta säkra headers och skydda mot vissa webbaserade attacker genom att automatisera inställningar som Content Security Policy (CSP), Strict-Transport-Security (HSTS), och X-Content-Type-Options.

2. **Rate Limiting (Express Rate Limit):** Implementerar rate limiting för att förhindra Brute Force-attacker. Begränsar antalet förfrågningar från en enskild IP-adress under en viss tidsperiod.

3. **JWT-Verifiering:** Verifierar JSON Web Tokens (JWT) för att säkerställa att användaren är giltig och har rätt behörighet. Om tokenet inte kan verifieras eller om användarrollen inte är 'admin', skickas ett 401-felmeddelande.
Content Security Policy (CSP)
5. CONTENT SECURITY POLICY HEADER: Content Security Policy (CSP) för att begränsa typerna av innehåll som kan köras på en webbsida. CSP-headers kan sättas för att definiera tillåtna källor för skript, stilar och andra resurser.
Sammanfattningsvis används Helmet för att stärka HTTP-säkerheten genom att hantera headers, rate limiting används för att förhindra Brute Force-attacker, och JWT-verifiering implementeras för att autentisera och hantera användarbehörigheter och dessutom Content Security Policy (CSP) för att begränsa typerna av innehåll som kan köras på en webbsida.

   Bcrypt:
Inkluderar både Hashing och Saltning för säker lösenordshantering och gör det svårare att utföra brute-force-attacker. Lösenorden lagras inte i klartext. Istället används bcrypt för att hasha och jämföra lösenord. Detta ökar säkerheten genom att skydda lösenord mot avslöjande även om databasen komprometteras. Bcrypt har vi med eftersom det är säkrare att ha något skydd än inget. Detta ser vi som en säkerhetsstandard för alla projekt framöver. 

7. Express rate limit:
Begränsar användarens inloggningsförsök och bestämmer en tid där det inte går att logga in. I vårt fall så får användaren max tre försök att logga in efter det så kan användaren inte ens försöka att logga in förrän 15 minuter har passerat. Vi använder detta för att det ökar säkerheten mot eventuella attacker bland annat brute force. Genom att hålla tidsbegränsningen till 15 minuter så behåller vi samtidigt användarvänligheten för den som råkar skriva fel inloggningsuppgifter.  

8. Cors:
Cors kontrollerar hur webbsidor på en domän interagerar med resurser på andra domäner. 
