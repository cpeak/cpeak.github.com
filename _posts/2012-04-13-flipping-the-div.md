---
layout: post
category : blog
tags : [CSS3, cssanimations]
---
<h2>Flipping The Div</h2>
<p>I just wrapped up reading <a href="http://hardboiledwebdesign.com/"><em>Hardboiled Web Design</em></a> by Andy Clarke, which is a fantastic read and I highly recommend it. I really enjoyed one specific example he used in the book and I wanted to really go over each line of code to get a solid understanding of how it worked.  In the book he goes through and creates a mock online book store, and one feature was clicking on the book cover and it flips around to reveal the information on the backside. Here is what it looks like:</p>



<div id="m_flip_container">

<div id="s01" class="item">
<div class="inner">
<a href="#s01"><img src="/images/seaport.png" alt=""></a>

  <div class="description">
  <p><strong>Mystic Seaport</strong><br />
  <strong>Camera:</strong> EOS 10D<br />
  <strong>Exposure:</strong> 1/500 at 28mm<br />
  <strong>Aperture:</strong> f8</p>
  <p>The <em>Emma Berry</em> id docked along the river at the Mystic Seaport.</p>
  </div> 
</div>
</div>

<div id="s02" class="item">
<div class="inner">
<a href="#s02"><img src="/images/heron.png" alt=""></a>

<div class="description">
<p><strong>Blue Heron</strong><br />
<strong>Camera:</strong> EOS 10D<br />
<strong>Exposure:</strong> 1/250 at 200mm<br />
<strong>Aperture:</strong> f4</p>
<p>A Great Blue Heron stands in the morning sun along the reeds on the Fox River in Batavia, IL</p>

</div>
</div>


<script>
var $panels = $('div.item');

$('div.item a[hash^=#]').click(function (event) {
  event.preventDefault();
  $panels.removeClass('flip');
  $(this.hash).addClass('flip');
});
</script>
</div>
</div>



  



<p>In the example the author used books in a bookstore, however since I am a photographer I thought it would be a interesting way to present information about a particular photograph. First I setup the two 'front' div's with unique ID's so we can target them individually.  The entire front div is a link which targets itself led by a hash - this allows the script to listen for specific links so it can apply the flip class using JQuery. Once the script on the page triggers the flip class, CSS3 Animations can do the heavy work.</p>
<p>Using <code>.cssanimations</code>, we can achieve our flip effect using just a few attributes. First and foremost is the <code>transform: rotateY(180deg);</code>, which flips our div 180&deg; on the Y axis. This achieves the basic functionality of flipping the photograph, but we want to really make it pop. We can add two more attributes to make the design really jump: <code>perspective</code> which keeps the div centered during the animation &amp; <code>transform-style: preserve-3d</code>, which obviously preserves the three-dimensional effect. Once the transform has been triggered the script also toggles visibility of the 'back' of the photo so it swings around and appears to be attached to the back. Another good idea is to have the script toggle the flip class so that only one div can be flipped at once, so when the user clicks another book, or photo in our case, it flips the last one back into place.</p>
<p>Now one big hurdle is how do we clue the user into the fact that there is additional information on the back of these photos? We could add some sort of icon on each, but that is clunky and not very straightforward. Instead lets have the script fire on page load to give a quick peek at the back then flip over again to its original position. This lets the visitor know that there is additional content on the back of each item and encourages them to click on them to find it.</p>
<p>This is a very brief description of the entire process, so in future posts I will break down each individual attribute so we can get a solid working understanding of how <code>.cssanimations</code> can add an extra flourish to our designs.</p>
