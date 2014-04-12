---
layout: post
category : blog
title: Upgrading To Mountain Lion
tags : [ Development, OSX, "Mountain Lion" ]
---

<p>Today I dove right in and upgraded to OS X 10.8 Mountain Lion, and overall the upgrade went very well.  Just a few snags with my development environment.  My Pow configuration came through just fine, but PHP was disabled and it reset my default Document Root.  Lets take a look at how I restored my settings, and how I have my local development environment setup.</p>
<p>Under 10.7 and below there was a 'Web Sharing' checkbox under the Sharing preference pane. This allowed you to host development sites right in your <code>user/Sites</code> directory.  Upgrading to 10.8 seems to have removed that checkbox and defaulted back to <code>/Library/WebServer/Documents/</code> for hosting development sites. PHP also seems to be disabled as well.  No problem, lets just take care of those:</p>
<p>To enable PHP, open <code>/etc/apache2/httpd.conf</code> with your editor of choice and un-comment locate this line:</p>
<p><code>LoadModule php5_module libexec/apache2/libphp5.so</code></p>
<p>A bit down youll find the section for DocumentRoot. This tells Apache where you store your development sites.  Like I mentioned before, 10.8 sets this back to the root Library directory, and I prefer my <code>~/Sites</code>
folder. Comment out the Document Root line, and enter <code>DocumentRoot "/Users/username/Sites"</code></p>
<p>Restart Apache using <code>sudo apachectl restart</code> and check everything out.</p>
<h4>A Gotcha</h4>
<p>When I enabled PHP and setup my document root I found that I didn not have permission to access my local sites.  I checked permissions and everything was okay there.  A little investigation turned up that I did not have a username.conf file in <code>/etc/apache2/users</code>.  I created my user conf and added:<br /><code>
&lt;Directory "/Users/username/Sites/"&gt;<br />
&emsp;&emsp;Options Indexes MultiViews<br />
&emsp;&emsp;AllowOverride All<br />
&emsp;&emsp;Order allow,deny<br />
&emsp;&emsp;Allow from all<br />
&lt;/Directory&gt;<br /></code></p>
<p>Another <code>apachectl restart</code> and everything was setup perfectly.</p>
<p>So far Mountain Lion has been great, Safari seems much faster and notification center is a nice addition. I would love if BusyCal hooked into Notification Center, hopefully they will add that feature soon. I'll post more thoughts once I use 10.8 for a few days.</p>
