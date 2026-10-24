# Lesson 3 — Fill in the whole page

**Length:** about 15–18 minutes, plus time for students to finish the page with the video paused
**Students finish with:** every section of the ORÉE design on their page, all the photos, and navigation links that jump to real sections. It still looks plain, which is exactly right.

**New ideas this lesson:** grouping tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`) · headings in order (`<h1>`, `<h2>`, `<h3>`) · lists (`<ul>`, `<li>`) · line breaks (`<br>`) · quotes (`<blockquote>`) · comments (`<!-- -->`)

---

## Before you record

- Copy [start/](start/) into your `oree` folder. It's the result of lesson 2.
- Open [../resources/page-text.txt](../resources/page-text.txt) in Sublime, next to `index.html`. It has every word on the page, in order, with the photo for each spot.
- Have the [anatomy diagram](../lesson-01/anatomy.html) from lesson 1 open in a tab.

---

## 1. Today's goal (1 min)

Show the finished ORÉE site, then the student's current page.

> "Today, every word and photo from the design goes onto our page. It's going to look plain, like a long document. That's exactly right. We build the house first, then we decorate it. Next lesson, the decorating begins, and this is when it gets exciting."

## 2. Boxes that group things (4 min)

Bring back the anatomy diagram from lesson 1.

> "Remember the four parts of a website? HTML has a tag for each of them."

| Part | Tag | What goes in it |
|---|---|---|
| Navigation | `<header>` with `<nav>` inside | The top of the page and its links |
| Hero and content | `<main>` | Everything in the middle of the page |
| Each section in the middle | `<section>` | One topic: the hero, the collection, the story… |
| Footer | `<footer>` | The bottom of the page |

Wrap the existing content in them, one at a time:

```html
<body>

  <header>
    <nav>
      ...links...
    </nav>
  </header>

  <main>
    <section>
      ...hero...
    </section>
  </main>

  <footer>
    ...footer...
  </footer>

</body>
```

Save and refresh.

> "Nothing changed! These tags don't change how the page looks. They label which part is which, for the browser, for search engines, and for people using screen readers. In the next lessons we'll style each one."

**Comments.** Add a note above the hero section:

```html
<!-- Hero -->
```

> "This is a comment, a note to yourself. Browsers ignore everything between `<!--` and `-->`. We'll use them as signposts so we can find each section quickly."

## 3. Headings in order (2 min)

> "Think of a book. The title, then chapter titles, then sub-headings inside a chapter. Headings work the same way."

- `<h1>` is the **page title**, used once: "A form. A feeling. Forever."
- `<h2>` is the title of each **section**: "Find your everyday extraordinary."
- `<h3>` is a **sub-heading inside a section**: "Rings", "Earrings"…

> "Choose a heading by its place in the page, not by how big it looks. We'll change all the sizes with CSS later."

**Line breaks.** In lesson 1 the headline appeared on one line. Fix it now with `<br>`:

```html
<h1>A form.<br>A feeling.<br>Forever.</h1>
```

> "`<br>` means line break. Like `<img>`, it has no closing tag, because there's nothing to wrap."

## 4. Lists (2 min)

> "Navigation is really a list of links, so let's write it as one."

```html
<nav>
  <ul>
    <li><a href="#collection">Shop all</a></li>
    <li><a href="#collection">Collections</a></li>
    <li><a href="#atelier">Our atelier</a></li>
  </ul>

  <a href="index.html">ORÉE</a>

  <ul>
    <li><a href="#story">Our story</a></li>
    <li><a href="#">Bag (0)</a></li>
  </ul>
