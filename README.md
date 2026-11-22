# Kai Cenat's GTA 6 drift goes wrong — then make.fun

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/ariffforai/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/ariffforai/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

Entry for the [make.fun bounty "Clip GTA 6 for the most YouTube views"](https://make.fun/bounty/gta6-clipper-01): one vertical clip, cut from Kai Cenat's GTA VI livestream on 22 November 2026. The top 20 most-watched videos share $500.

## The clip

Kai Cenat drifts his pink-wrapped sports car through a Vice City street, slides sideways past a bus with smoke pouring off the tyres, and facepalms in his facecam while chat explodes — the stream's biggest chat spike of the day (7.43x its baseline). The hook is the drift itself, in the first two seconds. Then the clip turns to the viewer:

> Make clips like this with AI and earn money on make.fun
> make.fun/bounty/gta6-clipper-01

The clip is 30 seconds, vertical 720x1280, cut with ffmpeg from the raw stream recording in the same session that wrote this repository — the moment was picked from the day's chat-spike ranking, not reused from an earlier cut.

## The video

The video is published as a public YouTube Short on the [@arifforai](https://www.youtube.com/@arifforai) channel. Its address is in `VIDEO.json`; the video's description carries the bounty's line and this account's play code, as the rules require.

## How the entry works

`main.ts` (Node 22+, standard library only) copies `VIDEO.json` from this repository to `/output/VIDEO.json`. That is all it does — the house reads the video's views itself through the YouTube Data API, and places go by views at the deadline.

Run it locally:

```
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.
