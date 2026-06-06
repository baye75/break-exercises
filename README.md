# PART 1 - REFLECTION JOURNAL

## CLASS 01 - The 2026 Web Ecosystem
## Theory
### Question 1.
![web ecosystem](./web.png)
The browser takes the HTML and CSS code, passing it through a seires of processes to finally produce what we see on the screen (Rendering). The browser reads the HTML text, breaks it down and converts it into what is called nodes and connects them into a tree structure called the DOM Tree (Document Object Model). The browser does the same thing with the CSS files, but this time it builds a CSSOM (CSS Object Model). The browser takes the DOM (the structure) and the CSSOM (the styles) merging them together to form the Render Tree. This tree only contains the things that actually need to appear on the screen. For tthhe layout, the browser checks the screen size and the Render Tree, and calculates the exact location on the screen, width, and height for every single element. Finally, the browser acts like a painter, by filling in the actual pixels on the screen.
A knowledge of the web ecosystem is essential for the developer as he learns to load scripts much better as this will help the browser to load page faster. A knowledge of this also enables the developer to prevent lagging which results from unnecessary changing of the layout of the web page. With the knowledge of this, the developer also learns to use CSS properties like transform or opacity to ensure smooth animations. This ensures smooth and fast loading of the webpage.

### Question 2.
If we imagine the interent as a highway that delivers packages (data) between cities (computers), the TCP (HTTP/2) is a single lane road with strict checkpoint system while QUIC (HTTP/3) is a multilane highway with smart routing. With this analogy, it is easy to see that QUIC solves the problem of connection set up speed (fast connection set up). Also with TCP, a lost packet during transmission causes even other unrelated packets to wait while with QUIC, only the affeced packet is made to wait. With TCP, any drop in a connection and another connection taking over will result in all active services using that initial connection to all resart, but with QUIC, allactive services continue seamlessly even with changes in connection.

### Question 3.
A popular website that does not heavily use semantic HTML tags in its main user interface is Facebook. Instead, it relies on deeply nested <div> and <span> elements.
Non-semantic websites are easily recognizable from the fact that it is almost impossible for screen readers to navigate the website by jumping from one heading to the other orusing screen reader shortcut menus, since there are no well defined headings or <nav> elements.
Also, the accessibility of none semantic websites is poor. For instance, while using say assistive technologies to access a website, these technologies read codes strictly in the order they are written, as a result, you might have say a Sidebar content being read out inside a paragraph.

## Product Thinking

