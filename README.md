# Zentoo

## Setup

```
npm install
node app.js
```

## Usage


## Developing


## The MEAN Stack

This is the name given to the full-javascript web development stack using the following 4 core technologies :

 - **MongoDB** for the data management
 - **ExpressJS** for the server-side web application development
 - **AngularJS** for the browser-side interactions
 - **NodeJS** for the run-time environment
 
We add the following for the application :

 - *ElasitcSearch* for full-text search of the data (alternatively consider Algolia).

### Notes on using the MEAN stack

 - ExpressJS `require` and `module.exports` : this is the way to pass data in Express JS.
 - `app.use()` order of statements in `app.js` file for ExpressJS.
 - Passing data from `ExpressJS` to `AngularJS`.
 - Spinning up the nodeJS runtime : `node app.js`.
 - Rendering data from server-side (using ExpressJS) vs browser-side (using AngularJS).
 - mongoose and connection to MongoDB.
 - AngularJS object passing between services and modules and how they bind to HTML (which in turn can be controlled by ExpressJS).
 - Layout.ejs is the default layout name.
 
### Some mongo queries 

```
>> use db zentoo
>> var results = db.businesses.find( { name : {$regex : ".*Eric.*"} } );
>> for (var i = 0 ; i < results.length() ; i++) { printjson(results[i].name); }
"Eric Goldberg, MD"
"Shawn Eric - Ideal Entertainment"
"Swanson Eric D MD DMD"
"Eric James - State Farm Insurance Agent"
"Eric Wolfson, DO"
"Eric Andrew Collection At Town Square"
"Biosthetique Friseur ScherundKamm Eric Schneider"
"Eric's Foot Spa"
"Law Offices Of Eric R Blank"
"Eric Jackson - State Farm Insurance Agent"
"Erickbertos Mexican Resturant"
```

### Tools

Created with [Nodeclipse](https://github.com/Nodeclipse/nodeclipse-1)
 ([Eclipse Marketplace](http://marketplace.eclipse.org/content/nodeclipse), [site](http://www.nodeclipse.org))   

Nodeclipse is free open-source project that grows with your contributions.
