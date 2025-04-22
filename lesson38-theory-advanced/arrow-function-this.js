console.log(this);

let obj = {
  method: () => {
    console.log(this);
  },
};

const newMethod = obj.method();
newMethod();
