import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

/* =================== locale: zh-CN ======================= */

const notes = defineNoteConfig({
  dir: 'notes',
  link: '/notes/',
  
  sidebar: [
    {
      text:"基础知识",link:"/notes/"
    },
    { text: '星耀知识', 
      // link: '/notes/core-model',
      prefix: "/notes/star-knowledge",
      collapsed:true,
      items:[
        {text:"十四主星",link:"major-stars"},
        {text:"十四辅星",link:"minor-stars"},
        {text:"三十七杂耀",link:"misc-stars"},
        {text:"四十八神煞",link:"deity-entities"},
      ]
     },
    { text: '命理结构', 
      // link: '/notes/core-model',
      prefix: "/notes/core-model",
      collapsed:true,
      items:[
        {text:"宫位",link:"palace-positions"},
        {text:"四化",link:"four-transformations"},
        {text:"格局",link:"configuration-patterns"},
        {text:"运限",link:"fortune-periods-system"},
      ]
     },
    // { text: 'two item', link: 'two' },
  ]
})

const zhDemoNote = defineNoteConfig({
  dir: 'demo',
  link: '/demo',
  sidebar: ['', 'foo', 'bar'],
})

export const zhNotes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [notes],
})

/* =================== locale: en-US ======================= */

const enDemoNote = defineNoteConfig({
  dir: 'demo',
  link: '/demo',
  sidebar: ['', 'foo', 'bar'],
})

export const enNotes = defineNotesConfig({
  dir: 'en/notes',
  link: '/en/',
  notes: [enDemoNote],
})

