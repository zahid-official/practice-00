// buttons
const categoryButtons = async() =>{
    const response = await fetch(`https://openapi.programming-hero.com/api/phero-tube/categories`);
    const btnData = await response.json();
    setBtn(btnData);
}
const setBtn = (btnData) => {
    const btnContainer = document.getElementById('btn-container');
    btnData.categories.forEach(btn => {
        btnContainer.innerHTML += `<button id="btn-${btn.category_id}" class="btn category-btn" onclick="activeButton(${btn.category_id})">${btn.category}</button>`
    })
}
categoryButtons()



// show videos by category
const activeButton = async(id) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`);
    const data = await response.json();
    loadVideo(data.category);

    // remove class
    const removeActive = document.getElementsByClassName('category-btn');
    for(const style of removeActive){
        style.classList.remove('bg-primary');
        style.classList.remove('text-white');
    }

    // add class
    const activeBtn = document.getElementById(`btn-${id}`);
    activeBtn.classList.add('bg-primary');
    activeBtn.classList.add('text-white');

}


// videos
const categoryVideo = async(value= '') => {
    const videoContainer = document.getElementById('video-container')
    const response = await fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${value}`);
    const videoData = await response.json();
    loadVideo(videoData.videos);
}


const loadVideo = (videoData) => {
    const videoContainer = document.getElementById('video-container');
    videoContainer.innerHTML = '';
    if(videoData.length === 0){
        videoContainer.innerHTML = `
        <div class="flex justify-center items-center gap-3 col-span-4 flex-col h-[60vh]">
            <img src="images/Icon.png" alt="icon">
            <p class="text-3xl font-bold text-[#171717]">No content available in this Category</p>
        </div>`
    }
    videoData.forEach(video => {
        videoContainer.innerHTML += `
        <div class="card card-compact bg-base-100">
            <!-- thumbnail -->
            <div class="h-60 relative">
                <img class="w-full h-full object-cover rounded-t-xl" src="${video.thumbnail}">
                ${video.others.posted_date?.length === 0? '' : `<span class="bg-[#171717] text-white text-xs p-2 rounded-md absolute bottom-3 right-3">${time(`${video.others.posted_date}`)}</span>`}
                
            </div>

            <!-- card details -->
            <div class="py-4 pl-1 flex gap-2">
                <div class="profile-photo mt-1">
                <img class="h-12 w-12 rounded-full object-cover" src="${video.authors[0].profile_picture}" alt="profile-photo">
                </div>
                
                <div class="card-info flex-1 space-y-1">
                <h1 class="font-bold text-[#171717]">${video.title}</h1>
                <div class="flex gap-1">
                    <p class="text-[#171717B3] font-medium text-sm">${video.authors[0].profile_name}</p>
                    ${video.authors[0].verified? `<img src="images/verify.png" alt="verify">` : ''}
                </div>
                <p class="text-[#171717B3] font-medium text-sm">${video.others.views}</p>
                <span onclick="details('${video.video_id}')" class="text-sm text-[#171717B3] font-bold cursor-pointer"><img class="h-4 w-4 inline -mt-[3px] mr-1" src="https://img.icons8.com/?size=100&id=86088&format=png&color=000000">Details</span>
                </div>
            </div>
        </div>`

        function time(timeData){
            const hour = parseInt(timeData / 3600);
            const remainSecond = timeData % 3600;
            const minute = parseInt(remainSecond / 60);
            const second = remainSecond % 60;
            return `${hour}hrs ${minute}min ${second}sec ago `;
        }
    })   
}

async function details(modalInfo){
    const response = await fetch(`https://openapi.programming-hero.com/api/phero-tube/video/${modalInfo}`);
    const info = await response.json();
    loadDetails(info);
}

 const loadDetails = (info) =>{
    const modal = document.getElementById('modal');
    modal.innerHTML = `
    <img src="${info.video.thumbnail}">
    <p class="py-4">${info.video.description}</p>`
    my_modal_5.showModal();
 }

 document.getElementById('search').addEventListener('keyup', (e)=>{
    categoryVideo(e.target.value);
 })

categoryVideo()