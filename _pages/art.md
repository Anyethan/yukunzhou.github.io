---
layout: archive
title: "Art"
permalink: /art/
author_profile: true
---

This page collects selected creative work in one place.

Add drawings, visual experiments, design studies, images, or links here. Keep each entry compact: title, year, medium, and one short note are usually enough.

{% include base_path %}

{% for post in site.art %}
  {% include archive-single.html %}
{% endfor %}
