---
layout: post
category : blog
tags : [residency]
---
<h2>The Residency Continues...</h2>

<p>This past week was spent taking care of a bunch of little projects here and there - cross platform testing, a UI proposal, sketching and wire-framing to name a few. Now, I have always had a fascination with how things work and how to fix them, tearing apart electronics and even pulling the transmission out of my Jeep. Whenever I come across something mechanical or technical I need to know how it works and I wrestle with it until I figure it out. Working on our internal project I have been neck deep in Rails, and the more I work on it the more I want to get a grasp on the internals. I have also been looking for a good waza project for Friday afternoons.</p>
<p>This weekend I decided to kill a few birds with one stone (or is that a few pigs with one bird?). Over the last ten years I have been researching my family tree, tracing a good portion of it all the way back to the 1500s. However all of my research has been done the old fashioned way - pen and paper:</p>
<img src="/images/tree.jpg" alt="Family Tree" />
<p>I have resorted to pen and paper because every piece of software out there that I have come across has been almost un-usable. So Sunday afternoon I put on Top Gear, fired up the laptop, sketched out my database tables and went to work. I was shocked - one episode later and I had a functional application up and running. I got a much better understanding of how Models and Controllers function on a technical level, as well as database interactions. Another episode later and it was in pretty good shape.  The only snag I ran into was date fields set as 0000-00-00 (ie, members who haven't died) crashed the app when I tried to format the date using <code>.to_s(:pretty)</code> which calls <code>time_formats.rb</code> initializer. There's one problem to solve later. The major hurdle is going to be formatting and displaying the actual tree itself - should be a very interesting design problem. I am also really interested in figuring out how to get the database table relations working, lots to do!</p>
