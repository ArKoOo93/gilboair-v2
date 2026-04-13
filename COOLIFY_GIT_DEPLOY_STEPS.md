# תוכנית העלאה ל־Coolify + Git

## שלב 1 — ניקוי ואריזה
1. פותחים את תיקיית הפרויקט
2. מוודאים שיש רק:
   - `src`
   - `public`
   - `server`
   - `data`
   - `package.json`
   - `package-lock.json` אם קיים
   - `Dockerfile`
   - `.gitignore`
   - `README.md`
3. לא מעלים תיקיות כמו:
   - `node_modules`
   - `dist`

## שלב 2 — יצירת Repository
1. פותחים GitHub
2. יוצרים Repository חדש
3. נותנים לו שם, למשל:
   `gilboair-site`

## שלב 3 — העלאה ל־Git
פקודות בסיסיות:
```bash
git init
git add .
git commit -m "Initial GilboAir delivery"
git branch -M main
git remote add origin <YOUR_REPO_URL>
git push -u origin main
```

## שלב 4 — חיבור ל־Coolify
1. נכנסים ל־Coolify
2. Create New Resource
3. Application
4. Connect Repository
5. בוחרים את ה־repo
6. Deployment Type: Dockerfile
7. Port: `3000`

## שלב 5 — Persistent Storage
להוסיף Volume אל:
`/app/data`

## שלב 6 — Deploy
1. ללחוץ Deploy
2. להמתין ל־build
3. לבדוק Logs
4. לפתוח Preview / Domain

## שלב 7 — דומיין
1. לחבר דומיין
2. לוודא HTTPS
3. לבדוק שהכול עובד

## שלב 8 — בדיקות אחרונות
- ניווט עליון
- גלריה
- טופס
- WhatsApp
- עמוד תודה
- מובייל
