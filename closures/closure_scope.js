//lexical scope: preference is always given to nearest declared one
function example() {
  let myWebsiteName = "curiousengineers.in";

  function displayWebsiteName() {
    let myWebsiteName = "hello mahesh";
    console.log(myWebsiteName);
  }

  displayWebsiteName();
}

example();
