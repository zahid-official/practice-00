// category-area
const allCategories = async() => {
    const response = await fetch('https://openapi.programming-hero.com/api/phero-tube/categories');
    const data = await response.json();
    visibleCategories(data.categories);
}

const visibleCategories = (data) =>{
    const category = document.getElementById('category');
    const displayCategory = data.forEach(item => {
        category.innerHTML += `<button id="btn-${item.category_id}" class="btn category-btn" onclick="loadCategories(${item.category_id})">${item.category}</button>`
    })
}

function loadCategories(id){
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then(idData => idData.json())
    .then(idInfo => {
        // remove class
        const removeActive = ()=>{
            categoryBtn = document.getElementsByClassName('category-btn');
            for (const btn of categoryBtn){
                btn.classList.remove('bg-primary');
                btn.classList.remove('text-white');
            }
        }
        removeActive();

        // add class
        const activeBtn = document.getElementById(`btn-${id}`);
        activeBtn.classList.add('bg-primary');
        activeBtn.classList.add('text-white');
        visibleVideos(idInfo.category)
    })
}

allCategories();


// video-area
const allVideos = async(search = "") => {
    const response = await fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${search}`);
    const data = await response.json();
    visibleVideos(data.videos);
}

const visibleVideos = (data) =>{
    const video = document.getElementById('video');
    video.innerHTML = '';
    if(data.length === 0){
        video.innerHTML = `
        <div class="h-[60vh] flex flex-col gap-4 justify-center items-center col-span-4">
            <img src="images/Icon.png" alt="icon">
            <p class="text-3xl font-bold">No content available in this Category</p>
        </div>`
    }
    const displayVideo = data.forEach(item => {
        // convert thumnail time durations
        function time(num){
            const hour = parseInt(num / 3600);
            const remain = num % 3600;
            const minute = parseInt(remain / 60);
            const second = parseInt(remain % 60);
            return `${hour}hrs ${minute}min ${second}sec ago`
        }
        
        video.innerHTML += `
        <div class="card card-compact bg-base-100 ">
            <div class="h-60 relative">
                <img src="${item.thumbnail}" class="w-full h-full object-cover rounded-t-xl" alt="thumnail">
                ${item.others.posted_date?.length === 0? '' : `<span class="bg-[#171717] text-white text-xs p-2 rounded-md absolute right-3 bottom-3">${time(item.others.posted_date)}</span>`}
            </div>
            
            <div class="flex gap-3 py-4 pl-1">
                <div class="icons mt-1">
                    <img src="${item.authors[0]['profile_picture']}" class="h-10 w-10 rounded-full object-cover" alt="image">
                </div>

                <div class="titles space-y-[3px] flex-1">
                    <h1 class="font-bold text-base">${item.title}</h1>
                    <div class="flex gap-1">
                        <p class="text-sm text-[#171717B3] font-medium">${item.authors[0]['profile_name']}</p>
                        ${item.authors[0].verified? `<img id=verify src="images/verify.png" alt="verify">` : ''}
                    </div>
                    <p class="text-sm text-[#171717B3] font-medium">${item.others.views}</p>
                    <span onclick="loadDetails('${item.video_id}')" class="text-sm text-[#171717B3] font-bold cursor-pointer"><img src="https://img.icons8.com/?size=100&id=86088&format=png&color=000000" class="w-4 h-4 inline mr-1">Details</span>
                </div>
            </div>
        </div>`
    }) 
}
function loadDetails(id){
    fetch(`https://openapi.programming-hero.com/api/phero-tube/video/${id}`)
    .then(response => response.json())
    .then(data => displayDetails(data.video))
}

function displayDetails(data){
    console.log(data);
    const modal = document.getElementById('customModal');
    modal.showModal()
    const modatContent = document.getElementById('modal-content');
    modatContent.innerHTML = `
        <img src="${data.thumbnail}">
        <p class="mt-4">${data.description}</p>
    `
}

const input = document.getElementById('input');
input.addEventListener('keyup', (event) => {
    allVideos(event.target.value);
})

allVideos();