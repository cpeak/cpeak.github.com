---
layout: post
category : blog
title: Gettin SASSy
tags : [residency, CSS]
---
<p>This past week I finally took the plunge into CSS pre-processing and started playing around with <a href="http://sass-lang.com/">SASS</a>.  I've never been a huge fan of pre-processing - I like to be in complete control of what goes into my production level CSS files, but the whole point of my residency is to become a much more well-rounded developer and I want to have as many tools in my bag as I can. I have learned over the years that using the right tool for the job makes life a <em>lot</em> easier.</p>

<h3>What does it do?</h3>
<p>SASS allows you to use variables and nesting (among other things) in your CSS. Install the gem - <code>gem install sass</code>, create a new file called <strong>style.scss</strong>, and run: <code>sass --watch style.scss:style.css</code>. This translates <strong>style.scss</strong> file into a normal .css file, automatically updating whenever you edit the original. Now lets take a look at what we can do.</p>
<h4>Variables</h4>
<p>The .scss file is like a normal cascading style sheet, but much more flexible. Using the <a href="http://www.smacss.com">SMACSS</a> approach we try to modularize our code the best we can, but there are times where we need to duplicate style calls. With SASS we can set variables which allows us to set global styles from <em>one</em> location. Setting <code>$var: #3366cc;</code> &amp; <code> $main_border: 1px solid #ccc;</code> allows us to use these styles anywhere in our stylesheet. In our style declaration,  set <code>$var</code> or <code>$main_border</code> and SASS will automatically translate it when it processes the .scss to .css</p>
<div class="l_overflow">
<div class="m_code_block"><code> .foo { <br /> &emsp; border: $main_border; <br /> &emsp; color: $var; <br /> &emsp; ... <br />  }</code>
</div>
<div class="m_code_block"><code> .foo { <br /> &emsp; border: 1px solid #ccc; <br />  &emsp; color: #3366cc; <br /> &emsp; ... <br />}</code>
</div>
</div>

<h4>Nesting</h4>
<p>This also works for style nesting as well, which is a huge time-saver.  Lets see this in action:</p>
<div class="l_overflow">
<div class="m_code_block"><code>
.foo {<br />
&emsp; border: $main_border; <br />
&emsp; li { <br />
&emsp; &emsp; color: $var;<br />
&emsp; &emsp; width: 100px;<br />
&emsp; &emsp; &amp;:hover { <br />
&emsp; &emsp; &emsp; background-color: #f2f2f2;<br />
&emsp; &emsp; } <br />
&emsp; }
</code>
</div>

<div class="m_code_block"><code>
.foo {<br />
&emsp; border: #3366cc; <br />
}  <br />
.foo li { <br />
&emsp; color: #3366cc;<br />
&emsp; width: 100px;<br />
} <br />
.foo li:hover { <br />
 &emsp; background-color: #f2f2f2;<br />
}
</code>
</div>

</div>

<p>That's three separate style declarations bundled into one call in my .scss file.  This smooths out the workflow so I don't have to worry about breaking out each individual declaration, I can just define <code>.foo</code> and let the SASS handle the nitty gritty details.</p>

<h3>The Good, The Bad, and The Ugly</h3>
<p><strong>The Good:</strong> I like the fact that I can style an entire class in one fell swoop, I don't have to change mental gears and think of all the various declarations I need to cover. I can just go <code>.foo > styles > child > styles > states</code>. This is a great option for veteran developers who understand the fundementals of it and want to fast-track some of the more monotonous coding.</p>

<p><strong>The Bad:</strong> While I haven't developed a full project with it yet, I can see SASS hurting the practice of modularizing your CSS, and limiting semantic friendly markup.  A class chain might look like <code>&lt;div class="l_left m_foo m_bar"&gt;...&lt;div&gt;</code> (the div is has a layout class of left, is a  foo module as well as a bar module). Using the class chain method I can take a look at <code>.foo</code> and see &amp; change it's properties right from the html file itself. Heavily relying on SASS variables removes a level of semantics. <code>&lt;div class="foo"&gt;</code> doesn't tell me nearly as much as the previously mentioned class chain.</p>

<p><strong>The Ugly:</strong> What I like the least is the output of the SASS processing. The production .css file can sometimes be harder to read by humans. As a craftsman I want my production files to be easy to navigate - that way when either I, or another developer goes back into the code six months or a year later it's easy to understand.</p>

<h3>Overall</h3>
<p>I haven't actually used it in a production environment yet, and when I do I will share my experiences in another post. So far I have mixed feelings on it - I like the premise, but I have a control issue (ok, that ones on me) - that's why I still drive a Jeep with a manual transmission and no ABS, I like to be in total control. Variables, nesting, interpolation, operations - these are all things I want to get excited about and want to see in the official CSS spec, but right now they aren't. I will continue experimenting and sharing my thoughts -  To be continued...</p>

