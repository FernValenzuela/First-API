# Instructions

---

In this lesson, you will make a GET request to an API.
This basically means you'll be requesting a resource
from a server that's accessible through the internet.

Your client wants a webpage that gives them random 
facts about cats. Luckily, an existing API does
exactly that, [https://catfact.ninja/fact](here). 
You just need to figure out how to use it!

You will modify the two functions inside 'script.js'
to 1) print out the result of your
API call to the console using `async`/`await` syntax inside a try/catch block,
and 2) to put the result of the API call inside the
`<p>` tag with the id of `target` using the `.then`
and `.catch` syntax.

Note that you should only display the fact and not 
any other properties of the object returned by the
API. What you print or show on the page should look
like this:
```
Cats lose almost as much fluid in the saliva while grooming themselves as they do through urination.
```
Instead of this:
```
{"fact":"Cats lose almost as much fluid in the saliva while grooming themselves as they do through urination.","length":100}
```