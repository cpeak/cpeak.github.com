---
layout: post
category : blog
tags : [residency, web-design, CSS3]
thumbnail: code.jpg
---
<article>
  <h2>Sorting out Position &amp; Z-Index Properties</h2>
  <p>One concept of web design that can trip up beginners and less-experienced developers is the <code>position</code> &amp; <code>z-index</code> properties.  CSS gives the designer flexibility to move elements around the page freely, and not just in two dimensions.  Using these two properties you can stack and layer divs so they flow above, below, and through each other. However when elements are positioned differently they are taken out of the normal flow of the document. Lets take a look</p>
  <h3>Position</h3>
  <p>The <code>position</code> property allows a div to break free from the normal flow of the layout. Typically elements are rendered in order and laid out according to their float &amp; margin properties.  Using a <code>fixed</code> or <code>absolute</code> position property, the element will ignore the normal document flow and behave depending on a different set of rules.</p>
  <h3>Position: Fixed</h3>
  <p>A div that is set to <code>position:fixed</code> will ignore the entire document flow, positioning itself only in relation to the view screen.  In other words it will remain in a fixed spot in the browser window irregardless of where the user scrolls to. How do we define where in the browser window the element will display? To do this we have to set the <code>top</code> and <code>left</code> properties in our CSS. For <code>&lt;div id="foo"&gt;</code> we can set <code>top: 10px;</code> and <code>left: 50px;</code> that way <code>foo</code> will display 10px from the top and 50px from the left, creating a static div that will remain in that location at all times. This can be advantageous for example if we have a page with a lot of text that the user must scroll through - when the user reaches the bottom the navigation is still at the top left, so they dont have to scroll all the way back to the top to move to a new page.</p>
  <h3>Position: Absolute</h3>
  <p>Here is where it gets a little tricky. Lets set <code>foo</code> to <code>position: absolute;</code>. Without changing anything else the div may not move at all.  A div with an <code>absolute</code> positioning will ignore the document flow, and position itself based on its <em>parent</em> div.  If div is sitting within the <code>&lt;body&gt;</code> section it will float in the top left just as before.  However, if we move it into another section of the page it will relate itself to that particular parent element <em>only if that parent element has its position set to <code>relative</code>.</em> Wait a second, <code>relative</code>?  This is where a lot of people get confused. Setting a div to <code>relative</code> tells all its child elements to use itself to orient themselves when they are positioned absolutely. If you dont define the parent element the child will find the first container above it set to <code>relative</code> and position itself according to that. If you dont set your <code>absolute</code> and <code>relative</code> tags correctly, some strange thing will happen.</p>
  <h3>Z-Index</h3>
  <p>Just to further the complexity, lets take a look, at <code>z-index</code>.  This property allows us to stack our elements in 3 dimensions, just like an animator with multiple cells creating a layered effect, we can leverage it to create some interesting designs. If left un-defined any element will have a default <code>z-index</code> of 0. A div set to 10 will render above, and -10 will render below.  Combine this with the <code>position</code> property and your design is infinitely more flexible.</p>
  <h3>Bring it all together</h3>
  <p>You can go even <em>further</em> down the rabbit hole by throwing JQuery into the mix, dynamically changing <code>z-index</code> properties on the fly.  Just remember these are garnishes, if you start moving things around and re-stacking tons of elements things will probably start mis-behaving, or worse confuse your visitors. These are tools any good developer should have in their bag, but remember to <em>use the correct tool for the job</em>.</p>
</article>


