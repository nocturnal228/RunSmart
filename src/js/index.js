const hello = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("Hello World 111"), 2000);
    });
  }
  
  hello()
    .then(value => console.log(value));