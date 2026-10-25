# Lesson 2 — Your first tags

**Length:** about 15–20 minutes, depending on the installation walkthrough
**Students finish with:** a page with a main heading, section heading, and paragraphs, covering the four parts of our website
**New ideas:** using an editor · what a tag is · opening and closing tags · `<h1>`, `<h2>` and `<p>`

---

## Before you record

- Copy [start/index.html](start/index.html) into your `oree` folder. It should match the result of lesson 1: the headline and the extra sentence, without tags.
- Have the [anatomy diagram](../lesson-01/anatomy.html) from lesson 1 open in a browser tab.
- Have the Sublime Text download page ready.
- Have Notepad or TextEdit ready for comparison.

---

## Opening

Are you a small business owner, self-employed, or someone who is simply interested in learning how to create their own website using HTML, CSS and JavaScript—but all the tech jargon and coding makes it feel like you could never do that?

Well, I've got good news for you! I've been working in the tech industry for over ten years, and I have lots of experience teaching creatives how to tech. We'll take it one step at a time, and I'll explain what we're doing as we go.

You can tech too.

> Intro slide/music.

Hello everybody, and welcome to YouCanTechToo. My name is Harris, and this is part two of our course on website building.

## 1. Where we left off

> Open `index.html` in the browser.

Last time, we made our first webpage. Right now, it's just plain words. We haven't told the browser which words are a heading and which are a paragraph.

Today, we'll tell it using HTML tags. HTML uses tags to describe our content.

Before we do that, there's an editor you can download and try for free called Sublime Text. It will help us see what's going on in our file more easily.

> Show an example of HTML in Sublime Text beside the same code in Notepad or TextEdit. Point out the colours without explaining the code yet.

Notice how Sublime uses colours to help us recognise different parts of the code. We'll see that in action shortly.

Let's install it now.

> Demonstrate downloading and installing Sublime Text from the official website.

Sublime offers a free evaluation. If you decide to keep using it, you'll need to buy a licence.

If you feel more comfortable staying with TextEdit or Notepad for now, that's fine too. There are other editors you can use, such as VS Code or Notepad++. I'll be using Sublime in the following recordings, but the HTML we write will be the same whichever editor you choose.

Now, something to remember: our HTML file can look different in the editor from how it looks in the browser.

The editor lets us write and change the file. The browser reads the HTML and displays the webpage. That process is called rendering.

> Show the file in the editor and the browser.

Double-clicking `index.html` will usually open it in the browser. To edit it, we need to open it in our editor instead.

From now on, we'll have the file open in two places: the editor to write, and the browser to look.

## 2. HTML magic

In Sublime Text, click **File**, then **Open**, and browse to your `index.html` file.

> Open the file.

Not much to see here. Yet.

Let's add some HTML magic.

> Add two tags around the heading, leaving the sentence beneath it unchanged.

```html
<h1>A form. A feeling. Forever.</h1>
```

Save your file, switch to the browser, and refresh.

> Demonstrate saving and refreshing.

Well, that certainly did something!

The heading still shows, but the parts in brackets don't. And the heading is now big and bold.

Remember how we said HTML is a language? Well, now we've said something to the browser.

We just told it: this is a heading. And we did that using tags.

## 3. What is a tag?

Tags are kind of like punctuation in HTML that also describes the content.

Think of brackets around a phrase: there's a beginning, something in the middle, and an end. The tags we're using today work in pairs like that.

> Zoom in on the heading and point to each part.

- `<h1>` is the **opening tag**. It says, "A heading starts here."
- The words in the middle are the **content**. That's what visitors see.
- `</h1>` is the **closing tag**. It says, "The heading ends here." Notice the slash—that marks the closing tag.

The browser uses those tags to understand the words between them. It doesn't display the tags themselves.

> Point out the angle brackets, `<` and `>`, and show how to type them on your keyboard. Explain that their location can vary with keyboard layout.

You'll also need the forward slash, `/`, for closing tags.

> Show the forward slash.

You don't need to memorise everything immediately. We'll use these enough that they'll become familiar.

## 4. Three tags to start with

Today, we only need three tags.

| Tag | Means | Think of it as |
|---|---|---|
| `<h1>` | Heading, level 1 | The main heading of our page. |
| `<h2>` | Heading, level 2 | A section heading. |
| `<p>` | Paragraph | A paragraph of text. |

The "h" stands for heading, and "p" stands for paragraph.

The numbers describe heading levels. For our page, we'll have one main heading and use level two headings for sections underneath it.

That's all we need today.

## 5. Build the four parts

