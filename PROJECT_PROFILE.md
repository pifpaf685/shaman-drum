# Профіль проекту NOAIDI

Цей файл — пам'ять проекту для майбутніх правок і нових сайтів. Його варто давати в контекст на старті наступної задачі, щоб не повторювати ті самі помилки, не переписувати тексти кілька разів і одразу правильно підготувати сайт для Google.

## Суть проекту

NOAIDI — український сайт майстерні ручного виготовлення шаманських бубнів.

Основний тон: живий, чесний, майстерний, преміальний без зайвого пафосу. Сайт має відчуватися як авторська майстерня, а не як SEO-каталог.

Затверджений термін у текстах: `бубен`, `бубни`.

Не використовувати: `бубон`.

## Затверджені важливі тексти

Hero H1:

> Кожен бубен має свій живий голос

SEO-фразу `Шаманські бубни ручної роботи | NOAIDI Україна` залишати в технічних місцях: `<title>`, Open Graph, Twitter Card, Schema.org, meta description, але не ставити її як головний видимий H1.

Текст у блоці `Про майстра`:

> Я виготовляю бубни понад 13 років. Почав робити шаманські бубни, тому що мене не влаштовували ті, що були у продажу. Я обрав якість, простоту і традицію.

Footer:

> Зроблено в Україні під час війни

Доставка:

> Доставка Новою Поштою

Контактна пошта для замовлення:

> rva.jrec@gmail.com

Instagram:

> https://www.instagram.com/sviatogor_magur/

## Що було складним і що не повторювати

1. **Дублювання секційних заголовків**

   Було зроблено маленькі верхні підписи типу `ПРО МАЙСТРА`, а нижче одразу H2 `Про майстра`. На мобільному це виглядало як повторення в кожній секції. Надалі не дублювати eyebrow-підпис і H2, якщо вони кажуть те саме.

2. **Занадто SEO-шний H1**

   Видимий H1 `Шаманські бубни ручної роботи NOAIDI` був корисний для SEO, але звучав очевидно й сухо. Для цього бренду краще залишати людський H1, а SEO-фрази тримати у meta/schema/описах.

3. **Повтор фото**

   Одне фото майстра випадково використовувалося у двох близьких секціях. Перед публікацією перевіряти не лише код, а й реальний скрол сторінки на телефоні, щоб фото й тексти не створювали відчуття повтору.

4. **Мобільна версія важливіша за desktop**

   На телефоні спершу був хаос: текст накладався на велике фото. Для таких сайтів перевіряти 375, 390, 430 і 768 px до пушу. Не дозволяти hero-фото перекривати текст.

5. **GitHub Pages кеш**

   Після пушу GitHub Pages і CDN можуть кілька хвилин показувати стару версію. Для перевірки використовувати URL з параметром, наприклад:

   `https://pifpaf685.github.io/shaman-drum/?v=COMMIT`

6. **Не створювати фейкові дані**

   Не вставляти фейкові GA4 ID, Search Console token, рейтинги, reviews або ціни. Якщо даних немає, краще залишити placeholder або не додавати блок.

## SEO-правила для цього сайту

Основні запити мають бути вписані природно, без keyword stuffing:

- шаманський бубен
- купити шаманський бубен
- шаманський бубен Україна
- бубен ручної роботи
- шаманський барабан
- шаманський бубен на замовлення
- бубен зі шкіри
- бубен з ясена
- шаманські бубни ручної роботи

Поточний production URL:

`https://pifpaf685.github.io/shaman-drum/`

Якщо буде власний домен, обов'язково змінити:

- canonical URL
- `og:url`
- `og:image`
- `twitter:image`
- JSON-LD `url`, `@id`, `image`, `logo`
- `sitemap.xml`
- `robots.txt`
- absolute links у `404.html`

## Обов'язкові технічні SEO-елементи

Перед публікацією перевірити:

- `<html lang="uk">`
- один H1 на сторінці
- унікальний `<title>`
- унікальний `<meta name="description">`
- canonical
- Open Graph: `og:title`, `og:description`, `og:image`, `og:url`, `og:type`, `og:site_name`
- Twitter Card: `summary_large_image`
- JSON-LD: Organization, WebSite, WebPage, Product, FAQPage
- `robots.txt`
- `sitemap.xml`
- branded `404.html`
- favicon, apple touch icon, webmanifest
- зовнішні посилання з `target="_blank"` мають `rel="noopener noreferrer"`
- не має бути `бубон`

## Зображення

Для всіх змістовних фото:

- `alt` має описувати фото людською мовою
- `width` і `height` обов'язкові
- `srcset` і `sizes` для responsive-завантаження
- `loading="lazy"` для фото нижче першого екрану
- hero/LCP фото не lazy-load

WebP/AVIF не були згенеровані, бо в локальному середовищі не було `cwebp`, ImageMagick або Pillow. Було створено зменшені JPEG-версії через macOS `sips`.

## Google Search Console і Analytics

Не вставляти фейкові measurement ID.

Для Search Console:

1. Додати property як URL-prefix:
   `https://pifpaf685.github.io/shaman-drum/`
2. Отримати verification meta tag.
3. Замінити placeholder:
   `GOOGLE_SEARCH_CONSOLE_VERIFICATION_TOKEN`
4. Запушити зміну.
5. Додати sitemap:
   `https://pifpaf685.github.io/shaman-drum/sitemap.xml`
6. Натиснути `Request indexing` для головної сторінки.

Для GA4:

1. Створити GA4 property.
2. Отримати measurement ID.
3. Додати його тільки після отримання реального ID.
4. Не ламати швидкість сторінки зайвими скриптами.

## Перевірки перед пушем

Мінімальний локальний чек:

```sh
rg -n "бубон|Бубон|Под заказ|Home|image1|IMG_|hello@|igsh|iframe|style=" .
rg -n "<h1|<h2|canonical|description|og:|twitter|application/ld\\+json" index.html
```

Перевірити локальний сервер:

```sh
python3 -m http.server 8765
```

Перевірити мобільні viewport:

- 375 px
- 390 px
- 430 px
- 768 px

Після пушу:

```sh
gh api repos/pifpaf685/shaman-drum/pages/builds/latest --jq '{status:.status,error:.error.message,commit:.commit,updated_at:.updated_at}'
curl --http1.1 -L -s 'https://pifpaf685.github.io/shaman-drum/?v=COMMIT'
curl --http1.1 -L -s 'https://pifpaf685.github.io/shaman-drum/robots.txt'
curl --http1.1 -L -s 'https://pifpaf685.github.io/shaman-drum/sitemap.xml'
```

## Принцип для наступних сайтів

Спочатку зафіксувати:

- назву бренду
- точні слова, які можна і не можна вживати
- головний людський H1
- SEO-title окремо від H1
- контактну пошту
- Instagram/соцмережі
- production URL або майбутній домен
- чи потрібні Google Search Console і GA4
- які фото не дублювати

Потім робити код, мобільну перевірку, SEO-перевірку і тільки після цього пуш.
