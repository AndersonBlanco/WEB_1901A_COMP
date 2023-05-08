const dogBio = [
    " Hi I'm Rozzie! I am an energetic and lovable Dobie. I've had a good amount of training and know several commands. I love walking on the leash and I listen very well! I love my people and like to be with my family, but I do take some time to warm up to strangers on my own territory. I'm very loyal to my family, especially the toddlers  in my house, so I feel the need to go on guard when someone unknown is approaching them. I show my guarding tendencies with hackles and a scary sounding bark. However, I'm very smart and can be redirected. Once I know someone is not a threat, I let my guard down. I love to eat...snacks are the best motivator for me. I get a little anxious when meeting strange dogs on a leashed walk, but once introduced properly I get along great with familiar dogs. I do go to doggie daycare regularly where I love to romp around with all my K9 friends. I cannot wait to meet my new family!",
"I am your typical sweet puppy. I enjoy playing and zooming around the yard with my K9 friends. I love getting the attention of my humans and laying in their laps for an afternoon snooze. I do t prefer to share my food with my other k9 friends, I mean do you like people picking off your plate?! I'm looking for a wonderful family who is ready to give me my best life!",

"I'm a big chunk of love who loves my people and just wants to be near them all the time. I am a floppy, goofy boy who can put a smile on your face just by existing. Everything I do is cute! I'm like a Disney character come to life. I love chewing on bones and stuffies, although I may need some gentle reminders as to what's mine to chew and what's yours. I am FANTASTIC on a leash. I also love to cuddle....will you cuddle me for the rest of my days?",
"I had a rough start to life but that has not gotten me down. I am very smart and very sweet! I love everyone I meet, humans and K9s alike. I enjoy a good romp in the yard or a snuggle on the couch...you name it, and I'll be there. Hurry up and submit an application because a wonderful girl like me won't last long.",

]


const info = [
    "Name: Rozzie Breed: Doberman Approximate Age: 3 years Approximate Weight: 50 pounds Sex: Female",
    " Name: Ziggy Breed: Pit Bull mix Approximate Age: 7 months Approximate Weight: 29 pounds Sex: Male",
    " Name: Yoohoo Breed: Mastiff mix Approximate Age: 2.5 yrs Approximate Weight: 65 pounds Sex: Male",
    "Name: Nova Breed: Pit Bull mix Approximate Age: 6 months Approximate Weight: 30 pounds Sex: Female",


]

const compatability = [
    'Compatibility: Dogs: Yes Cats: Unknown Kids: Yes',
  "Compatibility: Dogs: Yes Cats: Unknown Kids: Has been good with 12+, has not been exposed to younger",
  "Compatibility: Dogs: Yes Cats: Unknown Kids: Yes",
"Compatibility: Dogs: Yes Cats: Unknown Kids: Has been good with 12+, has not been exposed to younger",


]

const basics = [
'The Basics: House broken: Yes Crate trained: Yes',
"The Basics: House broken: Mostly, is house trained with a doggy door Crate trained: Yes, but need to limit water intake",
"The Basics: House broken: In progress Crate trained: Yes",
" The Basics: House broken: Yes Crate trained: Yes"

]
 
const adoptDogImgs = [
    './docs/imgs/doggo4.webp',
    './docs/imgs/doggo3.webp',
    './docs/imgs/doggo2.webp',
    './docs/imgs/doggo1.webp'
]

const adoptContainer = document.getElementById('adoptContainer'); 

   for(let x = 0; x <= dogBio.length - 1; x++){

    adoptContainer.innerHTML += `
    <div class ='outerContainer'>
    <div class = 'dogInfoContainer'>
        <div class = 'inline'>
    
        <img src = ${adoptDogImgs[x]} alt = 'dog picture'>
    
        <div class = 'column'>
        <div class = 'inline'>
    
    <p class = 'dogBio'>
    ${dogBio[x]}
    </p>
    
    </div>
    
    <div class = 'inline'>
        <p class = 'info'> ${info[x]}</p>
    
    
    <p class ='compatability'>
 ${compatability[x]}
    </p>
    
    <p class = 'basics'>
 ${basics[x]}
    </p>
    </div>
    </div>
    
    </div>
    </div>
    </div>
    `;

   }

 

