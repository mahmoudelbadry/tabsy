#Tabsy

`tabsy` is command line application that gets firefox open tabs and store them in a text file
`tabsy` uses [node](nodejs.org) and it is based on the listing tabs functionality in the [firefox-client](https://github.com/harthur/firefox-client) library


##install
you can install `tabsy`  via npm
```bash
npm install -g tabsy
```

##usage
to use `tabsy` you need to enable remote debugging on Firefox

### Connecting with Desktop Firefox
taken from `firefox-client`[README page](https://github.com/harthur/firefox-client/blob/master/README.md) 
1. Enable remote debugging (You'll only have to do this once)
 1. Open the DevTools. **Web Developer** > **Toggle Tools**
 2. Visit the settings panel (gear icon)
 3. Check "Enable remote debugging" under Advanced Settings

2. Listen for a connection
 1. Open the Firefox command line with **Tools** > **Web Developer** > **Developer Toolbar**.
 2. Start a server by entering this command: `listen 6000` (where `6000` is the port number)

###usage
1. After you've connected with Firefox you run tabsy
```bash
tabsy
```
2. Click **ok** on the dialog that will appear in the browser
3. you'll find the links in a `links.txt` file in your home folder 

###options
1. You can specify your own links file path like this:
```bash
tabsy -f [YOUR-FILE-PATH]
```
2. You can also specify the port that `tabsy` uses to listen to firefox:
```bash
tabsy -p [PORT]
```



