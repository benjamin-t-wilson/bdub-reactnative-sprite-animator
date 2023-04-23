# @bdub/reactnative-sprite-animator

This library includes a single, simple component to use for spritesheet animations in React Native. It's important to note:

- it currently only supports single row spritesheets
- it currently only supports moving left-to-right in that sheet

---

### How to use

There is an example in App.jsx in this repo, but the code is simple to implement. First, import the component

`import SpriteAnimator from "@bdub/reactnative-sprite-animator";`

Then, import your sprite sheet

`import  IdleSheet  from  "./src/assets/idle_sheet.png";`

Lastly, use the component

`<SpriteAnimator sheet={IdleSheet} columns={16} size{32} />`

---

**SpriteAnimator** uses props:

- sheet: the spritesheet image (should be an image import)
- columns: number of columns in the image (int)
- size: pixel size to show (int)
- fps (optional, default 16): number of frames to show per second (int)
- play (optional, default true): the play state of the animation. If play is false, it will remain on index 0 (bool)
