🍽️ Meal App

---

> تطبيق وصفات وجبات بسيط مبني بـ React و TheMealDB API — يعرض وجبات، تصنيفات، وصفات، ويدعم Pagination.

---

📝 الوصف

مشروع MealApp هو تطبيق ويب يعرض وجبات من TheMealDB API. يمكنك تصفح الفئات المختلفة للوجبات، عرض تفاصيل كل وجبة، والتنقل بين الصفحات باستخدام Pagination.

- جلب القوائم والتصنيفات من API.
- عرض بطاقات الوجبات مع صورة وعنوان ومكان (Area).
- استخدام Tabs للتصنيفات (Categories).
- إضافة Pagination لعرض عدد محدد من البطاقات في كل صفحة.

المشروع مناسب كمحفوظ عرضي في الـ portfolio أو كقالب للتعلم.

---

## ✨ ميزات المشروع

- عرض جميع الوجبات أو فلترة حسب التصنيف.
- بطاقات وجبات قابلة للضغط لعرض تفاصيل كل وجبة.
- Pagination قابل لإعادة الاستخدام (Reusable Pagination component).
- تصميم بسيط باستخدام Tailwind / CSS.

---

## 🖼️ Screenshots

```md
![Home Screen](../MealApp/src/assets/images/screenshot/home.png)
![Meal Details](../MealApp/src/assets/images/screenshot/details.png)
```

> **ملاحظة:** ارفع الصور بنفس الأسماء داخل المجلد `assets` ثم اضف commit و push.

---

🧰 التقنيات المستخدمة

- React 18 (Functional Components + Hooks)

- axios (لجلب البيانات من API)

- react-router-dom v7 (للتنقل بين الصفحات)

- Tailwind CSS + SCSS (لتصميم الستايلات)

- Vite (لتشغيل وبناء المشروع)

- gh-pages (لنشر المشروع على GitHub Pages)

- TheMealDB API (كمصدر البيانات)

---

## 🚀 كيفية التشغيل محليًا

1. انسخي الريبو Local:

```bash
git clone https://github.com/enasmohmed/MealApp.git
cd MealApp
```

2. ثبتي الحزم:

```bash
npm install
# أو
yarn install
```

3. شغلي المشروع:

```bash
npm start
# أو
yarn start
```

> يفتح المتصفح على `http://localhost:3000` تلقائياً.

---

## 🔧 ملاحظات عن Pagination

المشروع يحتوي على كمبوننت `Pagination` مستقل.
لو عايزة تغيري عدد العناصر في الصفحة، افتحي `Home.jsx` وعدلي قيمة `mealsPerPage`.

---

📂 هيكلة المشروع

```
MealApp/
├─ public/
├─ src/
│ ├─ components/
│ │ ├─ Pagination/
│ │ │ └─ Pagination.jsx # التنقل بين صفحات الوجبات
│ │ ├─ CaMealApp/
├─ public/
├─ src/
│ ├─ components/
│ │ ├─ Pagination/
│ │ │ └─ Pagination.jsx # التنقل بين صفحات الوجبات
│ │ ├─ CategoryTabs/ # تبويبات عرض الفئات
│ │ ├─ Meal/
│ │ │ ├─ Meal.jsx # كارت عرض الوجبة
│ │ │ └─ Meal.scss
│ │ ├─ MealList/
│ │ │ ├─ MealList.jsx # قائمة الوجبات
│ │ │ └─ MealList.scss
│ │ ├─ Navbar/
│ │ │ ├─ Navbar.jsx # شريط التنقل العلوي
│ │ │ └─ Navbar.scss
│ │ └─ index.js # ملف تجميعي لكل الكومبوننتس
│ │
│ ├─ pages/
│ │ └─ Home.jsx # الصفحة الرئيسية
│ │
│ ├─ assets/ # ضع هنا الصور (banner, screenshots)
│ │
│ └─ App.jsx # المكون الرئيسي للتطبيق
│
├─ package.json
└─ README.md
```

---