> Bring back the anatomy diagram.

Remember our four parts? Let's put a little of each onto our page.

We've already started the hero with our main heading. Now we'll add the other parts around it.

> Add one part at a time. Save, switch to the browser, and refresh after each addition.

First, let's add the words for our navigation above the main heading.

```html
<p>OREE - Shop all | Collections | Our atelier | Our story</p>
```

For now, these are just words inside a paragraph. We'll turn them into real links in a later lesson.

Save and refresh.

Next, we'll put paragraph tags around the sentence beneath our main heading.

```html
<h1>A form. A feeling. Forever.</h1>
<p>Meet Forma. A small sculpture in recycled gold. Made to become a part of you.</p>
```

That gives our hero a heading and a paragraph.

Save and refresh.

Now, let's add a section heading and a paragraph for our content.

```html
<h2>Find your everyday extraordinary.</h2>
<p>Fine jewellery for the everyday. Sculpted with intention, made slowly, and worn your way.</p>
```

Notice that we're using `<h2>` here. This is a heading for a section, underneath our main heading.

Save and refresh.

Finally, let's add a paragraph at the bottom for our footer.

```html
<p>2026 OREE - Designed in Paris. Worn everywhere.</p>
```

> Save and refresh, then show the complete code.

```html
<p>OREE - Shop all | Collections | Our atelier | Our story</p>

<h1>A form. A feeling. Forever.</h1>
<p>Meet Forma. A small sculpture in recycled gold. Made to become a part of you.</p>

<h2>Find your everyday extraordinary.</h2>
<p>Fine jewellery for the everyday. Sculpted with intention, made slowly, and worn your way.</p>

<p>2026 OREE - Designed in Paris. Worn everywhere.</p>
```

There we go! We've added a little of each of our four parts.

Notice the blank lines between them in our code. Those help us see the different parts while we're editing.

Extra spaces and blank lines in our code don't usually create extra space on the page.

> Add a few blank lines between two parts, save, and refresh to demonstrate.

Also, our heading isn't deliberately split into three lines like the design yet. We'll come back to that in a later lesson.

## 6. Change it on purpose

Let's try a little experiment.

What happens if we tell the browser that our main heading is a paragraph instead?

> Change both `<h1>` and `</h1>` to `<p>` and `</p>`.

```html
<p>A form. A feeling. Forever.</p>
```

Save and refresh.

> Show the result.

The words haven't changed, but they're now displayed as a paragraph.

That's because we changed what we told the browser those words are.

Let's make it a heading again.

> Restore both heading tags.

```html
<h1>A form. A feeling. Forever.</h1>
```

Save and refresh.

And our heading is back!

When you change one of these paired tags, remember to change its partner too.

## 7. Wrap up

Today, you opened your webpage in an editor and used HTML tags to describe your words.

You've learned three tags:

- `<h1>` for our main heading.
- `<h2>` for a section heading.
- `<p>` for a paragraph.

The tags we used come in pairs. The opening tag marks the beginning, and the closing tag—with its slash—marks the end.

And you've practised the loop we'll keep using: make a change, save, switch to the browser, and refresh.

Before the next lesson, I've got a small task for you.

> Show the student task.

Add another section heading and paragraph between your content and footer. Then try changing the main heading to some words of your own.

In the next lesson, we'll give our page its proper document structure and find out what goes around the content we've written.

See you in the next lesson!

---

## Student task

1. Add one more section between the content and the footer:
   - a level two heading: `Future heirlooms. Present favourites.`
   - a paragraph underneath: `Thoughtfully made in small batches.`
2. Change the main heading to a sentence of your own. Save and refresh to check it.

*Stuck? Compare your file with `finished/index.html`.*

---

## Notes for you

- **The name is written OREE throughout the course,** without the accent. The finished website shown in lesson 1 still says ORÉE, which you can mention if needed.
- **No `<!DOCTYPE html>`, `<head>`, or `<body>` yet.** Browsers can display this content without us explicitly writing those parts. Lesson 3 introduces the proper document skeleton.
- **Check the starting file:** it should contain both the headline and the extra sentence from the end of lesson 1.
- **Allow time for installation.** Invite students to pause rather than rushing to fit a particular video length.
- **Common problems students may encounter:**
  - Tags appear as text: check that they typed actual `<` and `>` characters and saved a plain-text `.html` file.
  - Double-clicking opens the browser: open the file through the editor's **File → Open** command.
  - Nothing changes: check that they saved, refreshed, and opened the same file in both places.
  - Text looks unexpectedly large: check the heading tags and where they open and close.
