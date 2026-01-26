---
layout: two-cols
class: items-center
---

<div class="text-center opacity-50">

## Bad

```
Why is the earth round?
```

</div>

::right::

<div class="text-center pl-4">

## Good

<div class="text-left inline-block">
  <div><span class="bg-anthropic-blue/30 px-1 rounded">You are an astronomy expert.</span> <span class="text-xs opacity-60">← P</span></div>
  <div><span class="bg-anthropic-green/30 px-1 rounded">Answer "Why is the earth round?"</span> <span class="text-xs opacity-60">← T</span></div>
  <div><span class="bg-anthropic-orange/30 px-1 rounded">for artists at a peer sharing.</span> <span class="text-xs opacity-60">← C</span></div>
  <div><span class="bg-anthropic-mid-gray/40 px-1 rounded">Return in concise format.</span> <span class="text-xs opacity-60">← F</span></div>
</div>

</div>

<!--
TALK ABOUT:
- Bad: "Why is the earth round?" → Wikipedia dump
- Good: Same question + PTCF applied
- Persona: astronomy expert
- Task: answer this
- Context: for artists at peer sharing
- Format: concise format

SAY:
→ "Same question. Completely different answer."

DO:
👆 Point LEFT → bad prompt
👆 Point RIGHT → good prompt
👏 Snap on reveal

NEXT: → Context Engineering
-->
