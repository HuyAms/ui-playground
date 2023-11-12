# Animations 

We'll cover
- `transfom` functions
- `transition` property
- `@keyframes``

## Transform functions
- doesn't work with inline elements in Flow layout
- the transform functions are applied from right to left

### 👉Translation
- `translate`: shift item along axis: move side to side or moves up and down
- item's in-flow position doesn't change. Flow, Flexbox, Grid has no effect
- `percentage` value refers to the element's own size

### 👉 Scale
- `scale`: allows us to grow or shrink an element

### 👉 Rotate
- rotate our elements
- unit could be `deg` or `turn` (eg 1turn)

### 👉 Skew
- skew along either axis

### 👉 Transform origin
- the transform origin acts as a pivot point

## CSS Transitions
- allows us to smooth out the changes 
- linear: element moves at a constant pace
- easeout: comes charging in like a wild bull, but runs out of energy => used when something is entering off-screen
- easein: starts slow and speeds up => useful for animations that end with the element offfscreen
- ease-in-out: useful for anything that happens in a loop
- `transition-delay`: allows us to keep things status-quo for a brief interval

## Keyframe animatinos
- we can specific a transition from one set of CSS declarations to another

```css
<style>
  @keyframes slide-in {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0%);
    }
  }

  .box {
    animation: slide-in 1000ms;
  }
</style>
```

- multi-step animatins: we can also use percentages

```css
  @keyframes fancy-spin {
    0% {
      transform: rotate(0turn) scale(1);
    }
    25% {
      transform: rotate(1turn) scale(1);
    }
    50% {
      transform: rotate(1turn) scale(1.5);
    }
    75% {
      transform: rotate(0turn) scale(1.5);
    }
    100% {
      transform: rotate(0turn) scale(1);
    }
  }
```

- timing functinos: `animatin-timing-function`: linear, ease, etc
- looped animatinos: `animation-iteration-count`, `infinite`
- alternate animations: `animate-direction: alternate`
- fill modes: the animation works fine, but when it's over, the element pops back into existence.
    - `animation-fill-mode: forwards`: lets us persist the final value from the animation
    - `animation-fill-mode: backwards`: lets us persist the initial value from the animation
    - `animation-fill-mode: both`: apply both forwars and backwards
- `animation-play-state`: running | paused

## Animatinos vs transitions
There are some things that only `@keyfames` can do
- Looped animatinos
- Multi-step animations
- Pausable animations