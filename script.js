

const fadeTextInHtmlElement = (idElement, text, classChart, delay) => {
    const paragraph = document.querySelector(idElement)

    let end = 0

    const animation = () => {
        const interval = setInterval(() => {
            end += 1
            let span = document.createElement('span')
            span.classList.add(classChart)
            const chartValue = text.substring(end - 1, end)
            span.innerHTML = chartValue
            if (chartValue === ' ') { span.style.width = '10px' }

            paragraph.appendChild(span)

            if (end === text.length) { clearInterval(interval) }
        }, 50)
    }

    setTimeout(() => {
        animation()
    }, delay)
}

const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo natus ea magni, alias necessitatibus debitis, at repellat maiores, id nisi praesentium. Omnis quia voluptatem totam, ut et eos ipsa. Perferendis.'
fadeTextInHtmlElement('#lorem', text, 'chart', 4000)