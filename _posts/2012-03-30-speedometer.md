---
layout: post
category : blog
tags : [ residency, javascript, jquery, CSS3]
---
<h3>The JQuery and Javascript speedometer project</h3>
<img class="m_post_image" src="/images/speedo.png" alt="Javascript speedometer project" />

<h3>The Assignment</h3>
<p>This past week my assignment was to create a digital speedometer using CSS3, JQuery and Javascript, using <a href="http://stephaniebriones.com/speedometer/">Stephanie's project</a> as inspiration. The original task came about because Billy and Stephanie had found <a href="http://annyas.com/chevrolet-speedometer-design/">a set of old dashboard typography</a>, so the challenge was created as a fun way to hone our skills.</p>

<h3>The Challenges</h3>
<p>The first hurdle was going to be figuring out CSS3's rotate property. Once that was taken care of I would have to get the <code>&lt;needle&gt;</code> div to rotate on key press for acceleration and deceleration, limiting rotation from zero to top speed.  I wanted to take it a step further and add an odometer that displayed distance travelled as well, so a bit of math was going to be involved. On top of everything I also wanted to do something different. I wondered if there were any famous cars or dashboards in geek culture - it hit me like a bolt of lightning on November 12th, 1955!</p>

<p>Once I got a few source images of an original Delorean dashboard and watched all three movies (research is important) I had a better scope of how I wanted to design my Time Machine. I would have to create the analog speedometer, a digital speedometer, and a flux capacitor. Great Scott! Lots to do!</p>

<h3>The Speedometer itself</h3>
<p>The whole assignment hinged on the actual speedometer needle itself. I created a thin div 200px high by 6px wide. By default I needed the needle to rest at 0mph, so I set the default rotation value to <code>-webkit-transform: rotate(-140deg);</code>. -140&deg; being the zero position on an original Delorean.</p>

<p>Stephanies design hinged the needle right from one end but since I am a car geek as well I know that a lot of speedometers actually hinge slightly above the base leaving a small tail. After some interesting errors I found I could create the effect by calling <code>-webkit-transform-origin: 50% 90%;</code>. This grabs the <code>&lt;needle&gt;</code> div in the middle very close to the bottom. I added a small div underneath to recreate the base.</p>

<p>Now I had to use Javascript and JQuery to listen for a key press. When the space bar is pressed it targets the <code>&lt;needle&gt;</code> div and adjusts the rotation. I added a <code>-webkit-transition: -webkit-transform: .35s -ease out;</code> definition to give it a small delay to mimic the lurch between when you hit the gas and when you start accelerating. Now we have a functioning speedometer that rotates the needle as you press the gas but sticks after you let go. Hrm, cruise control must be stuck.  I struggled with this one, but eventually came to the same conclusion that Stephanie and Miles did - by default the vehicle would be decelerating.  I hacked together some ugly Javascript but eventually had to peek at their code and get some inspiration. Finally we had a working speedometer That eases forward when you apply gas, and eases back to 0 as you slow down.</p>

<h3>Going the extra mile</h3>
<p>I also wanted to add a digital speedometer like the one Doc Brown had installed above the time panel and flux capacitor. The data was already in the code I just had to extract and display it correctly. My main issue was with the script being too precise - as it calculates the speed it dumps out a number with around 5-10 trailing decimal places. I did some research and most people recommended a backwards approach of applying math tricks and hacks to round it off but I knew these were inelegant. I knew there had to be a Javascript call to limit the output of a variable to a set number of places, there are plenty of calls to format output like date and time, why not one for decimal points? <code>parseInt()</code> takes care of that problem, it parses a given string and returns an integer.  Another extra touch was to make sure the digital speedometer always displayed two digits so during our loop the script checks to see if it is less than 10 mph and if it is, it prepends it with a zero. I also wanted to add some functionality to the Flux Capacitor. During the <code>setSpeedometer</code> loop the script checks to see if the speed is at or above 88mph and if it is, Javascript changes the Capacitor to on.</p>

<p>The more irritating problem was getting the odometer working. Putting on my 8th grade Algebra 1 hat I postulated that since our script cycles at 10 loops/second we had our rate and then could calculate distance. By that logic the loop can figure out how far its travelled in 1/10th of a second at X speed. I had to write some conversion equations in order to change it to MPH for the dial. The odometer even goes up when you are decelerating as well since you are still travelling forward.</p>




















