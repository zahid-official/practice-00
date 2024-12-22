const spiner = document.getElementById('spiner');

const handleSearch = () => {
    const searchText = document.getElementById('search-text').value;
    spiner.classList.remove('hidden');

    setTimeout(function (){
        loadAllPhones(false, searchText)
    },3000)
}

const loadAllPhones = async(status, searchText) => {
    spiner.classList.add('hidden');

    
    // api fetch
    const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText? searchText : 'iphone'}`);
    const phone = await response.json();
    status? displaySixPhone(phone.data) : displaySixPhone(phone.data.slice(0, 6));
}

const displaySixPhone = (phoneData) =>{
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.innerHTML = '';
    phoneData.forEach(phone => {
        const {brand, phone_name, slug, image } = phone;
        phoneContainer.innerHTML +=`
        <div class="card card-compact bg-base-100 shadow-xl pb-4">
            <figure class="p-4">
                <img class="w-full" src='${image}' alt="phone"/>
            </figure>

            <div class="card-body space-y-1">
                <h2 class="card-title text-2xl">${brand}</h2>
                <p>${slug}</p>
                <div class="card-actions justify-start pt-2">
                <button onclick="phoneDetails('${slug}')" class="btn btn-primary">Show Details</button>
                </div>
            </div>
        </div>
        `
    });
}

const phoneDetails = async(slug)=>{
    const response = await fetch(`https://openapi.programming-hero.com/api/phone/${slug}`);
    const info = await response.json();
    const {name, releaseDate, others, mainFeatures} = info.data;

    // modal-content
    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = `
        <h3 class="text-lg font-bold">${name}</h3>
        <div class="space-y-2 mt-4">
            <p>Release Date: ${releaseDate}</p>
            <p>Storage: ${mainFeatures.storage}</p>
            <p>Sensor: ${mainFeatures.sensors[0]}</p>
            <p>Others: ${others? others.Bluetooth : "No Information"}</p>
        </div>
        
        `
    my_modal_1.showModal();
}

const showAll = ()=>{
    loadAllPhones(true);
}