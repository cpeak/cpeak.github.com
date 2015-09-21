---
layout: post
category : blog
tags : [residency, web-design]
thumbnail: grid-assignment.jpg
---
<article>
  <h2>Music Theory and Web Design?</h2>
  <p>In my last post I discussed some practices I have been learning in order to clean up my HTML5 and CSS code on the back end.  This week I have been working on how to improve my typography, design, and layout using a grid based approach aided by the modular scale.</p>
  <h3>Modular Scale</h3>
  <p>The modular scale is a mathematical approach to layout design using ratios that are found in music. Thankfully my wife was a voice major in college so when I asked her about scales about it she gave me a long lecture on how they can evoke certain feelings or '<em>ethos</em>'.  If your goal is a more upbeat design then you may want to use a perfect-fourth which is a happier scale.  Conversely if you want a more serious and somber design, something like a minor-sixth might suit your needs. Now, how in the world do we apply music theory to web design? A scale is all based on the root note, whatever it may be.</p>
  <p>We take the ratios found in the scales and apply them to our root note or in our case, our base text size. Lets say our goal is to have a base text size of 16px - using a perfect fourth scale you get 16, 21, 28, 38, 50, 67, and so on. Now we can apply this to our design - our H1 tag will be at 67px, H2 50px, etc, back down to our root 16px text size. Not only do we use this for picking out our font-size's we can also use these numbers in our grid spacing.</p>
  <h3>Grid Based Layout</h3>
  <p>As a carpenter would you build a house without a level?  Sure you could frame the house and get everything together, but it wouldn't be anywhere near as good as it should be.  <a href="http://www.smashingmagazine.com/2007/04/14/designing-with-grid-based-approach/">Smashing Magazine says it best</a>: <em>Your goal is to establish a consistent, logical screen layout, one that allows you to &quot;plug in&quot; text and graphics without having to stop and rethink your basic design approach on each new page.</em></p>
  <p>Using the <a href="http://www.hashgrid.com">#Grid</a> JavaScript plugin I can toggle an overlay onto a site and see how the modules line up on the grid based layout. I re-visited my Tribune Article redesign project and used the perfect-fourth scale to determine column, gutter, and body width.  I knew I wanted a few more columns than usual in my layout due to the complexity of a news site and I was also limited in screen size to roughly 1000px.  Looking at our scale and crunching some numbers, I came up with a layout of 6 columns at 120px with gutters of 38px.  This gave us a total width of 948px.</p>
  <img src="/images/grid_layout.png" alt="Grid Based Layout" />
  <p>As you can see in the photo above, the main article uses roughly 3 columns, then a gutter, then the sidebar uses precisely 2. Now the layout has a much better and more consistent flow. The photo and caption sit nicely in the second and third column, and to create some tension I made sure the article didn't flow all the way over to the edge of the 3rd column.</p>
  <p>Just remember that these are guidelines and can be broken when necessary. Bending or breaking these rules create tension and unique design... just be careful when you stray from your scales .</p>
</article>

