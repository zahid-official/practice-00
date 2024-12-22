// spiner
const spiner = () => {
    const spiner = document.getElementById('spiner');
    spiner.classList.remove('hidden');
    setTimeout(function (){
        spiner.classList.add('hidden');
        loadAllPets()
    },2000)
}
spiner()


// buttons
const categoryButtons = async() =>{
    const response = await fetch(`https://openapi.programming-hero.com/api/peddy/categories`);
    const btnData = await response.json();
    setBtn(btnData.categories);
}


const setBtn = (btnData) => {
    const btnContainer = document.getElementById('btn-container');
    btnData.forEach(btn => {
        const {category, category_icon} = btn;
        btnContainer.innerHTML += `
        <div class="flex justify-center items-center">
            <button id="btn-${category}" onclick="activeButton('${category}')" class="btn category-btn text-2xl font-extrabold border h-24 rounded-xl px-16"><img class="max-h-full" src='${category_icon}' alt="pet">${category}</button>
        </div>`;
    })
}
categoryButtons()



// show videos by category
const activeButton = async(id) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/peddy/category/${id}`);
    const data = await response.json();
    btnSpiner(data.data);

   // remove class
   const removeActive = document.getElementsByClassName('category-btn');
   for(const style of removeActive){
       style.classList.remove('bg-[#0E7A811A]');
       style.classList.remove('border-[#0e7a81]');
       style.classList.remove('rounded-[50px]');
   }

   // add class
   const activeBtn = document.getElementById(`btn-${id}`);
   activeBtn.classList.add('bg-[#0E7A811A]');
   activeBtn.classList.add('border-[#0e7a81]');
   activeBtn.classList.add('rounded-[50px]');
}


const btnSpiner = (data) => {
    const spiner = document.getElementById('spiner');
    spiner.classList.remove('hidden');
    document.getElementById('pet-container').innerHTML = '';
    setTimeout(function (){
        spiner.classList.add('hidden');
        displayAllPets(data)
    },2000)
}
spiner()



// load all pets
const loadAllPets = async() =>{
    const response = await fetch(`https://openapi.programming-hero.com/api/peddy/pets`);
    const info = await response.json();
    displayAllPets(info.pets);
}


const displayAllPets = (pets)=>{
    const petContainer = document.getElementById('pet-container');
    petContainer.innerHTML = '';

    // sort
    document.getElementById('sort-btn').addEventListener('click', ()=>{
        pets.sort((a, b)=> b.price - a.price);
        displayAllPets(pets);
    })

    if(pets.length === 0){
        petContainer.innerHTML = `
        <div class="flex justify-center items-center bg-base-200 rounded-2xl gap-3 col-span-4 flex-col h-[70vh]">
            <img src="images/error.webp" alt="icon">
            <p class="text-3xl text-center font-bold text-[#131313]">No Information Available</p>
            <p class="text-lg mx-8 font-bold text-textColor text-center">It is a long established fact that a reader will be distracted by the readable content of a page when looking at <br class="2xl:block hidden"> its layout. The point of using Lorem Ipsum is that it has a.</p>
        </div>`
    }
    pets.forEach(pet => {
        const {image, pet_name, breed, date_of_birth, gender, price, petId} = pet;
        petContainer.innerHTML +=`
        <div class="card card-compact bg-base-100 border">
            <div class="p-3">
                <img class="w-full h-42 object-cover" src='${image}' alt="image"/>
            </div>
            
            <div class="card-body">
                <h2 class="card-title font-extrabold">${pet_name}</h2>
                <p class="text-base font-semibold text-textColor"><i class="fa-solid fa-list mr-1"></i> Breed: ${`${breed? breed : 'Not Available'}`}</p>
                <p class="text-base font-semibold text-textColor"><i class="fa-solid fa-calendar-days mr-1"></i> Birth: ${`${date_of_birth? date_of_birth : 'Not Available'}`}</p>
                <p class="text-base font-semibold text-textColor"><i class="fa-solid fa-venus mr-1"></i> Gender: ${`${gender? gender : 'Not Available'}`}</p>
                <p class="text-base font-semibold text-textColor"><i class="fa-solid fa-dollar-sign mr-1"></i> Price : ${`${price? price : 'Not Available'}`}</p>

                <hr class="my-3">
                <div class="flex gap-4 flex-wrap justify-around">
                <button onclick="likedPets('${image}')" class="btn hover:bg-primary hover:text-white text-primary"> <i class="fa-solid fa-thumbs-up text-xl px-2"></i> </button>

                <button onclick="adoptPets(this)" class="btn hover:bg-primary hover:text-white text-primary"> Adopt</button>

                <button onclick="loadDetails('${petId}')" class="btn hover:bg-primary hover:text-white text-primary"> Details</button>
                </div>
            </div>
        </div>`;
    });
}


// like
const likedPets = (pet)=>{
    const likeContainer = document.getElementById('like-container');
    likeContainer.innerHTML += `
    <div class="border p-2 rounded-xl"><img src='${pet}' alt=""></div>`;
}

// adopt
const adoptPets = (adoptBtn)=>{
    console.log(adoptBtn);
    let count = 3;
    adoptCount.innerText = count;

    let stopModal = setInterval(() =>{
        count--;
        adoptCount.innerText = count;

        if(count === 0){
            clearInterval(stopModal);
            my_modal_5.close();
            adoptBtn.innerText = "Adopted";
            adoptBtn.setAttribute('disabled', true);
        }
    }, 1000);
    my_modal_5.showModal()
}


 // details
const loadDetails = async (id)=>{
    const response = await fetch(`https://openapi.programming-hero.com/api/peddy/pet/${id}`);
    const data = await response.json();
    petDetails(data.petData);
}

const petDetails = (pet)=>{
    const {breed, date_of_birth, price, image, gender, pet_details, vaccinated_status, pet_name} = pet;

    const detailsContainer = document.getElementById('detailsContainer');
    detailsContainer.innerHTML = `
    <div class="card card-compact bg-base-100 ">
        <div class="p-5">
            <img class="w-full h-42 object-cover" src='${image}' alt="image"/>
        </div>
        
        <div class="card-body p-2">
        <h2 class="card-title font-extrabold">${pet_name}</h2>
            <div class="sm:flex gap-5">
            <div class="space-y-3">
                <p class="text-base font-semibold text-textColor"><i class="fa-solid fa-list mr-1"></i> Breed: ${`${breed? breed : 'Not Available'}`}</p>
                <p class="text-base font-semibold text-textColor"><i class="fa-solid fa-venus mr-1"></i> Gender: ${`${gender? gender : 'Not Available'}`}</p>
                <p class="text-base font-semibold text-textColor"><i class="fa-solid fa-venus mr-1"></i> Vaccinated Status: ${`${vaccinated_status? vaccinated_status : 'Not Available'}`} </p>
            </div>

            <div class="space-y-3">
                <p class="text-base font-semibold text-textColor"><i class="fa-solid fa-calendar-days mr-1"></i> Birth: ${`${date_of_birth? date_of_birth : 'Not Available'}`}</p>
                <p class="text-base font-semibold text-textColor"><i class="fa-solid fa-dollar-sign mr-1"></i> Price : ${`${price? price : 'Not Available'}`}</p>
            </div>
            </div>

            <hr class="my-5"> 

            <div class="space-y-2">
            <h2 class="text-lg font-bold">Details Information</h2>
            <p class="text-base text-textColor">${pet_details}</p>
            </div>
        </div>
    </div>`;
    detailsModal.showModal();
}
