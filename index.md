---
layout: page
title: cpeak 
---

{% for post in site.posts limit:5 %}
  <article class='index-post'>
    <p class='post-ribbon'><a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a> &raquo; <span>{{ post.date | date_to_string }}</span></p>
    <br />
    {% include JB/post_content %}
  </article>
{% endfor %}

<!-- <p><a href="/archive.html">Older Posts &raquo;</a></p> -->
