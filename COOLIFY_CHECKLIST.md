# Checklist לעלייה ל־Coolify

## 1) הכנת Repository
- להעלות את כל הפרויקט ל־GitHub / GitLab
- לוודא שכל הקבצים נמצאים בתוך ה־repo
- לא לשכוח את:
  - Dockerfile
  - package.json
  - server
  - public
  - src

## 2) פרטים עסקיים
לעדכן בקובץ:
`src/siteConfig.js`

מה לעדכן:
- phoneDisplay
- phoneHref
- whatsappDisplay
- whatsappHref
- email

## 3) Coolify
- Create New Resource
- Application
- Connect Git Repository
- Build Pack: Dockerfile
- Port: 3000

## 4) Persistent Data
להוסיף Volume קבוע אל:
`/app/data`

כדי שפניות מהטופס לא ייעלמו אחרי deploy מחדש.

## 5) Domain
- לחבר דומיין
- להפעיל HTTPS/SSL

## 6) בדיקות לפני Launch
- בדיקת ניווט בין כל העמודים
- בדיקת פתיחת WhatsApp
- בדיקת שמירת טופס
- בדיקת תמונות בגלריה
- בדיקת מובייל
- בדיקת favicon
- בדיקת social preview

## 7) SEO
- לעדכן Title ו־Description סופיים אם צריך
- לעדכן מספרים אמיתיים ב־JSON-LD
- להוסיף Google Search Console אחרי עלייה

## 8) אחרי עלייה לאוויר
- לבדוק מהירות טעינה
- להוסיף אנליטיקס
- להוסיף פיקסל אם צריך
- לעדכן לקוח איך לשנות תוכן/מספרים
