const { readFile, writeFile } = require("fs");
readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  console.log(result);
  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    console.log(result);
    writeFile('./content/result-sync.txt',`Here is the final result : ${first},${second}`,(err,result)=>{
        if(err)
        {
            console.log(err);
            return
        }
        console.log(result);
    })
  });
});