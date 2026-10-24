# Lesson 2 — Pictures, links and a proper skeleton

**Length:** about 15 minutes
**Students finish with:** the ring photograph on their page, navigation links that jump down the page, an email link, the name "ORÉE" in the browser tab, and the accent back on the É.

**New ideas this lesson:** Sublime Text · the page skeleton (`<!DOCTYPE>`, `<html>`, `<head>`, `<body>`, `<title>`) · tags inside tags · attributes · images (`<img>`, `src`, `alt`) · folders and file paths · links (`<a>`, `href`, `id`)

---

## Before you record

- Install **Sublime Text** (free to try, from sublimetext.com).
- Copy [start/index.html](start/index.html) into your `oree` folder. It's the result of lesson 1.
- Have the course **resources** folder ready ([../resources/images/](../resources/images/)), with all the ORÉE photographs. Students download the same folder.

---

## 1. Where we left off (1 min)

Open last lesson's page in the browser.

> "Last time we wrote our first tags and built the four parts of a website. Today we'll add a photograph, make our links work, and wrap the page in its proper packaging."

## 2. Meet Sublime Text (2 min)

> "Notepad is fine for a few lines, but websites grow quickly. Sublime Text is a notepad that helps you. It's still just text, with a few helpful extras."

1. Open Sublime Text and **drag the `oree` folder onto it**. The folder appears in the sidebar on the left.
2. Click `index.html` in the sidebar to open it.

Point out:

- **Colours:** tags turn one colour and your words another. It's easier to spot mistakes.
- **Line numbers** down the left.
- **Closing tags fill themselves in.** Type `</` and Sublime finishes the tag for you.

> "Nothing about the file has changed. It's the same index.html. We're just looking at it in a nicer editor."

## 3. The proper skeleton (4 min)

> "Our page works, but browsers are being polite about it. Every real webpage is wrapped in a standard skeleton. Let's add it."

Type it around the existing content, one line at a time, explaining as you go:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>ORÉE - Fine jewellery for the everyday</title>
  </head>
  <body>

    ...everything from last lesson goes here...

  </body>
</html>
```

| Line | What it says to the browser |
|---|---|
| `<!DOCTYPE html>` | "This is a modern webpage." Always the very first line. |
| `<html lang="en">` | "The webpage starts here, and it's in English." |
| `<head>` | Information **about** the page. Nothing in here appears on the page itself. |
| `<meta charset="UTF-8">` | "Use the full set of letters and symbols," including accents like É. |
| `<title>` | The name shown in the **browser tab**. |
| `<body>` | Everything visitors **see**. All our content goes in here. |

Explain the head and body with a picture students know:

> "Think of a parcel. The **head** is the label on the outside: who it's for, what's in it. The **body** is what's inside the box."

**Tags inside tags.** Show that `<title>` sits inside `<head>`, and `<head>` sits inside `<html>`, like boxes inside boxes.

> "We indent, moving lines in with the Tab key, to show what's inside what. The browser doesn't care, but it makes the file much easier for us to read."

Select the old content and press **Tab** to indent it inside `<body>`.

**The accent comes back.** Change `OREE` to `ORÉE` in both places, and add `©` before the year in the footer:

- **Mac:** press <kbd>Option</kbd> + <kbd>E</kbd>, then <kbd>Shift</kbd> + <kbd>E</kbd>.
- **Windows:** copy and paste it from here: **É ©**

Save and refresh. The accent shows correctly, and the browser tab now reads "ORÉE - Fine jewellery for the everyday."

> "That's what the meta charset line does. Without it, some browsers garble accents."

## 4. Add a photograph (4 min)

**Set up the folder.**

1. Inside `oree`, create a new folder called `images`, all lowercase.
2. Copy `hero-forma-ring.jpg` from the resources folder into it.

> "Websites keep their pictures in their own folder, like a photo album next to the document."

**Add the tag**, underneath the hero paragraph:

```html
<img src="images/hero-forma-ring.jpg" alt="A gold ring resting on a block of stone" width="600">
```

Save and refresh. Then go through each part of the line:

- `<img>` means **image**. It has **no closing tag**: there are no words to wrap around, the picture *is* the content.
- **Attributes** are the extra details inside the opening tag, always written as `name="value"`.
- `src` stands for **source**, meaning where to find the picture. `images/hero-forma-ring.jpg` means *"go into the images folder, then find this file."* The slash separates folder from file.
- `alt` is the **alternative text**. It's read aloud to people using screen readers, and shown if the picture can't load.
- `width="600"` is a temporary size limit. The original photo is much bigger. (We'll handle sizes properly with CSS in a later lesson.)

**Break it on purpose.** Misspell the file name (`hero-forma-rng.jpg`), save and refresh.

> "The browser can't find the picture, so it shows a broken-image icon and our alt text. If an image doesn't show, check the spelling of the path first. Capital letters count, too."

Fix it, save and refresh.

## 5. Make the links work (4 min)

> "Links are what make it a *web*: click on something and go somewhere else."

**The link tag.** Show one on its own first:

```html
<a href="#collection">Collections</a>
```

- `<a>` stands for **anchor**: *a link*.
- `href` is **where it goes**.
- The words between the tags are **what people click**.

**Link type 1: jump to part of the page.** Give the content heading a name with `id`:

```html
<h2 id="collection">Find your everyday extraordinary.</h2>
```

Then turn the navigation words into links:

```html
<p>
  ORÉE -
  <a href="#collection">Shop all</a> |
  <a href="#collection">Collections</a> |
  <a href="#">Our atelier</a> |
  <a href="#">Our story</a>
