# GilboAir — חבילת מסירה והתקנה

פרויקט אתר ל־GilboAir, מוכן לפריסה דרך Git + Dockerfile + Coolify.

## מה יש בפרויקט
- אתר React + Vite בעברית RTL
- Express server לפריסה ולהגשת האתר
- טופס יצירת קשר ששומר פניות
- פתיחת WhatsApp עם הודעה מוכנה
- עמודי:
  - בית
  - אודות
  - שירותים
  - גלריה
  - יצירת קשר
  - תודה
- favicon ו־OG image
- SEO בסיסי + LocalBusiness JSON-LD

## פרטי העסק המוגדרים כרגע
- טלפון: 058-771-0009
- WhatsApp: 058-771-0009
- אימייל: gilboair1@gmail.com

## הרצה מקומית
```bash
npm install
npm run dev
```

## Build ו־Production
```bash
npm install
npm run build
npm run start
```

האפליקציה תעלה על פורט `3000`.

## פריסה ב־Coolify
1. מעלים את הפרויקט ל־GitHub או GitLab
2. נכנסים ל־Coolify
3. יוצרים Application חדש
4. מחברים את ה־Repository
5. בוחרים Deployment דרך Dockerfile
6. מגדירים Port = `3000`
7. עושים Deploy

## Volume חשוב
מומלץ מאוד להגדיר Persistent Volume אל:
`/app/data`

כך הפניות שנשלחות דרך הטופס יישמרו גם אחרי redeploy.

## קבצים חשובים
- `src/siteConfig.js` — פרטי העסק והטקסטים המרכזיים
- `src/pages` — כל עמודי האתר
- `src/components/ContactForm.jsx` — טופס יצירת קשר
- `server/server.js` — שרת Express + API לטופס
- `public` — לוגו, favicon, OG image, תמונות

## איך הטופס עובד
כאשר לקוח ממלא את הטופס:
1. הפרטים נשמרים בקובץ:
   `data/submissions.json`
2. נפתח WhatsApp עם הודעה מוכנה
3. המשתמש מועבר לעמוד תודה

## QA מומלץ לפני עלייה לאוויר
- לבדוק כל עמוד בדסקטופ
- לבדוק מובייל וטאבלט
- לבדוק שהטופס עובד
- לבדוק ש־WhatsApp נפתח תקין
- לבדוק שכל התמונות נטענות
- לבדוק ניווט עליון ו־active state
- לבדוק favicon
- לבדוק social preview

## שינויים מהירים בעתיד
אם צריך להחליף:
- טלפון
- WhatsApp
- אימייל
- טקסטים ראשיים

לעדכן את:
`src/siteConfig.js`

## הערה
הטופס כרגע שומר פנייה מקומית ופותח WhatsApp. אם בעתיד תרצו:
- מיילים אוטומטיים
- CRM
- WhatsApp Business API
- אנליטיקות

אפשר להרחיב את המערכת בקלות.
