# Webee Ex 1 - Loopback Backend
(NOTE: Developed and Tested in Google Chrome)

### Quick start
**Make sure you have Node version >= 8.0 and (NPM >= 5 or [Yarn](https://yarnpkg.com) )**
> Clone/Download the repo then edit `app.component.ts` inside [`/src/app/app.component.ts`](/src/app/app.component.ts)

## For Backend Deploy

```bash
# clone our repo
# --depth 1 removes all but one .git commit history
git clone git@github.com:cristian87dev/webee-ex-1.git

# install the repo with npm
npm install

# start the server
node .
```
### To access FrontEnd:
go to [http://0.0.0.0:3000](http://0.0.0.0:3000) or [http://localhost:3000](http://localhost:3000) in your browser

### To access Loopback API:
To access Loopback API: go to [http://0.0.0.0:3000/explorer](http://0.0.0.0:3000/explorer) or [http://localhost:3000/explorer](http://localhost:3000/explorer) in your browser

## For Frontend Deploy (to 'client' folder of loopback)

```bash
# change directory to our repo
cd client-src

# install the repo with npm
npm install

# start the server
npm run build
```
go to [http://0.0.0.0:3000](http://0.0.0.0:3000) or [http://localhost:3000](http://localhost:3000) in your

## For Frontend Dev Mode

```bash
# change directory to our repo
cd client-src

# install the repo with npm
npm install

# start the server
npm run start:hmr
```
go to [http://0.0.0.0:3000](http://0.0.0.0:3000) or [http://localhost:3000](http://localhost:3000) in your

The project is generated by [LoopBack](http://loopback.io).

## To add user in Loopback
```bash
# With Loopback backend running
node .

# Go to http://localhost:3000 in your browser (Prefered Google Chrome)

# install the repo with npm
npm install

# start the server
npm run start:hmr
```

## Countries JSON
```bash
{
  "countries": [
    {
      "name": "Argentina",
      "isoCode": "ARG"
    },
    {
      "name": "United States of America",
      "isoCode": "USA"
    },
    {
      "name": "France",
      "isoCode": "FRA"
    },
    {
      "name": "Mexico",
      "isoCode": "MEX"
    },
    {
      "name": "Germany",
      "isoCode": "DEU"
    },
    {
      "name": "Brasil",
      "isoCode": "BRA"
    },
    {
      "name": "China",
      "isoCode": "CHN"
    },
    {
      "name": "Japan",
      "isoCode": "JPN"
    },
    {
      "name": "England",
      "isoCode": "ENG"
    }
  ]
}

```
