---
layout: post
category : blog
tags : [residency, blog]
---
  <h2>Breaking The Habit</h2>
  <p>Over the past two weeks I have done a lot of reading while diving back into HTML &amp; CSS coding and reviewing the work habits that got me here. Previously I felt my code was strutting like John Travolta in <em>Saturday Night Fever</em>, but the more I learn it's looking more like Disco Stu.  I am largely self-taught, which in of itself is not a bad thing, but over the years I have developed some bad habits and peculiar idiosyncrasies. Now that I am doing this for a living it's time to break those habits and lay a solid foundation to grow as a professional developer.</p>
  <p>Like a lot websites out there my old projects were a big jumble of div IDs and classes using a pseudo-semantic formula that seemed to work well for me at the time. Typical sites would have a &lt;div id="header"&gt;, a &lt;div id="nav"&gt;, a few layout divs, some content classes and a &lt;div id="footer"&gt;, however I never set my naming conventions in stone. Now HTML5 has introduced some new elements that will help make markup and structure more concise and descriptive - better for maintenance, better for human eyes, and better for accessibility.</p>
  <p>In my last job I would occasionally get web re-design projects put on my plate, and as a developer there are few things scarier than having to pull the lid off an older website, invariably written by the client's teenage neighbor, and see how utterly terribly it was built in the first place. Markup filled with unconventional naming practices, little or no documentation, or even (*shuddering*) table-based layouts. So lets take a look at some things that we can do to break these habits so we can produce well written, clean, semantic, thoughtful, and efficient code. Now, where do we begin?</p>

  <h3>Better semantics in HTML5 </h3>
  <p>One of the main goals for the new HTML5 spec was to remove ambiguity by adding concise elements. Some of the bigger additions are: &lt;header&gt; &lt;nav&gt; &lt;footer&gt; &lt;article&gt; &lt;aside&gt; and &lt;section&gt;. I could easily fall down the rabbit hole explaining all these, but there are <a href="http://html5doctor.com/">plenty of other resources</a> explaining each one in detail. By using these tags as our base skeleton for a site we now have a solid foundation to build from:</p>
  <code>
    &lt;header&gt; <br />
    &emsp; &lt;nav&gt; <br />
    &emsp; &lt;section id="main_content"&gt; <br />
    &emsp; &emsp; &lt;article&gt; <br />
    &emsp; &emsp; &lt;article&gt; <br />
    &emsp; &emsp; &lt;article&gt; <br />
    &emsp; &lt;/section&gt; <br />
    &lt;footer&gt; <br />
  </code>

  <p>This structure makes our site much easier to build on, adjust, maintain, and understand - not only for us as developers but screen-readers and other accessibility tools, as well as search-engines. Now screen readers will now have a very easy time determining where the primary navigation, main content, or other sections of the page are. For example before, &lt;div id="menu"&gt; could either be the site's primary navigation or it could be an actual menu for a restaurant.  With semantic markup we now know that &lt;nav&gt; is meant for site navigation, avoiding any ambiguity between nav and menu.</p>
