---
title:  "Final Project for ICS3U"
date:   2019-04-17 00:00:01
categories:
- School Class
- School_Grade11
- Project
tags:
- School
- Course
- Computer Science
- Project
---

## Shooting Game<br>
<hr>
  <h3> User Part</h3>
  <pre>
  1. Start Program
  2. Display Controls (`w`, `a`, `s`, `d`, `l`, `esc`,etc)
  3. Move `player unit` around the board and destroy your enemies and try not to get hit
  4. When you loose all the health gauge display your `final score` and `rank`
  5. Display the Greeting Screen and goto 1.
  </pre>
  
  <h3> Programmer Part</h3>
  <pre>
   1. Start Program
   2. Use `w`,`a`,`s`,`d` to move the `player unit`
   3. Press `l` to shoot the bullit
   4. Use 'esc' to open the option menu
   5. If the `player unit` is hit by enemy's attack
     * Decrase the health gauge
     * If there is no health left
       - End the game
       - Record the score to offline DB
     * Reset the location and status of `player unit`
     * Apply panelty in score
   6. If the enemy is hit by `player unit's` Bullit
     * Illuminate the <i>hit enemy</i>
     * Make Bullit disappear
     * Increase the score
   7. If there are no enemys left
     * Increase the Level
     * Locate new enemys
   8. Display the `Real-time` Ranking
     * Update the ranking when every hit occured
     </pre>