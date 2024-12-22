const loadAllPosts = async (category) => {

    const response = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts${category? `?category=${category}` : ''}`);
    // এখানে বলা হচ্ছে category প্যারামিটারটা যদি truthy হয় তাহলে api এর শেষে ?category=${category}` বসবে নতুবা "" বসবে।

    const data = await response.json();
    displayPost(data.posts);
}

const displayPost = (posts) => {
    let postContainer = document.getElementById('post-container');
    postContainer.innerHTML = '';
    posts.forEach(post => {
        // console.log(post);
        postContainer.innerHTML += `
            <div class="p-6 lg:p-12 flex gap-6 lg:flex-row flex-col items-center lg:items-start bg-[#F3F3F5] rounded-3xl">
            <div class="indicator">
                <span class="indicator-item badge ${post.isActive? 'bg-green-600' : 'bg-red-500'}"></span>
                <div class="avatar">
                    <div class="w-24 rounded-xl">
                        <img src='${post.image}'/>
                    </div>
                </div>
            </div>

            <div class="space-y-4 w-full">
                <!-- top part -->
                <div class="flex gap-4 *:opacity-60">
                    <p># ${post.category} </p>
                    <p>Author: ${post.author.name} </p>
                </div>
                
                <h3 class="text-2xl font-bold opacity-70">${post.title}</h3>
                <p class="opacity-40">${post.description}</p>
                <hr class="border border-dashed border-gray-300"/>

                <!-- bottom part -->
                <div class="flex justify-between *:font-bold [&>*:not(:last-child)]:opacity-45">
                    <!-- comment -->
                    <div class="flex gap-4">
                        <div class="space-x-2 flex items-center">
                            <i class="fa-regular fa-comment-dots"></i>
                            <p>${post.comment_count}</p>
                        </div>
                        
                        <div class="space-x-2 flex items-center">
                            <i class="fa-regular fa-eye"></i>
                            <p>${post.view_count}</p>
                        </div>

                        <div class="space-x-2 flex items-center">
                            <i class="fa-regular fa-clock"></i>
                            <p>${post.posted_time} Min ago</p>
                        </div>
                    </div>
                    
                    <!-- envelope -->
                    <div class="opacity-100">
                        <button id="addToList" onclick="markAsRead('${post.description}', '${post.view_count}')" data-post='' class="addToList btn btn-circle bg-green-500 btn-sm"><i class="fa-solid fa-envelope-open text-white"></i></button>
                    </div>
                </div>
            </div>
        </div>
        `
    });
}

const markAsRead = (description, view) => {
    const markAsReadContainer = document.getElementById('markAsReadContainer');
    markAsReadContainer.innerHTML +=`
    <div class="flex justify-between p-2 lg:p-3 bg-white rounded-2xl items-center gap-3">
        <div class="lg:w-4/5 w-11/12">
            <p>
            ${description}
            </p>
        </div>
        <div class="lg:w-1/5 w-4/12 flex justify-end">
            <p><i class="fa-regular
            fa-eye"></i> ${view}</p>
        </div>
    </div>`

    handleCount();
}

const handleCount = () =>{
    document.getElementById('markAsReadCounter').innerText = 
    parseInt(document.getElementById('markAsReadCounter').innerText) + 1;
}

const handleSearchByCategory = () => {
    const serchText = document.getElementById('searchPosts').value;
    loadAllPosts(serchText);
}

loadAllPosts();






// Latest posts
const loadLatestPosts = async() => {
    const response = await fetch(`https://openapi.programming-hero.com/api/retro-forum/latest-posts`);
    const data = await response.json();
    displayLatestPost(data);
}



/* 
{
    "cover_image": "https://i.ibb.co/VYGSkLz/pexels-jeshootscom-442576.jpg",
    "profile_image": "https://i.ibb.co/z8zx95w/pexels-davide-de-giovanni-1649675.jpg",
    "title": "Gaming Enthusiast Expert in Play",
    "description": "Leading gaming expert with a wealth of knowledge and passion for all things gaming",
    "author": {
      "name": "John Doe",
      "designation": "ROR Developer",
      "posted_date": "29 January 2024"
    }
  }

*/





const displayLatestPost = (posts)=> {
    const latestPostContainer = document.getElementById('latest-post-container');
    posts.forEach(post => {
    // console.log(latestPostContainer);

    latestPostContainer.innerHTML += `
    <div class="card lg:w-96 pb-5 bg-base-100 shadow-2xl">
        <!--card photo -->
        <figure class="lg:px-6 px-4 pt-4 lg:pt-8">
            <img  src='${post.cover_image}' alt="cards" class="rounded-xl"/>
        </figure>

        <div class="p-5 lg:p-10 space-y-4 lg:space-y-5">
            <p class="opacity-50 text-start"><i class="fa-solid fa-calendar-days me-2"></i>${`${post.author.posted_date? post.author.posted_date : 'No Publish date'}`}</p>
            <h2 class="card-title text-start">${post.title}</h2>
            <p class="text-start">${post.description}</p>

            <!-- authour photo -->
            <div class="card-actions flex gap-5 items-center">
                <div class="avatar">
                    <div class="lg:w-12 w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src='${post.profile_image}'/>
                    </div>
                </div>

                <div>
                    <h3 class="text-start font-extrabold">${post.author.name}</h3>
                    <p class="text-start opacity-60">${`${post.author.designation? post.author.designation : 'Unknown'}`}</p>
                </div>
            </div>
        </div>

        <span id="latestPostLoader" class="loading loading-infinity loading-lg lg:mt-24 text-primary hidden"></span> 
    </div>`
    })
}


loadLatestPosts();