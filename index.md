---
layout: page
title: Thoughts on Design
tagline: An 8th Light Residency
---


{% for post in site.posts limit:3 %}
<div class="post">
  <p><a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a> &raquo; <span class="post_date">{{ post.date | date_to_string }}</span></p> 
    {% include JB/post_content %}
  <img src="/images/horiz_divider.png" alt="horizontal divider" />
</div>
  {% endfor %}

<p><a href="/archive.html">Older Posts &raquo;</a></p>
