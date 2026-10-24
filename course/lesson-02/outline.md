# Lesson 2 — Your first tags

**Length:** about 10–12 minutes
**Students finish with:** a page with a real headline, sub-heading and paragraphs, covering the four parts of a website
**New ideas this lesson:** what a tag is · opening and closing tags · `<h1>`, `<h2>` and `<p>`

---

## Before you record

- Copy [start/index.html](start/index.html) into your `oree` folder. It's the result of lesson 1: one line of plain text.
- Have the [anatomy diagram](../lesson-01/anatomy.html) from lesson 1 open in a tab.
- Students keep using **Notepad** (Windows) or **TextEdit** (Mac) this lesson.

---

## 1. Where we left off (1 min)

Open `index.html` in the browser.

> "Last time we made our first webpage. Right now it's just plain words. The browser has no idea which words are a headline and which are a normal sentence. Today we'll tell it, using **tags**. Tags are what HTML really is."

**Opening the file to edit it.** Double-clicking `index.html` opens it in the browser, not the editor. Show this once, slowly:

- **Windows:** right-click `index.html` → *Open with* → **Notepad**.
- **Mac:** right-click `index.html` → *Open With* → **TextEdit**.

> "From now on we'll have the file open in two places: the editor to write, the browser to look."

## 2. What is a tag? (3 min)

Add two tags around the headline:

```html
<h1>A form. A feeling. Forever.</h1>
```

Save, switch to the browser and refresh. The words turn big and bold.

> "We just told the browser: this is a headline. That's a tag."

Point to each part, zoomed in:

- `<h1>` is the **opening tag**: "a headline starts here."
- The words in the middle are the **content**: what visitors see.
- `</h1>` is the **closing tag**: "the headline ends here." The **slash** means *end*.

> "Tags come in pairs, like brackets around a phrase. The tags never appear on the page. They only tell the browser what the words are."

**The symbols.** `<` and `>` are the keys next to the M key (with Shift on most keyboards). Show them on screen.

## 3. Three tags to start with (1 min)

| Tag | Means | Think of it as |
|---|---|---|
| `<h1>` | Heading, level 1 | The main headline. Usually one per page. |
| `<h2>` | Heading, level 2 | A section heading. |
| `<p>` | Paragraph | Normal text. |

> "h stands for heading, and p for paragraph. That's all we need today."

## 4. Build the four parts (4 min)

Bring back the anatomy diagram.

> "Remember our four parts? Let's put a little of each onto our page."

Add one part at a time. **Save → switch to the browser → refresh** after each one, so students see the loop.

```html
<p>OREE - Shop all | Collections | Our atelier | Our story</p>

<h1>A form. A feeling. Forever.</h1>
<p>Meet Forma. A small sculpture in recycled gold. Made to become a part of you.</p>

<h2>Find your everyday extraordinary.</h2>
<p>Fine jewellery for the everyday. Sculpted with intention, made slowly, and worn your way.</p>

<p>2026 OREE - Designed in Paris. Worn everywhere.</p>
```

Name each part as you type it:

1. **Navigation:** *"For now it's just words. They become real links in a later lesson."*
2. **Hero:** the headline and the sentence under it.
3. **Content:** a section heading and a paragraph.
4. **Footer:** the small print at the bottom.

Things to point out along the way:

- **Blank lines and extra spaces don't show up in the browser.** HTML only listens to tags. The blank lines are there to help *us* see the four parts.
- **The headline is on one line,** even though the design has three. We'll fix that in a later lesson.

## 5. Break it on purpose (1 min)

Delete the closing `</h1>`, then save and refresh. Everything after it turns into a giant heading.

> "The browser didn't know where the headline ended, so it kept going. If your page ever looks strange, check your closing tags first."

Put the `</h1>` back, save and refresh.

## 6. Wrap up (1 min)

- Recap: tags label your words · they come in pairs · the slash means *end* · `<h1>`, `<h2>`, `<p>`.
- Set the task (below).
- Next lesson: we'll move to **Sublime Text**, *a notepad that helps you*, and give our page its proper structure.

---

## Student task

1. Add one more section between the content and the footer:
   - a level 2 heading: `Future heirlooms. Present favourites.`
   - a paragraph underneath: `Thoughtfully made in small batches.`
2. Change the main headline to a sentence of your own. Save and refresh to check it.

*Stuck? Compare your file with `finished/index.html`.*

---

## Notes for you

- **The name is written OREE throughout the course,** without the accent. Typing É is fiddly on most keyboards. The finished website you show in lesson 1 still says ORÉE, which is fine to mention if anyone asks.
- **No `<!DOCTYPE>`, `<head>` or `<body>` yet.** Browsers are forgiving and display the page without them. Lesson 3 adds the proper skeleton. If a student asks, say "we'll add the official wrapping next time."
- **Common problems students will hit:**
  - The tags show on the page as text → the file was saved as rich text (Mac) or as `.txt` (Windows). See the setup in lesson 1.
  - Double-clicking opens the browser, not the editor → use right-click → *Open with*.
  - Nothing changes after editing → they forgot to save, or to refresh.
  - Everything is huge → a missing `</h1>` or `</h2>`.