### Question 1
if we imagine that the blog is a recipe book in a giant library (a search engine, say Google). The librarian 
(Google's search engine) needs to quickly find the best recipes to recommend. 
Semantic HTML is like adding clear chapter titles, ingredient lists, and step-by-step instructions – it tells the librarian exactly what each part of the page contains. 
When we use tags like article, header, main, and aside, we are 
giving Google a structured map of our content. This helps search engines understand, trust, and rank our recipes higher. For instance, wrapping each recipe within an article tag  helps search engines like Google to instantly know this block is a complete, stand-alone recipe and recipes marked with article are more likely to get featured 
snippets and rich results, which can double your click-through rate.
Aslo, header groups the introductory content of a section, say a recipe from the actual recipe and this helps search engines display the correct title and description in search. The aside tag contains extra information related to the main content, like a sidebar. This helps search engines to easily identify and keep the main content of the blog fom extra information.

### Question 2
Let's imagine that that our multi player game server is like a pizza shop. If this shop is in another country, evey pizza ordered will take ages to arrive. This is a lag. Now, edge computing is like opening mini pizza shops (our game servers) in every city within the country thereby making the pizza arrive faster since it is now closer. Some of the benefits edge computing offers in this type of game are:

Vey Fast Response: /edge computing makes response to every player's click to be super fast and this is vey essential in a multi player game as any delay makes the game feels sluggish and unplayable.

Smooth gameplay, no freezes: Over the internet, packets can get lost and also, players connection can get sluggish. This can result in freezing in the game. With edge computing, when packets get lost or a player's connection becomes bad, the edge servers can predict movement, and keep the game world consistent for everyone. This is necessary as it makes even players with bad connection to have an awesome experience.

Real-time Cheat Detection: With one central server probably located far away, players can exploit any lag to cheat and avoid detection. With edge computing, the edge servers can detect any suspicious move and flag it before it even gets to the main server. This matters bevcause cheaters get caught instantly, not after the game ends, and this protects the integrity of the game.

## Engineering Best Practice

### Question 1.
I disagree with the approach of just using "divs", and here's why it matters beyond just "making it work."

Accessibility first: Screen readers used by visually impaired users rely on semantic HTML to navigate. When you use div for everything, a blind user hears just "div, div, div" which is completely meaningless. But, hearing header, nav, main, and article tells them exactly where they are on the page. Using just "divs" everywhere essentially locks out users with disabilities.

SEO impact: Search engines like Google prioritize semantic structure. An article tag signals "this is the main content worth giving attention to," while a "div class="article" carries no semantic weight. Your div-heavy site might rank on page 5 while a semantic competitor grabs page 1, costing real traffic and revenue.

Code maintainability: Say six months from now, you or a teammate might need to update that "div-filled" HTML. Finding where the main content starts means digging through say 15 nested divs. With semantic HTML, you easily scan for main and article, thereby solving the problem instantly.

Developer collaboration: When a new developer joins the team, semantic tags act as self-documenting code. They instantly understand page structure without guessing what a "div-filled" page with various classes means.

Additionally, using article over div cost nothing but save hours of debugging, improve accessibility, boost SEO, and make you a better teammate. "It works for everyone" is always better than  "it works for just you or a few".

## Class 02: Typography & Information Hierarchy
## Theory
### Question 1.

The em (emphasis) tag is used when you need to stress a word when speaking, and as for one using a screen reader, it changes tone/pitch (stress); whereas the i (idiomatic) tag is used when you need a different voice, mood, or category, whithout any change in tone (reads normally).

Fo example, let's say i have "I said I wanted **two** eggs, not three.", whee Iwanted the word "two" to be stressed;

`<p>I said I wanted <em>two</em> eggs, not three.</p>`

When the html above is endered, a screen reader will read it out stressing the word "two".

On the other hand, when we need a different voice or mood, but not to stress it, we use `<i>`. An exampleis in a movie. or book title.
`<p>My favorite series of all time is <i>24</i> featuring Kiefer Suderland.</p>`. Here, "24" will be read out with a different voicebut not stressed.

### Question 2.
3 HTML Elements With Special Screen Reader Behavior
1. `<button>` – "Button, Click to Activate"
The screen reader announces:

"Submit form, button" (reads the text, then announces it's a button)

Why the browser handles it this way:

The browser knows that a `<button>` is interactive and triggers an action. By announcing "button" after the label, the person using the screen reader understands:

✅ This is clickable

✅ Pressing Enter or Space will activate it

✅ It will perform an action (not navigate somewhere)

If you use a `<div>` as a button, the screen reader announces: "Submit" (just text). The user has NO idea it's clickable. They might sit there wondering what to do.

2. `<nav>` – "Navigation, List of Links"
WA screen reader announces:

"Navigation region, list, 5 items" (then reads each link)

Why the browser handles it this way:

The browser knows that `<nav>` contains site navigation, the primary way to move around your website. Screen readers offer a shortcut key (usually R or N) to jump directly to the navigation region.

What happens if you use `<div class="nav">`:

No region announcement.

No keyboard shortcut to jump to navigation.

The user must tab through EVERY link on the page one by one.

3. `<img>` with alt attribute – "Image, [description]"

A screen reader announces (with good alt text):

"Image, golden brown jollof rice in a red bowl"

What a screen reader announces (with empty or missing alt):

"Image" (or worse, reads the filename: "img1 dot jpg")

Why the browser handles it this way:

The browser knows images are visual content that blind users cannot see. The alt attribute provides a text replacement. The screen reader announces "image" so the user knows it's a picture, not text.

### Question 3.
 When to Use ARIA Labels
ARIA is designed for complex custom widgets that HTML simply doesn't have built-in tags for.

A good Example is icon-only button (no visible text)

`<button aria-label="Delete recipe">
  🗑️
</button>`

Why this needs ARIA: A sighted user sees the trash icon and knows "delete." A screen reader sees only an emoji (which it might read as "waste basket" or just skip). The aria-label ensures the screen reader announces: "Delete recipe, button"

When to fix your HTML (not use Aria):

A golden rule is that semantic HTML is better than Aria.

Bad example Aria usage is using ARIA to fake a button:

`<div class="fancy-button" role="button" aria-label="Submit form" tabindex="0">
  Submit</div>`

The problem with the code above is that you have to. manually code many attibutes for the button, whereas simply using a semantic HTML `<button>Submit form</button>` automatically provides those attributes.

## Accessibility Reflection
### Question 1.

## Product Thinking
### Question 1.
This is a heading hierarchy that can be used for an API documentation page where developers need to scan quickly:

`<h1>` – API name + primary purpose
Example: "Nigerian Universities API – Search for Nigerian Universities and bsic information about them"

Why: Tells developers immediately what this API does and whether they're in the right place.

`<h2>` – Major sections (the "table of contents" of functionality)
Authentication – How to get API keys and tokens

Endpoints – All available URLs grouped by resource

Request examples – Sample cURL, JavaScript, Python code

Response format – What data comes back (JSON structure)

Error codes – What goes wrong and how to fix it

`<h3>` – Specific endpoints or subsections under each `<h2>`:

`<h3>` POST /v1/name – Initialize a search by name

`<h3>` GET /v1/verify/{reference} – Cross check with officaldata from NUC

`<h3>` GET /v1/details – Get University information

Under `<h2>` Error codes:

`<h3>` 400 Bad Request – Missing or invalid parameters

`<h3>` 401 Unauthorized – Invalid API key

## Class 03 Modern Assets & Linking
## Theory
### Question 1.
Step 1: Question the format immediately
Reasoning: PNG is for graphics with transparency, not photographs. A hero image is likely a photo; PNG is the wrong choice (5 MB is massive).

Step 2: Convert PNG to WebP or AVIF
Tools: Squoosh.app (free, browser-based) or ImageMagick CLI

What to do:

Try AVIF first (best compression in 2026 – supported by 97% of browsers)

Fallback to WebP (99% browser support)

Result: 5 MB PNG reduced to ~300-500 KB AVIF (90% size reduction, visually identical)

Reasoning: AVIF uses modern compression algorithms that preserve detail at tiny file sizes.

Step 3: Resize to responsive breakpoints
Tools: Sharp (Node.js), Cloudinary, or Imgix

What to do: Generate 3-4 sizes:

hero-640.jpg (mobile)

hero-1024.jpg (tablet)

hero-1600.jpg (desktop)

hero-2400.jpg (2x retina)

Reasoning: Sending a 2400px image to a 375px phone wastes bandwidth and slows load time.

Step 4: Compress with quality testing
Tools: ImageOptim (desktop) or Squoosh

What to do: Test quality settings:

Start at 75% quality

Reduce until visible artifacts appear

Stop just above that threshold

Step 5: Implement with `<picture>` element:

```
<picture>
  <source srcset="hero.avif" type="image/avif">
  <source srcset="hero.webp" type="image/webp">
  <img src="hero.jpg" alt="Chef preparing jollof rice" loading="eager">
</picture>
```
Reasoning: Browser picks the best format it supports. loading="eager" ensures hero loads immediately (not lazy-loaded).

Step 6: Add modern loading optimizations
fetchpriority="high" – Tells browser this image is critical

Preconnect to image CDN – dns-prefetch and preconnect

Set width/height attributes – Prevents layout shift (CLS)

In summary, we convert the PNG image to to AVIF at 75% quality, generate 4 responsive sizes, serve via `<picture>` with WebP fallback, and add fetchpriority="high" – shrinking 5 MB to 250 KB without visible quality loss.

### Question 2.
srcset allows you to provide multiple image versions and lets the browser choose the right one based on either screen width or pixel density, or both.

Mostly, we use srcset for:

Responsive images: Different screen sizes need different resolutions.

Art direction: Cropped mobile version vs full desktop version.

Retina displays	Serve 2x images to high-density screens.

Slow connections: Let browser choose smaller file if bandwidth is limited.

srcset is not to be used for icons, SVG graphics, or images that are always the same size.

Use case scenario: Mobile User with Slow Connection
Problem: A chef's blog has a hero image of jollof rice. The desktop version is 1200px wide, 500 KB.

A mobile user on 3G in Oshogbo: Phone screen is 375px wide. But without srcset, they download the same 1200px, 500 KB image, this takes about 10 seconds and user leaves before page loads.

However, with srcset:

```
<img src="hero-large.jpg"
     srcset="hero-small.jpg 400w, hero-medium.jpg 800w, hero-large.jpg 1200w"
     sizes="100vw"
     alt="Jollof rice in a red bowl">
```
The browser sees "the user's screen is 375px and on 3G", hence it downloads hero-small.jpg (only 80 KB). This loads in 1 second, and hence the user user stays, reads recipe, and most probably shares/recommends the post.

### Question 3.
In simple terms, rel="noopener" prevents a malicious website from taking over the page that opened it, just like making sure a stranger can't reach through your front door and grab your keys after you invite them in.

Security Vulnerability it solves:

Without noopener: When your site opens a link in a new tab (target="_blank"), that new tab gains partial control over your original page. As a result, a hacker could:

Redirect your page to a fake site.

Steal information from your page.

Run code pretending to be you.

With noopener: The new tab runs completely isolated – it can't touch your original page at all.

The rule of thumb is if you use target="_blank", ALWAYS add rel="noopener noreferrer", every single time, without exception.
```
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  Link text
</a>
```

##  Engineering Thinking
### Question 1.
The optimization strategy for50 product images
1. Format Choice
AVIF first, WebP fallback – 70-80% smaller than JPEG at same quality

2. Responsive Sizing
Generate 3 sizes per image:

product-200.jpg (thumbnail grid)

product-600.jpg (hover/modal view)

product-1200.jpg (full detail)

Serve via srcset – browser picks right size for screen

3. Lazy Loading

`<img loading="lazy" src="product-thumb.jpg" alt="Product">`

Result: Only 4-6 images load initially (above fold). Remaining 44+ load as user scrolls.

4. CDN Delivery
Use Cloudinary, Imgix, or your host's CDN – images cached on servers near each user (Lagos, London, New York, etc.) instead of traveling from your single origin.

The final result is that before optimization, we have say 50 × 500 KB images = 25 MB page which have a load time of say more than 12 seconds, thereby user might leave without buying. However after optimization, we have a 50 × 50 KB = 2.5 MB page which loads in 2 seconds thereby making the user to stay.

In summary, we serve AVIF thumbnails via CDN with loading="lazy" and srcset for responsive sizes, thereby cutting page weight by 90% while images retain their quality.


