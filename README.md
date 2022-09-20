# Next js 

- build a react app but render the content in advance on the server

- Create fast search engine

- Optimize react apps with zero configuration

## Folder stucture 
## Page directory
![dir](/dir.png)
Each javascript file in the directory  exports a react component that represents a route in the application.
The file structure mirrors the actual urls that the user will navigate to using the built in next router.
dynamic routing can be done using the syntax `[filename].js`


## Api directory
Allow to run server side only code. 
Can be used to handle Auth and protected routes for example

## RENDERINGS 
## CLIENT-SIDE RENDERING (Classic react)

A traditional react app is rendered client side where the browser starts with a shell of an html page (<div id="root">)
The browser then fetches the javascript file containing the react code to render and make interactive the content to the page

con:
- SEO the content is not reliably indexed by all search engines or read by social media link bots and
-  it can take longer to reach the first contentful paint when a user first lands on the web page


## STATIC GENERATION (SSG))
### render all pages at build time

static generation or pre-rendering allows you to render your pages at build time each page or component can
the `function getStaticProps()` can be used to fetch data from a cloud database then pass the data as props to the component
the build of the app to renders out all the html locally
 pro: 
 - SEO
 - first contentful paint
 - great for a blog or any kind of app where the data doesn't change often

con: 
- no real private route
- tough handling of frequent data changes 
- hard to scale


can implement server side rendering
## SERVER-SIDE RENDERING (SSR)
### generate each page at request time

Builds the html page each time it's requested by the user in the component we implement data fetching.
With the function `getServerSideProps()`  instead of running at build time this function runs at request time.
That means the page will fetch the latest data on the server each time a new request comes in.
pro:
- great for pages with rapidly changing data 

con: 
- slower (server needs to be running at all time)
- inneficient data caching



### All rendering paradimes can be use in the same application