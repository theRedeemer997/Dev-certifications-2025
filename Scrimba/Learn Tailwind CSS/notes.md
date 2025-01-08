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
- syntax for side specific

  - t --> top - x left and right
  - b --> bottom - y top and bottom
  - l --> left
  - r --> right

  class='[p/m]{side}-{value}
  where p is padding and m is margin

### typography classes

#### font-family

    - font family which is class='font-{family}'
    - family is sans, serif monmo etc . refer to the documentation for more and the mono, serif and sans refers to the complete font stack here.

#### font-style

    - font-style is the class which italic or non-italic
    - class = 'italic' or class= 'non-italic'

### font-weight

    - weight: thin --> font-weight:100 ....... check the other font-weight in the documentation...... weight:black --> font-weight:900
    - class="font-{weight}"

### text classes

#### text alignment

    - value - left --> text-align:left which aligns the text toward the left

    - value - center --> text-align:center aligns the text center and the other classes are right, justify, start and end. - syntax : class="text-{value}"

#### font-size

    - class = 'text-{value}'
    where value can be 's' where the font-size is 0.75rem and line-height is 1 rem, 'sm' where the font-size is 0.875 rem and line-height is 1.25 rem  --check for other classes in the doc and -- '9xl' where the font size is 8rem and line-height is 1

#### text-decoration

    class="underline", class="overline" , class="line-through" and class = "no-underline"

#### text transform

    - class='uppercase', class='lowercase', class='capitalize'
    and class='normal-size'

### letter-spacing

