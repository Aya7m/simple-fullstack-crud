let posts = []
let add = document.getElementById('add')

let PostTitle = document.getElementById('title')
let PostDesc = document.getElementById('description')
let PostPrice = document.getElementById('price')
let srosh = ''
function getData() {
    fetch('http://localhost:3000/posts')
        .then(response => response.json())
        .then(data => {
            console.log(data.data)
            posts = data.data
            srosh = posts.title
            display(posts)

        })
}


getData()

function display() {
    let cartona = ''
    for (let i = 0; i < posts.length; i++) {
        cartona += `
            
  <tr>
                    <td>${i + 1}</td>
                    <td>${posts[i].title}</td>
                    <td>${posts[i].description}</td>
                    <td>${posts[i].price}</td>
                    <td>
                    
                        <button onclick="update(${i})" class="btn btn-success">Update</button>
                        <button onclick="deletePost(${posts[i].id})" class="btn btn-danger">Delete</button>
                    </td>
                </tr>

            `
    }
    document.getElementById('tbody').innerHTML = cartona
}



// addPost///////

function addPost() {
    // console.log(PostTitle.value);
    let obj = {
        title: PostTitle.value,
        description: PostDesc.value,
        price: PostPrice.value
    }
    api('POST', obj)
    clear()

}


let globalId = ''
function update(i) {
    globalId = posts[i].id
    PostTitle.value = posts[i].title
    PostDesc.value = posts[i].description
    PostPrice.value = posts[i].price

    document.getElementById('update').style.display = 'block'
    document.getElementById('add').style.display = 'none'


}

function updatePost() {
    let obj = {
        id: globalId,
        title: PostTitle.value,
        description: PostDesc.value,
        price: PostPrice.value
    }

    api('PUT', obj)
    add.style.display = 'block';
    document.getElementById('update').style.display = 'none'
    clear()

}


function api(method, data) {
    fetch('http://localhost:3000/posts', {
        method,
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
        .then(res => {
            getData()
        });
}


function deletePost(id) {
    data = {
        id

    }
    api('DELETE', data)
}

function clear() {
    PostTitle.value = ''
    PostDesc.value = ''
    PostPrice.value = ''
}

function search(value) {
    let cartona = ''
    for (let i = 0; i < posts.length; i++)
        if (posts[i].title.toLowerCase().includes(value.toLowerCase())) {
            posts[i].newTitle = posts[i].title.toLowerCase().replace(value.toLowerCase(), `<span class="text-danger">${value}</span>`);

            cartona += `
            
  <tr>
                    <td>${i + 1}</td>
                   <td>${posts[i].newTitle ? posts[i].newTitle : posts[i].title}</td>
                    <td>${posts[i].description}</td>
                    <td>${posts[i].price}</td>
                    <td>
                        <button onclick="update(${i})" class="btn btn-success">Update</button>
                        <button onclick="deletePost(${posts[i].id})" class="btn btn-danger">Delete</button>
                        
                    </td>
                </tr>

            `
        }
    document.getElementById('tbody').innerHTML = cartona


}

