script.js:

```
async function consoleCall() {
    // Delete this comment and write your code here
    const rawRes = await fetch("https://catfact.ninja/fact")
    const json = await rawRes.json()
    console.log(json)
}

function paragraphCall() {
    // Delete this comment and write your code here
  fetch("https://catfact.ninja/fact")
    .then( (rawRes) => rawRes.json() )
    .then( (json) => document.getElementById('target').innerText = json.fact )
}
```