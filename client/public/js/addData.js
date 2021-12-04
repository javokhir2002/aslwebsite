const form = document.querySelector('form')

async function addData () {
    const res = await fetch('http://localhost:4000/categories/subcategories/contents', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify()
    })
    consolo.log(res)
}
addData()