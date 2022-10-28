document.querySelector('#name').addEventListener('input', function (e) {
    console.log(`name:${e.target.value}`)
})

document.querySelector('#address').addEventListener('input', function (e) {
    console.log(`address:${e.target.value}`)
})

