---
layout: about
title: Home
permalink: /
nav: true
nav_order: 1
subtitle: Physics-Based Simulation, Computer Graphics, HCI, and Game Development

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false
  more_info: >
    <p>Hong Kong</p>
    <p><a href="mailto:yukunzhou450@gmail.com">yukunzhou450@gmail.com</a></p>

selected_papers: false
social: true

announcements:
  enabled: false
  scrollable: true
  limit: 5

latest_posts:
  enabled: false
  scrollable: true
  limit: 3
---

I am Yukun Zhou, a computer science researcher working on physics-based simulation, computer graphics, and interactive systems. My current work focuses on robust simulation algorithms for rod insertion, thickness-aware contact pressure and friction, Projective Dynamics, Cosserat rods, and optimization methods for simulation solvers.

I am on a Joint RA-PhD track in physics-based simulation with Dr Zhongkai Zhang, affiliated with the Chinese Academy of Sciences Hong Kong Institute of Science and Innovation and the Chinese University of Hong Kong. Before that, I completed my M.S. in Computer Science - Game Development at the University of Southern California and my B.S. in Computer Science with a minor in Creative Media at City University of Hong Kong.

My broader experience spans fluid simulation, differentiable cutting, FEM and soft-body contact, neural 3D reconstruction, HCI research on games and player well-being, AR glasses gesture recognition, Unity game development, and real-time graphics.

## Research

<div class="home-entry">
  <div class="home-entry-date">2025 - 2026</div>
  <div>
    <h3>Physics-Based Simulation, CAS HKISI / CUHK</h3>
    <p>
      Joint RA-PhD track with Dr Zhongkai Zhang. I work on accurate rod-insertion simulation based on Projective Dynamics, Cosserat rods, Lagrangian constraint-based methods, and thickness-aware contact pressure and rotational friction.
    </p>
    <ul>
      <li>Finished main experiments and a paper draft on rod-insertion simulation.</li>
      <li>Worked on optimization of Vertex Block Descent for simulation systems.</li>
      <li>Developed and reproduced SDF soft-body contact, DiSect differentiable cutting, FEM, Projective Dynamics cutting with low-rank updates, lung puncturing with Warp, and neural 3D reconstruction from MRI images.</li>
    </ul>
  </div>
</div>

<div class="home-entry">
  <div class="home-entry-date">2024</div>
  <div>
    <h3>Fluid Simulation, Georgia Institute of Technology</h3>
    <p>
      Summer research intern with Dr Bo Zhu. I replicated Neural Flow Map with Taichi, built real-time 3D stable fluid simulation with OpenGL Compute Shader, and accelerated Particle Flow Map using long-range mapping and short-range projection, reaching an 80% speed improvement.
    </p>
  </div>
</div>

<div class="home-entry">
  <div class="home-entry-date">2022 - 2023</div>
  <div>
    <h3>HCI, Games, and AR Interaction, City University of Hong Kong</h3>
    <p>
      I studied games, ICT4D, and player well-being with Dr Zhicong Lu, producing a manuscript submitted to a top-tier conference as the only first author. I also worked with Dr Kening Zhu on a real-time Android application for recognizing hand-scratching gestures on AR glasses legs using CNN models.
    </p>
  </div>
</div>

## Publications

{% include selected_papers.liquid %}

## Education

<div class="home-entry compact">
  <div class="home-entry-date">2023 - 2025</div>
  <div>
    <h3>University of Southern California</h3>
    <p>M.S. in Computer Science - Game Development. CGPA: 3.87/4.0.</p>
  </div>
</div>

<div class="home-entry compact">
  <div class="home-entry-date">2019 - 2023</div>
  <div>
    <h3>City University of Hong Kong</h3>
    <p>B.S. in Computer Science, minor in Creative Media. First Class Honors, CGPA: 3.8/4.30, ranked top 14 out of 144 Computer Science students.</p>
  </div>
</div>

## Selected Projects

<div class="project-list">
  <article class="project-entry">
    <div class="project-thumb">Simulation</div>
    <div class="project-copy">
      <h3>Physics-Based Simulations</h3>
      <p>
        Implemented mass-spring systems, keyframe interpolation with quaternion and Euler approaches, inverse kinematics with pseudo-inverse and Tikhonov regularization methods, and related simulation components in C++.
      </p>
      <p class="project-tags">C++ / physics-based animation / inverse kinematics</p>
    </div>
  </article>

  <article class="project-entry">
    <div class="project-thumb">Graphics</div>
    <div class="project-copy">
      <h3>3D Human Rendering</h3>
      <p>
        Built a 3D graphics course project with Unity URP, hair anisotropy, and skin separable subsurface scattering, including GLSL deployment of skin separable subsurface scattering.
      </p>
      <p class="project-tags">Unity URP / GLSL / skin shading / hair anisotropy</p>
    </div>
  </article>

  <article class="project-entry">
    <div class="project-thumb">ML</div>
    <div class="project-copy">
      <h3>NLP for Finance</h3>
      <p>
        Advised by Dr Linqi Song at City University of Hong Kong. Developed a BERT model in PyTorch to analyze sentiment across large-scale financial comments.
      </p>
      <p class="project-tags">PyTorch / BERT / sentiment analysis / finance</p>
    </div>
  </article>
</div>

## Skills

<div class="skill-cloud">
  <span>Projective Dynamics</span>
  <span>FEM</span>
  <span>Cosserat rods</span>
  <span>SDF contact</span>
  <span>Differentiable cutting</span>
  <span>OpenGL Compute Shader</span>
  <span>Taichi</span>
  <span>Unity</span>
  <span>GLSL</span>
  <span>PyTorch</span>
  <span>BERT</span>
  <span>CNN</span>
  <span>Python</span>
  <span>C++</span>
</div>
