(() => {
    const elements = Array.from(document.querySelectorAll('div[x-include-html]'))
    elements.forEach(element => {
        const url = "templates/" + element.getAttribute('x-include-html')
        fetch(url)
            .then(response => response.text())
            .then(html => {
                element.innerHTML = html
            })
    })
})()