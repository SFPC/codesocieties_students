
// How to use:
//
// Be sure to add a <div id='sfpc-marquee'></div> somewhere on your page
// and then you can add <script src='https://raw.githubusercontent.com/SFPC/codesocieties_students/master/list-of-blogs/get-blog-list.js'></script>
// at the bottom of your  of your <head> tag! Ping @matt if you have any questions
//


function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}

httpGetAsync('https://raw.githubusercontent.com/SFPC/codesocieties_students/master/list-of-blogs/blogs.json', function(response){
  console.log(response);
  let json = JSON.parse(response);
  let blogs = json.blogs;

  let html = ''
  for(let i = 0; i < blogs.length; i++){
    console.log(blogs[i]);
    let element = "<a href='" + blogs[i].url + "'>" + blogs[i].title + "</a>";
    html += element;
    html += "<br>";
  }

  let sfpcElement = document.getElementById('sfpc-marquee');
  sfpcElement.innerHTML = html;
});
