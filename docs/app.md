# 🎙️ **PodCast Manager**

## 📱 **App Name**  
**PodCast Manager**

## 📝 **Description**  
A Netflix-style app designed to centralize various podcast episodes, organized by categories.

## 🌐 **Domain**  
Podcasts available in video format.

## 🚀 **Features**  
- 📋 List podcast episodes in sessions and categories.  
  - Categories: 🏥 Health, 🏋️ Fitness, 🧠 Mindset, 🎭 Humor.  
- 🔍 Filter episodes by podcast name.


## How
#### Feature:
- 📋 List podcast episodes in sessions and categories.

### How I will implement it:
I will return a rest API (JSON) with the podcast name, episode name, caption image, link, category

```js
{
  podCastName: "flow"
  episode: "BEN MENDES [RONDA DO CONSUMIDOR] - Flow #414"
  videoId: "lUkyHE2DAg8"
  cover: "https://i.ytimg.com/vi/lUkyHE2DAg8/hq720.jpg"
  link:"https://www.youtube.com/watch?v=lUkyHE2DAg8&t=734s"
  category:["news", "business"]

},{
  podCastName: "flow"
  episode: "GALVÃO BUENO DESABAFA E REVELA DETALHES SOBRE O DIA DO ACIDENTE DE AYRTON SENNA!"
  videoId: "ZR8D7cWvGDQ"
  cover: "https://i.ytimg.com/vi/ZR8D7cWvGDQ/hq720.jpg"
  link:"https://www.youtube.com/watch?v=ZR8D7cWvGDQ&t=734s"
  category:["news", "sport"]  
}
```