// local reviews data
const reviews = [
  {
    id: 0,
    name: "suraj thakuri",
    job: "web developer",
    img:
      "https://scontent.fbwa1-1.fna.fbcdn.net/v/t1.6435-9/142156929_3806587102734810_4503518599689715273_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=4jRkS_Tjyw0AX_6x4vV&_nc_oc=AQktBQyaW292Ct5rXyhl9__AEM4JzP1C5hqy_0C4N-ItvOyA_2XPaY1KYC10-04lzsHBYL2BH2ei9VnRjQW1-3xb&_nc_ht=scontent.fbwa1-1.fna&oh=ddd93a0c46cc3c3a4014e06e93cfa547&oe=60D05D8B",
    text:
    "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];


let profilePic = document.getElementById('person-img')
let author = document.getElementById('author')
let job = document.getElementById('job')
let info = document.getElementById('info')

const nextBtn = document.querySelector('.next-btn')
const prevBtn = document.querySelector('.prev-btn')
const randomBtn = document.querySelector('.random-btn')

const buttons = [nextBtn, prevBtn, randomBtn]

buttons.forEach(btn => {
  //console.log(btn)
  btn.addEventListener('click', function(e){
    //console.log(e)

    console.log(e.target.classList.contains('random-btn'))
    if(e.target.classList.contains('prev')){
      switchAuthor(-1)
    }
    else if(e.target.classList.contains('next')){
      switchAuthor(1)
    }
    else{
      let random = Math.floor(Math.random() * reviews.length)
      switchAuthor(random)
    }

  })
})

let currentAuthorId = 0;
function displayAuthor(currentAuthorId){
  profilePic.src =  reviews[currentAuthorId].img
  author.innerHTML = reviews[currentAuthorId].name
  job.innerHTML = reviews[currentAuthorId].job
  info.innerHTML = reviews[currentAuthorId].text
}

displayAuthor(currentAuthorId);

function switchAuthor(val){
  currentAuthorId += val
  if(currentAuthorId >= reviews.length){
    currentAuthorId = 0
  }
  else if(currentAuthorId < 0){
    currentAuthorId = reviews.length - 1
  }
  displayAuthor(currentAuthorId)
}