</p>
```

- `id="collection"` puts a name tag on that heading.
- `href="#collection"` means *"jump to whatever is named collection."* The `#` means *on this page*.
- `href="#"` on its own is a **placeholder**: a link that doesn't go anywhere yet. We'll point those at real sections in lesson 3.

Save, refresh and click **Collections**.

> "If your window is tall, it may barely move, because the page is short. Make the window smaller and try again. The jump matters more as the page grows."

**Link type 2: an email link.** In the footer:

```html
<a href="mailto:hello@oree.com">hello@oree.com</a>
```

Click it: the computer's email app opens with the address filled in.

**Link type 3: another website.** Mention it briefly. It's the same tag with a full web address, such as `href="https://www.instagram.com"`. Students try this in the task.

## 6. Wrap up (1 min)

- Recap: the skeleton (head = label, body = contents) · attributes are `name="value"` · images need `src` and `alt` · links need `href`.
- Set the task (below).
- Next lesson: we'll fill in **the whole page**, every section of the ORÉE design, and learn how to group content into sections.

---

## Student task

1. Copy `category-earrings.jpg` into your `images` folder and add it under the "Find your everyday extraordinary" paragraph. Write your own `alt` text describing it, and give it `width="400"`.
2. Add a link to Instagram in the footer: `<a href="https://www.instagram.com">Instagram</a>`.
3. Change the `<title>` to something of your own. Save, refresh, and check the browser tab.

*Stuck? Compare your file with `finished/index.html`.*

---

## Notes for you

- **Where the image goes.** In the real design the photo sits beside the headline. That needs CSS (lesson 6), so for now it simply sits underneath.
- **Why `width="600"`?** Without it, the 1,600-pixel-wide photo fills the whole screen and students can't see anything else. We remove it in the CSS lessons.
- **Three spellings that must match:** the folder name (`images`), the file name, and the path in `src`. Most "my image won't show" problems are one of these. Lowercase everything and use no spaces.
- **Common problems students will hit:**
  - The image shows on their computer but not once they upload it (lesson 10): the capital letters in the path don't match the file name. Worth a quick mention now.
  - The jump link "does nothing": the page is too short to scroll, or the `id` and `href` are spelled differently.
  - Sublime shows everything in one colour: the file was saved without `.html`, or Sublime needs *View → Syntax → HTML*.