<p>We can also tell where the meat of the site now lies, finding it in the new &lt;article&gt; tag. The article tags primary purpose is to exist as a self-contained entity of the site - a blog or forum post, newspaper article, widget, or "<em>any other independent item of content</em>" - <a href="http://dev.w3.org/html5/spec/Overview.html#the-article-element">per the W3C spec</a>.  Articles can have their own &lt;header&gt; and  &lt;footer&gt; sections of their own, as long as they are all related to the article itself. Just remember the word <em>independent</em>.  Does the &lt;article&gt; make sense on it's own?  Using these new tags we get to trim some &lt;div&gt;'s from our site, getting us more separation from our CSS.</p>
  <p>You may be saying to yourself: &quot;Ah hah! What about our CSS?&quot;</p>

  <h3>SMACSS</h3>
  <p><a href="http://smacss.com/">Scalable and Modular Architecture for CSS</a> (SMACSS) is a new way to look at organizing your CSS code.  By categorizing your CSS rules you can start to tame the wild beast that some of your more complex projects may have become (or preventing new projects from getting out of hand). SMACSS doesn't come down off the mount declaring what you should or shouldn't do, but it does help you identify some areas where you can improve your organization. They recommend you break your rules into 5 categories: Base, Layout, Module, State, and Theme.  <span class="quote">&quot;By categorizing CSS rules, we begin to see patterns and can define better practices around each of these patterns.&quot; - Jonathan Snook</span> </p>
  <p>By identifying patterns we can make it more efficient by streamlining the code. SMACSS also allows us to <a href="http://smacss.com/book/applicability">reduce our depth of applicability</a>, thus reducing our dependency on the HTML structure. When we are less dependent on the actual HTML structure, the design is much more fluid and can be easily fit to various layouts and screen sizes with little extra effort.</p>

  <h3>Trimming the fat</h3>
  <p>Its easy to have CSS files get unruly and out of hand.  A lot of times there are some areas where we can trim some fat in our code, increasing efficiency while reducing load times.  In some instances multiple properties can be combined into one valid declaration.  Lets look at a very common declaration - 4 rules that apply to the &lt;p&gt; text for this blog: </p>
  <code>
    font-family: "prenton";<br />
    font-size: 17px; <br />
    font-weight: 300; <br />
    line-height: 1.4em;*/
  </code>
  <p>That can be re-written down to one property call - font: <i>weight size/line-height family</i></p>
  <section class="code_example">
  <code>font: 300 17px/1.4em "prenton";</code>
  </section>
  <p>The same practice can be applied to many different declarations that use multiple lines for the same element <em>(e.g. Margin &amp; Padding)</em>. Similarly I tend to use one line if there are only one or two properties in the same declaration:</p>
  <section class="code_example">
  <code>.left { float: left; padding-right: 10px; }</code>
  </section>
  <p>Much better, right? Formatting your CSS sheets does come down to personal preference, but SMACSS gives you a great framework to build on, or at least give you some ideas help develop your own system.</p>
  <h3>Getting in shape</h3>
  <p>What else can we do to whip our CSS into shape? I've seen some blogs and articles suggesting that you have all property declarations on the same line, removing extra white space &amp; line breaks, and even going so far as to removing comments from production files to save weight (*face palm*).  I understand the sentiment, but it seems to me like re-arranging the deck chairs on the Titanic - sure it gives you something to do but it doesn't achieve anything.</p>
<p>By tightening the belt that much you are actually making things worse - you are breaking down readability and maintainability of the site.  What happens in a year from now when the client changes developers and want something changed on the site? As a developer,  which would you rather see? A CSS file full of entries like this:</p>
  <code>hr { background:#CF7400;margin:25px0;text-align:left;padding:15px0;display:block;border:0 none;color:#CF7400;height:1px;clear:both;width:96%; }</code>
  <p>Or a well organized, indexed, and documented file like this:</p>

  <code>hr {<br />
  &emsp;background: #CF7400;<br />
  &emsp;border: 0 none;<br />
  &emsp;clear: both;<br />
  &emsp;color: #CF7400;<br />
  &emsp;display: block;<br />
  &emsp;height: 1px;<br />
  &emsp;margin: 25px;<br />
  &emsp;padding: 15px 0;<br />	
  &emsp;text-align: left;<br />
  &emsp;width: 96%;<br />
  }<br />
  </code>

<p>Keep in mind you are not the only one who is going to have your hands on the code. Above all else, removing comments to save space is just downright unprofessional.  Is it fair to leave the next developer working on the project an un-documented mess? Is it fair to your client?  I wouldn't want someone doing that to me, and I am surely not going to do it to someone else.</p>
<h3>Why all the trouble?</h3>
<p>We are in an interesting place in web-history right now.  Back in the 90's the web was a mess - sites were optimized for specific browsers, animated gif's were everywhere, and my god, the &lt;blink&gt; tags! During the 00's things were getting better, standards and practices started emerging but it took the better part of the decade get where we are now. As websites start blurring the line between pages and applications we have a responsibility to gather as a community and craft the best code we can. Semantics give meaning while removing ambiguity - cleaner and easier maintained code, better accessibility.</p>

<p>Above all else - using clear, concise markup shows professionalism.  Just like the furniture maker who actually takes time to finish the underside of the cabinet drawers, a craftsman takes pride in every aspect of his or her work.  Take pride in your HTML, take pride in your CSS, and take pride in your markup. If not for anything else just create something you can be proud of.</p> 


