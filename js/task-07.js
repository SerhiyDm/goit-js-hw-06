const refs = {
    input: document.querySelector('#font-size-control'),
    output: document.querySelector('#text'),
}

refs.input.addEventListener('input', sizeMaker)
function sizeMaker(event) {
refs.output.style.fontSize = `${event.target.value}px`;
}