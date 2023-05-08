const imgs = [
    
    "./docs/imgs/12345_Puppies_a.jpg",
    "./docs/imgs/BlackLab.jpg",
    "./docs/imgs/squirrel.webp",
    "./docs/imgs/stinky.webp",
    "./docs/imgs/use.webp"
];

const text = [
    'RUFF TALES RESCUE  CHANGING LIVES FOUR PAWS AT A TIME',
    'Ruff Tales Rescue is a 501(c)(3), 100% volunteer run and foster based dog rescue that is dedicated to saving the lives of abandoned dogs and redirecting them to stable, loving environments that serve as their forever home or the bridge to their forever home.',
    'We strive to be ambassadors for all breeds and to make excellent matches for our fosters, adopters, and dogs. We also educate the community on the importance of responsible pet ownership and proper care.    ',
    'We are not a shelter and do not have a physical facility. Instead, we rely on devoted foster families who open their hearts and homes to our dogs on a temporary basis. Foster families are the backbone of our lifesaving work and we support them in all aspects from medical care to training to supplies. We are truly a community of committed dog lovers.',
    'RTR is a completely volunteer run organization. With no paid employees, our volunteers come together to make a difference in the lives of our dogs every day. Everything we are able to accomplish is attributable to the unending devotion and hard work of our volunteers.'
]


const sliderContainer = document.getElementById('sliderContainer'); 
const sliderText = document.getElementById('sliderText'); 
var counter = 0; 
setInterval(function(){
    if(counter > imgs.length - 1){
        counter = 0; 
    }

    sliderContainer.style.backgroundImage = `url(${imgs[counter]})`;
    sliderText.innerText = text[counter]; 
    counter += 1; 
}, 4000)