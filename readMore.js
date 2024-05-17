document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.querySelector('.about__text')
    const readMoreBtn = document.querySelector('.about__button')
    const fullText = textElement.textContent
    const shortText = fullText.substring(0, 200) + '...'

    let isShortened = true
    textElement.textContent = shortText

    readMoreBtn.addEventListener('click', () => {
        if (isShortened) {
            textElement.textContent = fullText
            readMoreBtn.textContent = 'Read Less'
        } else {
            textElement.textContent = shortText
            readMoreBtn.textContent = 'Read More'
        }
        isShortened = !isShortened
    })
})
