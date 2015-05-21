```
npm install
```

### run unit tests (karma)

```
npm install -g karma-cli

karma start
```

### run e2e tests (protractor)

```
npm install -g protractor

webdriver-manager update

npm install -g browser-sync

browser-sync start --server

webdriver-manager start

change protractor tests (important!)

protractor protractor.conf.js
```

### run app

```
npm install -g browser-sync

browser-sync start --server --files "**/*.js, **/*.html"
```

go to: http://localhost:3000/src/index.html