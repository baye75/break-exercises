# PART 1 - REFLECTION JOURNAL

## CLASS 01 - The 2026 Web Ecosystem
### Question 1.
![web ecosystem](./web.png)
The browser takes the HTML and CSS code, passing it through a seires of processes to finally produce what we see on the screen (Rendering). The browser reads the HTML text, breaks it down and converts it into what is called nodes and connects them into a tree structure called the DOM Tree (Document Object Model). The browser does the same thing with the CSS files, but this time it builds a CSSOM (CSS Object Model). The browser takes the DOM (the structure) and the CSSOM (the styles) merging them together to form the Render Tree. This tree only contains the things that actually need to appear on the screen. For tthhe layout, the browser checks the screen size and the Render Tree, and calculates the exact location on the screen, width, and height for every single element. Finally, the browser acts like a painter, by filling in the actual pixels on the screen.
A knowledge of the web ecosystem is essential for the developer as he learns to load scripts much better as this will help the browser to load page faster. A knowledge of this also enables the developer to prevent lagging which results from unnecessary changing of the layout of the web page. With the knowledge of this, the developer also learns to use CSS properties like transform or opacity to ensure smooth animations. This ensures smooth and fast loading of the webpage.

### Question 2.
If we imagine the interent as a highway that delivers packages (data) between cities (computers), the TCP (HTTP/2) is a single lane road with strict checkpoint system while QUIC (HTTP/3) is a multilane highway with smart routing. With this analogy, it is easy to see that QUIC solves the problem of connection set up speed (fast connection set up). Also with TCP, a lost packet during transmission causes even other unrelated packets to wait while with QUIC, only the affeced packet is made to wait. With TCP, any drop in a connection and another connection taking over will result in all active services using that initial connection to all resart, but with QUIC, allactive services continue seamlessly even with changes in connection.

### Question 3.
A popular website that does not heavily use semantic HTML tags in its main user interface is Facebook. Instead, it largely relies on deeply nested <div> and <span> elements.
