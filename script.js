async function consoleCall() {
    let res = await fetch("https://catfact.ninja/fact")
    let json = await res.json()
    console.log(json)
}

function paragraphCall() {
  fetch("https://catfact.ninja/fact")
  .then(  (response1)  =>  response1.json() )
  .then(  (response2)  =>  document.getElementById('target').innerText = response2.fact )
}
document.getElementById