# Lesson 1 — What is a website?

**Length:** about 12–15 minutes
**Students finish with:** a page in their browser showing the four parts of a website, written by hand in Notepad (Windows) or TextEdit (Mac).

**New ideas this lesson:** the four parts of a website · what HTML is · what a tag is · `<h1>`, `<h2>`, `<p>` · the edit → save → refresh loop

---

## Before you record

- Have the finished ORÉE site open in a browser tab, plus [anatomy.html](anatomy.html) in another.
- Have an empty folder on the desktop called `oree`.
- **Windows:** in File Explorer, turn on *View → Show → File name extensions*. Without this, students can't see whether they saved `index.html` or `index.html.txt`.
- **Mac:** in TextEdit, open *Settings*:
  - *New Document* tab → choose **Plain text**.
  - *Open and Save* tab → tick **Display HTML files as HTML code instead of formatted text**.

  Show these settings on screen. They are the most common place beginners get stuck.

---

## 1. Where we're going (1 min)

Open the finished ORÉE site and scroll through it slowly.

> "Over the next ten lessons, you'll build this website yourself, starting from a blank page. You don't need any experience. Today we'll write our very first lines."

## 2. The four parts of a website (2–3 min)

Switch to `anatomy.html`. Walk through the four parts, then point them out on the real ORÉE page:

1. **Navigation:** the name and links at the top. *Helps you find your way.*
2. **Hero:** the first big message and picture. *Tells you what the site is about in seconds.*
3. **Content:** everything in the middle. *Products, stories, photos.*
4. **Footer:** the bottom. *Contact details and small print.*

Then open one or two websites students will know (a shop or a news site) and spot the same four parts together.

> "Once you've seen it, you'll notice it everywhere. Nearly every website is these four parts, stacked from top to bottom."

## 3. What is HTML? (2 min)

> "A web browser can't tell a heading from a paragraph just by looking at text. HTML is how we tell it. We label each piece of content: *this is a heading*, *this is a paragraph*."

Use the house comparison, which comes back in later lessons:

- **HTML** is the walls and rooms: *what's there.* (Lessons 1–3)
- **CSS** is the paint and furniture: *how it looks.* (Lessons 4–9)
- **JavaScript** is the light switches: *what it does when you interact.* (Optional bonus)

> "HTML stands for HyperText Markup Language, but don't worry about the name. 'Markup' just means labelling."

## 4. What is a tag? (2 min)

Write this large on screen (in Notepad, zoomed in):

```html
<h1>A form. A feeling. Forever.</h1>
```

Point to each part:

- `<h1>` is the **opening tag**: "a heading starts here."
- The words in the middle are the **content**: what visitors see.
- `</h1>` is the **closing tag**: "the heading ends here." The **slash** means *end*.

> "Tags come in pairs, like brackets around a phrase. The tag itself never appears on the page. It only tells the browser what the words are."

Introduce the three tags for today:

| Tag | Means | Think of it as |
|---|---|---|
| `<h1>` | Heading, level 1 | The main headline. Usually one per page. |
| `<h2>` | Heading, level 2 | A section heading. |
| `<p>` | Paragraph | Normal text. |

## 5. Your first webpage (4 min)

1. Open **Notepad** (Windows) or **TextEdit** (Mac).
2. Type one line:

   ```html
   <h1>A form. A feeling. Forever.</h1>
   ```

3. **Save it** into the `oree` folder as `index.html`.
   - **Windows:** set *Save as type* to **All files (\*.\*)**, then type the name `index.html`.
   - **Mac:** if TextEdit asks about the extension, choose **Use .html**.
4. Open the `oree` folder and **double-click `index.html`**. It opens in the browser.

> "That's a webpage. You made it. It's only on your computer for now. We'll put it on the internet in lesson 10."

Mention *why* `index.html`: it's the name websites use for the front page.

## 6. Build the four parts (3–4 min)

Go back to the editor and add the rest, one part at a time. **Save → switch to the browser → refresh** after each part, so students see the loop.

```html
<p>OREE - Shop all | Collections | Our atelier | Our story</p>

<h1>A form. A feeling. Forever.</h1>
<p>Meet Forma. A small sculpture in recycled gold. Made to become a part of you.</p>

<h2>Find your everyday extraordinary.</h2>
<p>Fine jewellery for the everyday. Sculpted with intention, made slowly, and worn your way.</p>

<p>2026 OREE - Designed in Paris. Worn everywhere.</p>
```

As you add each piece, name the part it belongs to: *"This is our navigation… this is our hero… content… footer."* Leave a blank line between the parts so they're easy to see in the file.

> "The navigation is just plain text for now. In the next lesson these become real links you can click."

Things to point out along the way:

- **Blank lines and extra spaces don't show up in the browser.** HTML only listens to tags. (This is why the headline appears on one line, not three. We'll fix that later.)
- **Editing loop:** change some words, save, refresh. This loop is how all websites are built.

## 7. Break it on purpose (1 min)

Delete the closing `</h1>` and refresh. Everything after it turns into a giant heading.

> "The browser didn't know where the heading ended, so it kept going. If your page ever looks strange, check your closing tags first."

Put the `</h1>` back, save and refresh.

## 8. Wrap up (1 min)

- Recap: four parts · HTML labels content · tags open and close · save and refresh.
- Set the task (below).
- Next lesson: we'll add the ring photograph, make the links work, and move to **Sublime Text**, *"a notepad that helps you."*

---

## Student task

1. Add one more section to your content, **between** the existing content and the footer:
   - a level 2 heading: `Future heirlooms. Present favourites.`
   - a paragraph underneath: `Thoughtfully made in small batches.`
2. Change the main headline to a sentence of your own. Save and refresh to check it.

*Stuck? Compare your file with `finished/index.html`.*

---

## Notes for you

- **Why "OREE" without the accent?** Typing **É** is fiddly on most keyboards. Without the proper page setup, which comes in lesson 2, some browsers also show accents as garbled characters such as `ORÃ‰E`. The accent returns in lesson 2, which makes a nice small reveal.
- **No `<!DOCTYPE>`, `<head>` or `<body>` yet.** Browsers are forgiving and display the page without them. Lesson 2 adds the proper skeleton. If a student asks, say "we'll add the official wrapping next time."
- **Common problems students will hit:**
  - The file opens in the editor and not the browser → right-click → *Open with* → choose their browser.
  - The page shows the tags as text → the file was saved as rich text (Mac) or as `.txt` (Windows).
  - Nothing changes after editing → they forgot to save, or to refresh.
