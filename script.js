

var myTable = document.querySelector('#myTable');
var myform = document.forms['myform'];
myform.addEventListener('submit',function(e){
  e.preventDefault();
  var value = myform.querySelector('input[id="word"]').value;
  var translation = document.getElementById('translation').value;

  // creating elements
  var tr = document.createElement('tr');
  var fav = document.createElement('td');
  var wordValue = document.createElement('td');
  var trans = document.createElement('td');
  var deleteBtn = document.createElement('td');
  var del = document.createElement('span');
  // add value to created elements
  fav.textContent ="Fav";
    fav.id = "fav";
  wordValue.textContent = value;
    wordValue.id = "wV";
  trans.textContent = translation;
    trans.id = "trans";
  del.textContent = "Delete";
    del.id = "delete";
  deleteBtn.id = "td-delete";
  ////////////////////////
  var dell = document.querySelectorAll('#myTable #delete');
   Array.from(dell).forEach(function(btn){
    btn.addEventListener('click',function(delet){
      var ddl = delet.target.parentElement;
      ddl.parentNode.remove(ddl);
    });
  });
  // appending elements in to table
  deleteBtn.appendChild(del);
  tr.appendChild(fav);
  tr.appendChild(wordValue);
  tr.appendChild(trans);
  tr.appendChild(deleteBtn);
  myTable.appendChild(tr);
  document.getElementById("myform").reset();
  document.getElementById("word").focus();
});



//////////////////////////mobile dispaly codes///////////////////////////////////////////
var openLinks = document.getElementById('openLinks');
var links = document.getElementById('links');
var closelinks = document.getElementById('closeLinks');

openLinks.onclick = function(){
  links.style.display = 'block';
  openLinks.style.display = 'none';
  closeLinks.style.display = 'block';
  console.log("links schowed ");
};

closelinks.addEventListener('click', function (c, o, l) {
  c = closeLinks;
  c.style.display = 'none';
  o = openLinks;
  o.style.display = 'block';
  l = links;
  l.style.display = 'none';
  console.log("links closed by pressing the close button");
});
