
async function fetchNews(country , category ,page){
  var url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&page=${page}&pageSize=21&apiKey=3516bfa68f2d4f3caa34d49e499df0d6`

var req = new Request(url);

let data = await fetch(req)
let obj = await data.json();
let ans = obj.articles;
let str = ""
let search = document.querySelector("#search");
let query = search.value;
let card = document.querySelector(".row");
if(ans.length == 0 ){
  card.innerHTML = "Oppps no news found for " + query ;
}
else{
  for(let i of obj.articles){
    str += `<div class="card  mx-3 my-2" style="width: 20rem">
   <img src="${i.urlToImage}" class="card-img-top" alt="..." />
   <div class="card-body">
   <h5 class="card-title">"${i.title}"</h5>
   <p class="card-text">
            "${i.description}"
   </p>
   <a href="${i.url}" class="btn btn-primary">Go to News</a>
   
   </div>
   </div> `

 card.innerHTML = str
 
 }
}



}

let currentquery = "business"
let currentPage = 1;
fetchNews("in", currentquery ,currentPage)

let sport = document.querySelector(".sport");
sport.addEventListener('click' ,()=>{
  // console.log(ans);
  fetchNews("in", "sport");
})

let entertainment = document.querySelector(".entertainment");
  entertainment.addEventListener('click',()=>{
    fetchNews("in" , "entertainment")
  })


  let search = document.querySelector("#search");
  let button = document.querySelector("#button");
  button.addEventListener('click' , (e)=>{
    let query = search.value;
    currentquery = query
    
    e.preventDefault();
    if(currentPage > 1){
      currentPage= 1;
      fetchNews("in" ,currentquery, currentPage)
    }
    else{
      fetchNews("in" ,currentquery, currentPage)
    }
    
  })

  let prev = document.querySelector("#prev");
  prev.addEventListener('click',()=>{
    if(currentPage>1){
      currentPage -=1;
      fetchNews("in" , currentquery ,currentPage)
    }
    
  })
  let next = document.querySelector("#next");
  next.addEventListener('click',()=>{
    currentPage+=1;
    fetchNews("in" , currentquery , currentPage)
  })



// let obj = {
//   status: "ok",
//   totalResults: 10,
//   articles: [
//     {
//       source: { id: "bbc-news", name: "BBC News" },
//       author: "BBC News",
//       title: "Oscars 2023: Who will win and how to watch the ceremony",
//       description:
//         "Cate Blanchett is among nominees at the 95th Academy Awards, which will be hosted by Jimmy Kimmel.",
//       url: "http://www.bbc.co.uk/news/entertainment-arts-64857431",
//       urlToImage:
//         "https://ichef.bbci.co.uk/news/1024/branded_news/2D2C/production/_128946511_hi082685188.jpg",
//       publishedAt: "2023-03-12T12:37:18.196331Z",
//       content:
//         "All eyes will be on Hollywood later to see whether Everything Everywhere All At Once can cap its extraordinary awards season by sweeping the Oscars.\r\nThe eccentric multiverse adventure is the favouri… [+8091 chars]",
//     },
//     {
//       source: { id: "bbc-news", name: "BBC News" },
//       author: "BBC News",
//       title: "Aramco: Saudi state-owned oil giant sees record income of $161bn",
//       description:
//         "After a year when petrol prices soared, the Saudi firm announces a best-ever year.",
//       url: "http://www.bbc.co.uk/news/world-middle-east-64931074",
//       urlToImage:
//         "https://ichef.bbci.co.uk/news/1024/branded_news/DEB6/production/_119841075_aramco_getty.jpg",
//       publishedAt: "2023-03-12T11:07:15.315037Z",
//       content:
//         "Saudi oil giant Aramco has announced a record profit of $161.1bn (£134bn) for 2022, helped by soaring energy prices and bigger volumes.\r\nIt represents a 46.5% rise for the state-owned company, compar… [+2473 chars]",
//     },
//     {
//       source: { id: "bbc-news", name: "BBC News" },
//       author: "BBC News",
//       title: "Budget and Lineker in focus on Kuenssberg show",
//       description:
//         "Guests to be quizzed on next week's budget, and the BBC's impartiality row, include the chancellor and ex-BBC executives.",
//       url: "http://www.bbc.co.uk/news/live/uk-politics-64922187",
//       urlToImage:
//         "https://m.files.bbci.co.uk/modules/bbc-morph-news-waf-page-meta/5.3.0/bbc_news_logo.png",
//       publishedAt: "2023-03-12T08:37:16.7217745Z",
//       content:
//         "Welcome to our live and continuous coverage of todays big political interviews as we bring you text coverage, reaction and analysis from Sunday with Laura Kuenssberg.\r\nTodays programme will be lookin… [+665 chars]",
//     },
//     {
//       source: { id: "bbc-news", name: "BBC News" },
//       author: "BBC News",
//       title: "Watch: Saturday's day of football disruption... in 60 seconds",
//       description:
//         "A staff walk-out in support of Gary Lineker has heaped pressure on the BBC's boss.",
//       url: "http://www.bbc.co.uk/news/uk-64929759",
//       urlToImage:
//         "https://ichef.bbci.co.uk/news/1024/branded_news/17B52/production/_128960179_p0f883gl.jpg",
//       publishedAt: "2023-03-12T07:37:14.8778261Z",
//       content:
//         'The BBC\'s director general Tim Davie says it has been a "difficult day" for the corporation after a Match of the Day staff walk-out led to the programme going ahead with no commentary and without pun… [+214 chars]',
//     },
//     {
//       source: { id: "bbc-news", name: "BBC News" },
//       author: "BBC News",
//       title: "Mexico too dangerous for spring break, Texas officials say",
//       description:
//         "Texan officials say that cartel violence represents a significant threat for those entering Mexico.",
//       url: "http://www.bbc.co.uk/news/world-latin-america-64929565",
//       urlToImage:
//         "https://ichef.bbci.co.uk/news/1024/branded_news/FE0A/production/_128943056_e4c416e2c230a0dfe2816bd941a12af748b7ea120_0_5500_36671000x667.jpg",
//       publishedAt: "2023-03-12T03:52:17.8310147Z",
//       content:
//         "Media caption, Watch: The Mexican kidnapping saga explained in 80 seconds\r\nAuthorities in the US state of Texas have advised American citizens not travel to Mexico during the spring break holidays fo… [+2250 chars]",
//     },
//     {
//       source: { id: "bbc-news", name: "BBC News" },
//       author: "BBC News",
//       title: "Turkey earthquake: Istanbul residents fear homes will collapse",
//       description:
//         "After quakes in Turkey's south claimed 50,000 lives, the race is on to protect its biggest city.",
//       url: "http://www.bbc.co.uk/news/world-europe-64905649",
//       urlToImage:
//         "https://ichef.bbci.co.uk/news/1024/branded_news/20C0/production/_128948380_bbcnews20230228_5405.jpg",
//       publishedAt: "2023-03-12T00:07:14.158317Z",
//       content:
//         "The crack in Mesut Muttaliboglu's bedroom wall is so wide, he can fit a car key into it. \r\nHe turns it sideways, and with a flick of his wrist, a large chunk of plaster flies off the wall and crashes… [+5444 chars]",
//     },
//     {
//       source: { id: "bbc-news", name: "BBC News" },
//       author: "BBC News",
//       title:
//         "Israel: Protesters take to streets in one of the biggest protests in its history",
//       description:
//         "Protests against plans for a radical overhaul of the judicial system have been running for 10 weeks.",
//       url: "http://www.bbc.co.uk/news/world-middle-east-64929563",
//       urlToImage:
//         "https://ichef.bbci.co.uk/news/1024/branded_news/1731E/production/_128960059_mediaitem128960055.jpg",
//       publishedAt: "2023-03-11T23:22:19.9249178Z",
//       content:
//         "Hundreds of thousands of Israelis have taken part in what some are calling the biggest protest in the country's history.\r\nProtests against government plans for a radical overhaul of the judicial syst… [+2574 chars]",
//     },
//     {
//       source: { id: "bbc-news", name: "BBC News" },
//       author: "BBC News",
//       title: "The Mexican kidnapping saga explained in 80 seconds",
//       description:
//         "Two US citizens have been returned and the cartel handed over its own men. Here is what we know.",
//       url: "http://www.bbc.co.uk/news/world-us-canada-64753595",
//       urlToImage:
//         "https://ichef.bbci.co.uk/news/1024/branded_news/6AF9/production/_128958372_p0f86k26.jpg",
//       publishedAt: "2023-03-11T15:37:19.2895811Z",
//       content:
//         "The Mexican kidnapping saga explained in 80 seconds. Video, 00:01:20The Mexican kidnapping saga explained in 80 seconds",
//     },
//     {
//       source: { id: "bbc-news", name: "BBC News" },
//       author: "BBC News",
//       title: "US fight over abortion pills waged state by state",
//       description:
//         "Tussles in California, Texas and elsewhere over the drug mifepristone could affect millions of US women.",
//       url: "http://www.bbc.co.uk/news/world-us-canada-64883398",
//       urlToImage:
//         "https://ichef.bbci.co.uk/news/1024/branded_news/A90A/production/_128747234_gettyimages-1241524154.jpg",
//       publishedAt: "2023-03-11T13:37:22.7901166Z",
//       content:
//         "Anti-abortion activists won a historic victory at the Supreme Court last year, but the debate over one of America's most divisive issues is far from over, with focus now shifting to over-the-counter … [+6392 chars]",
//     },
//     {
//       source: { id: "bbc-news", name: "BBC News" },
//       author: "BBC News",
//       title:
//         "Atmospheric river to bring more snow, rain and floods to California",
//       description:
//         'The National Weather Service said lives and property are in "great danger".',
//       url: "http://www.bbc.co.uk/news/world-us-canada-64911139",
//       urlToImage:
//         "https://ichef.bbci.co.uk/news/1024/branded_news/E6E1/production/_128950195_gettyimages-1247971121.jpg",
//       publishedAt: "2023-03-10T15:07:24.0851482Z",
//       content:
//         "California is facing yet another dangerous winter storm, expected to bring heavy precipitation that could lead to flash flooding this weekend. \r\nThe extreme weather is the latest in a series of storm… [+2399 chars]",
//     },
//   ],
// };

// // async function news(url) {
// //   let req = new Request(url);
// //   let data = await fetch(req);
// //   let ans = await data.json();
// //   console.log(JSON.stringify(ans));
// // }

// let str = `<div class="card mx-3 my-2" style="width: 18rem">
//             <img src="${i.urlToImage}" class="card-img-top" alt="..." />
//             <div class="card-body">
//             <h5 class="card-title">"${i.title}"</h5>
//             <p class="card-text">
//                      "${i.description}"
//             </p>
//              <a href="#" class="btn btn-primary">Go somewhere</a>
//             </div>
//             </div> `
// let card = document.querySelector(".card");
// card.innerHTML = str;
// // news(url);
