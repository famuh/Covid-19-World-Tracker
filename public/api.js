
const form = document.getElementById('myForm')
form.addEventListener('submit', function(e){
    e.preventDefault()

    let search = document.getElementById('search').value
    let url = 'https://picsum.photos/v2/list'

    photoData(url)

})
async function covidData(url){
    let response = await fetch(url)
    console.log(response);

    let data = await response.json()
    console.log(data);

    //menampilkan
    photo = document.getElementById('photo')
    photo.src = data.download_url
    indexnya = 0

    if (search == "") {
        for (let indexnya = 0; indexnya < data.length; indexnya++) {
            author.innerText = obj[indexnya].author
            photo.src = data.download_url

        }
    }
    
    else {
        for (let indexnya = 0; indexnya < obj.length; indexnya++) {
            if (search === obj[indexnya].author) {
                author.innerText = obj[indexnya].author
                photo.src = data.download_url
            }
            else {
                document.getElementById("body").innerHTML = ""
            }
        }
    }


}