// Get the user container and post container elements

const postContainer = document.getElementById('postContainer');

// Fetch user data
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        // Create user tabs dynamically
        const tabs = document.querySelector('.tabs');
        users.forEach(user => {
            const tabButton = document.createElement('button');
            tabButton.textContent = user.username;
            tabButton.addEventListener('click', () => showUserPosts(user.id));
            tabs.appendChild(tabButton);
        });
        const firstButton = tabs.querySelector('button');
        if (firstButton) {
            firstButton.click();
        }
    })
    
    

    .catch(error => {
        console.error('Error fetching users:', error);
    });
    
// Function to fetch user posts and display titles
async function showUserPosts(userId) {
    try {
        const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
        const response = await fetch(url);
        const posts = await response.json();

        // Display post titles
        postContainer.innerHTML = '';
        posts.forEach(post => {
            const postTitle = document.createElement('div');
            postTitle.textContent = post.title;
            postContainer.appendChild(postTitle);
        });
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}
