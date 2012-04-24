---
layout: page
title: Thoughts on ...
tagline: An 8th Light Residency
---

{% for post in site.posts limit:3 %}
<div class="m_post_date"><a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a> &raquo; <span>{{ post.date | date_to_string }}</span></div>
<div class="post">
    {% include JB/post_content %}
    <div class="m_post_break"> </div>
</div>
  {% endfor %}
<div class="post">
  <p><a href="/archive.html">Older Posts &raquo;</a></p>
</div>
