# Tailwind CSS

# Why Tailwind

- Utility first - approach
- Speed and efficiency
- Consitent Design System

## Element Sizing

In tailwind we control the width and height of the elements using the following:

- For height we do using --> class = 'h - {value}'
- For width we do using --> class = 'w - {value}'

there are three types of units . they are fixed units, percentage units and viewport units

### fixed units

- the fixed units make use of the numbers

1unit = 0.25 rem = 4px

so

[w/h]-0 : [width/height] : 0rem;
[w/h]-1 : [width/height] : 0.25rem;
'
'
'
[w/h]-2: [width/height] : 0.5;
[w/h]-4 : [width/height] : 1.00rem;
'
'
'
[w/h]-96 : [width/height] : 24 rem;

### relative units

the relative units make use of fractions

[w/h] - 1/2 --> 50% of parent container
[w/h] - 1/4 ---> 25% of parent container
[w/h] - 3/5 ---> 60% of parent container
[w/h] - 5/6 ---> 83.3% of parent container

---

[w/h]-full ---> 100%

viewport units
w-screen --> width:100vw
h-screen --> height: 100hw

## Colors

intead of colors like red, blue and green the tailwind comes with the option of teal and other colors, so no need to remember the hex codes

- the shades range from 50 to 950.

### background color --> class = 'bg-{color}-{shade}'

### text color --> class = 'text-{color}-{shade}'

### class='[bg/text]-[black/white]'

- the tailwind colors are designed with accessibility guidlines and contrast guidelines

### padding and margin

- for padding we use class = 'p-{value}'
- for margin we use class = 'm-{value}'
- remember 1 unit = 0.25 rem = 4px
