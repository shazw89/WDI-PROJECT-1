# Memori-gemu

## Overview

With our first project at GA, we were supposed to demonstrate what we'd learnt of JavaScript and jQuery over the past few weeks. I opted for a simple memory game, as I'd wanted to ensure that I understood the fundamentals of the language and didn't want to complicate things for myself. I decided instead to make the styling the standout point of the project and settled on a Japanese horror/Ukiyo-e print theme.

## The Build

I used: jQuery, HTML, CSS, Heroku, Github

I decided that I would append the cards (whose images I seeded in a folder) in a ul li grid structure, as we learnt how to do when constructing a tictactoe game for homework. Then, I added event listeners to each card that triggered a chooseCard function. When this was elicited, a card image was pushed into an empty array. If a second card was selected, this triggered the checkForMatch function, which checked to see if the images were the same. If they weren't, the user got a message to try again. If they were, the cards were pushed into an empty array representing the user's choices and a random congratulatory audio clip from an array of sound wavs would play. 

## Pluses

Being able to build an app from scratch for the first time was a great experience for me. Even better was being able to make it adhere to my vision with CSS.

## Challenges

As a writer who has spent most of her career looking for shades of meaning in everything, I find the hard logic of JavaScript very difficult to fathom at first. 

## Potential developments

I hope one day to be able to at a scoring functionality to the app, where the user can be penalised or rewarded depending on how many turns he or she takes to match all the cards. A timer could also be in the works.

## Overall

This first project showed me how it was possible to add your own personal spin even to the humble memory game. I felt ready to take on my next project and add even more of myself into it.  
