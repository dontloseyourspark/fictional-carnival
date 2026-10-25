# Lesson 1 — What is a website?

**Length:** about 12–15 minutes
**Students finish with:** their first webpage, open in their browser
**New ideas this lesson:** the four parts of a website · what HTML is · saving a `.html` file

---

## Before you record

- Have the finished ORÉE site open in a browser tab, plus [anatomy.html](anatomy.html) in another.
- Have the finished site ready to show on mobile (a phone, or the browser's phone preview).
- Have an open Word document with a table.
- Have the simplified wireframe of the website open in Figma.
- Have open tabs of BBC, Amazon and Google Drive.
- Have an empty folder on the desktop called `oree`.

---

## Intro (before the title slide)

Are you a small business owner, self-employed, or someone who is simply interested in learning how to create their own website using HTML, CSS and JavaScript, but all the tech jargon and coding makes it feel like you could never do that? Well, I've got good news for you! I've been working in the tech industry for over 10 years and I have lots of experience teaching creatives how to tech, and if they can, then you can tech too.

> [Intro slide/music]

Hello everybody and welcome to YouCanTechToo. My name is Harris and today we're going to be starting our course on website building. This is what we're going to be creating in this course.

> Open the finished ORÉE site and scroll through it slowly. Show the responsive site on mobile.

If it seems scary, don't worry, I'll hold your hand along the way and you can definitely create this. Allow me to show you how!

## 1. Where we're going (1 min)

> Open the finished ORÉE site and scroll through it slowly.

Over the next ten lessons, we're going to build this website together, starting from a blank page. You don't need any experience.

## 2. The four parts of a website (2–3 min)

Websites may look scary at first glance, but they are really not.

Think about it like this: websites are built from boxes stacked on top of each other. Yes, really.

You've probably worked in Microsoft Word before. If you've created a table in Word, every website you see is basically just a table within a table within a table and so forth.

> Show a simple Word table.

See how a table has rows and columns? Websites work on the same principle.

Let's take a simplified form of the website that we're going to create.

> Show `anatomy.html`.

We have four sections here that we'll explore in detail in a minute. For now, I just want you to notice them.

Can you see that they are basically just four big boxes? Translated into a table, what would that be? Exactly! It's one big column with four rows.

> Show the Figma file of a very simplified wireframe of the website.

> Switch to `anatomy.html`. Walk through the four parts, then point them out on the real ORÉE page:

1. **Navigation:** the name and links at the top. *Helps you find your way.*
2. **Hero:** the first big message and picture. *Tells you what the site is about in seconds.*
3. **Content:** everything in the middle. *Products, stories, photos.*
4. **Footer:** the bottom. *Contact details and small print.*

> Then open websites students will know and spot the same four parts together: BBC, Amazon, Google Drive.

Once you've seen it, you'll notice it everywhere. Nearly every website is these four parts, stacked from top to bottom.

Today, we'll focus on these four parts and fill out the details as we go.

## 3. What is HTML? (2 min)

Great! So, how do we tell a computer something is a website? Doesn't it KNOW?

Even though computers are pretty smart now, we still have to tell them what kind of files we're giving them. Remember our Microsoft Word file? It's saved as a .docx file. A picture can be a .jpg or .png file. Website files have their own type of file too: .html files.

HTML is a special language that tells computers that what they are looking at is a website.

Think about HTML as the skeleton of the website. Remember the table in our Word file? We can use a table to tell the computer "I want this to go exactly here on the page." In the same way, we create the structure of the page using HTML.

Let's jump in and create our skeleton! Did you know you don't need any special or expensive programs for this? You can literally code your whole website in Notepad.

**Setup (show these on screen; they are the most common place beginners get stuck):**

- Have an empty folder on the desktop called `oree`.
- **Windows:** in File Explorer, turn on *View → Show → File name extensions*. Without this, students can't see whether they saved `index.html` or `index.html.txt`.
- **Mac:** in TextEdit, open *Settings*:
  - *New Document* tab → choose **Plain text**.
  - *Open and Save* tab → tick **Display HTML files as HTML code instead of formatted text**.

Okay, once you've got this ready, I want you to open up Notepad on Windows or TextEdit on a Mac and create a new document.

Let's have a look at our design. Some of the biggest words on the page are in the hero section, so I'll use them to illustrate.

## 4. Your first webpage (2 min)

> Write this large on screen (in Notepad, zoomed in):

```
A form. A feeling. Forever.
Meet Forma. A small sculpture in recycled gold. Made to become a part of you.
```

1. **Save it** into the `oree` folder as `index.html`.
   - **Windows:** set *Save as type* to **All files (\*.\*)**, then type the name `index.html`.
   - **Mac:** if TextEdit asks about the extension, choose **Use .html**.
2. Open the `oree` folder and **double-click `index.html`**. It opens in the browser.

Congratulations! You've made your first webpage! It doesn't look like much yet, but we'll improve it in the following lessons.

> Point out that the two lines appear joined together on one line in the browser.

Did you notice? We wrote two lines, but the browser shows them as one. That's because we haven't told the browser which words are a heading and which are a sentence yet. That's exactly what we'll do in the next lesson.

## 5. Wrap up (1 min)

*Suggested. Edit or remove as you like.*

- Recap: four parts, stacked like rows in a table · `.html` files are webpages · you can write one in Notepad.
- Set the task (below).
- Next lesson: we'll learn **tags**, the labels that turn plain words into headings and paragraphs, and build the four parts of our page.

---

## Student task

*Suggested. Edit or remove as you like.*

1. Change the words in your `index.html` to anything you like. Save, then refresh the browser to see the change.
2. Open a website you use often and spot its four parts: navigation, hero, content and footer.

*Stuck? Compare your file with `finished/index.html`.*

---

## Notes for you

- **If a student asks "is it really tables?"** Websites used to be built with real tables, but modern sites use boxes that behave in a similar way. The table is a comparison to make the idea click, which is what we want here.
- **HTML and the .html ending.** It's the `.html` ending that makes the computer open the file in a browser. HTML itself, the tags, arrives in lesson 2. That's when "HTML labels each part of the page" becomes concrete.
- **Common problems students will hit:**
  - The file opens in the editor, not the browser → right-click → *Open with* → choose their browser.
  - Nothing changes after editing → they forgot to save, or to refresh.
  - The file is called `index.html.txt` → file name extensions are hidden (Windows), or TextEdit added `.txt` (Mac).
