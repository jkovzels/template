# Getting started ... again

You probably was very busy last few monthes and forgot everything. Here are soe tips to get you started.

I hope you commited everithing the last time you toched things.

## Updating packaged

run `npm outdated` to see that is outdated.

or run `ncu`. The command you can use after `npm install -g npm-check-updates`. It checks for last versions of depending packages and compares with version listed in `package.json`. Then run 'ncu -u' or `ncu --updateAll` to *really* update the files.

## Run stuff

Go ahead and run 'npm run build' from terminal (use ``CTRL + ` `` to open terminal).

If everhing works try `npm run server`. It will open browser at `http://localhost:8080/`.

Those commands are defines `package.json`'s `scripts` section.

Also `npm install http-server -g` and run `http-server`





