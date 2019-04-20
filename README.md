# LOL

I stumbled upon [this github repo](https://github.com/gmaxwell/lol) that contains 1 file called `lol` with a single 40 character string value:

```533e18798321e926ba305818c1f956d237060c48```

This could be:
- a sha1 hash (but it's not, at least not unsalted)
- a hex number (`475231012224021280939485865766507316920487119944` in decimal)
- a base64 encoded value (not likely as the utf-8 decode is this: `}}{ݺm|sWv߽:<`)
- a Ripemd160 hash, it's not unsalted
- Tiger160...
- Haval160...
- ...

None of these find a match or a pattern. There may be a salt, and I found `134dV6U7gQ6wCFbfHUz2CMh6Dth72oGpgH` [in a fork](https://github.com/ymmah/lol/blob/master/134dV6U7gQ6wCFbfHUz2CMh6Dth72oGpgH) -- salt, perhaps?

The repository has `6,666` commits, all on the same day (not trying to hack the green square marquee).
Each commit changes the value of the string in `lol`

The repo was created by a well known cryptographer, so this could be a joke, or it could be a puzzle, or it could be both. Either way, it's a mystery!

So... of course, I cloned the repo and made `chain.sh` to dump the value of the file at every previous git commit in history, to create a single file will all the values.
I also reversed the list with `tac chain.txt > chain.chronological.txt` to dump a chronological ordered list.

Then, I made `index.js` to convert the values from hex into decimal and output `base.10.txt`. More arbitrary base number conversions can be created like so:

- setup `npm i`
- `node . $BASE` (e.g. `node . 6`)

So what's next to explore? I can convert the hex value into many other base number systems, group or split the values to see if there's a message or a pattern...

Any other ideas, I welcome PRs :)

NOTE: it's possible that `lol` references `League of Legends` as related `lol` repositories in a forker's arsenal show: https://github.com/digideskio?utf8=%E2%9C%93&tab=repositories&q=lol&type=&language=

`¯\_(ツ)_/¯`


