for (var i = 0; i < 5; i++) {
  let btn = document.createElement('button');
  btn.appendChild(document.createTextNode('Button ' + i));
  btn.addEventListener('click', () => { console.log(i); });
  document.body.appendChild(btn);
}