</nav>
```

- `<ul>` is an **unordered list**: a list with bullet points.
- `<li>` is one **list item**.
- Delete the `|` dividers from lesson 2. The list does that job now.

Save and refresh: the links appear as bullet points.

> "Bullet points for a menu look odd now, but we'll remove them with one line of CSS. Lists are used all over websites: menus, footers, features."

Point out the two lists either side of the logo, which match the design: links on the left, the logo in the middle, links on the right.

## 5. Fill in the page (5 min, then pause)

Copy the photos: move every photo from the resources `images` folder into the student's own `images` folder.

**Build the collection section together.** Copy each piece from `page-text.txt`, then wrap it:

```html
<!-- The collection -->
<section id="collection">
  <p>The Orée collection</p>
  <h2>Find your everyday extraordinary.</h2>
  <a href="#">Explore all jewellery</a>

  <img src="images/category-rings.jpg" alt="A hand wearing a gold signet ring" width="300">
  <h3>Rings</h3>
  <p>Small sculptures. Lasting presence.</p>

  ...two more cards, the same way...
</section>
```

Name the pattern out loud. Students repeat it for every section:

> "Section, small label, heading, words, photos. Copy from the text document, then wrap each piece in the tag that describes it."

**Build the bestsellers section** the same way, more quickly. Point out that the first product is the template for the other three: *copy, paste, change the words.*

**Pause point.**

> "Now pause the video and fill in the rest of the page from the text document, one section at a time. Save and refresh often. If you get stuck, the finished file is there to compare against. Come back when you reach the footer."

When the video resumes, scroll through the finished page and point out:

- the **atelier** list (`<ul>`) of three features
- the **testimonial** uses `<blockquote>`, the tag for a quotation
- the **promises** are a list where each item has a heading and a paragraph
- the **contact** section has no form yet. That comes in lesson 10.

## 6. Make the links go somewhere (1 min)

Remember the `href="#"` placeholders from lesson 2? Now the sections exist, so point them at real places. Check that each section has its `id`:

```html
<section id="atelier">
<section id="story">
<section id="contact">
```

Save, refresh and click **Our atelier** in the navigation.

> "Now the page is long, the jump links really jump. This is the payoff from last lesson."

## 7. Wrap up (1 min)

- Recap: grouping tags label the parts · headings go in order like a book · lists for anything list-like · comments are notes to yourself.
- Set the task (below).
- Next lesson: **CSS**. Colours and fonts, and the page starts to look like ORÉE.

---

## Student task

1. Add a fifth promise to the promises list:
   - heading: `Made in Paris`
   - text: `Designed and finished in our Paris atelier.`
2. Add a `Gift ideas` link to the footer's "Explore" list.
3. **Heading check:** write down every heading on your page, in order, with its level (h1, h2 or h3). Does it read like a book's table of contents?

*Stuck? Compare your file with `finished/index.html`.*

---

## Notes for you

- **This is the lesson where students fall behind.** The video only needs to show the pattern on two sections. Lesson 4's start folder contains the complete page, so anyone who doesn't finish can carry on from there.
- **Small labels are paragraphs for now.** "The Orée collection" and similar labels are plain `<p>` tags. In lesson 5 they get a class so they can be styled as small gold capitals.
- **Photo sizes are temporary.** The `width` attributes keep photos manageable on an unstyled page. CSS takes over sizing in lessons 6 and 7.
- **Stars and screen readers.** `★★★★★` is read out as "black star" five times. The rating sentence underneath still says 4.9 / 5, so the meaning comes across. The finished site hides the stars from screen readers, which can be shown in lesson 8.
- **"Why is my link next to the photo?"** Links and images sit side by side on a line, like words in a sentence, while headings and paragraphs each start on a new line. Students will notice this under the section headings. Tell them it's expected and gets tidied up with CSS. Lesson 5 explains why ("every element is a box").
- **No search button or wishlist hearts yet.** They're buttons that need JavaScript to do anything, so they're left for the bonus chapter.
- **Common problems students will hit:**
  - Photos don't show: they copied the HTML but not the image files, or a file name is misspelled.
  - The whole page has turned into a heading or a list: a missing closing tag (`</h2>`, `</ul>`). Look at the last thing that looks right and check the tag just after it.
  - A jump link goes to the wrong place: two sections have the same `id`, or the spelling differs from the `href`.
