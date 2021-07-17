function foo(model = {property1, property2}) {
    model.property1++;
    model.property2++;
    return model;
  }
  
  const bar = { property1: 0, property2: 1 };
  foo(bar);
  
  console.log(bar.property1)
  console.log(bar.property2)