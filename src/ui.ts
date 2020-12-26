import './ui.css'

let container = <HTMLElement>document.getElementById('container');
let copyButton = <HTMLInputElement>document.getElementById('copy')
let closeButton = <HTMLInputElement>document.getElementById('close')
let themeCode = <HTMLTextAreaElement>document.getElementById('theme')

onmessage = (event) => {
    const message = event.data.pluginMessage

    if (message.type == 'loadStyles') {

        let theme = message.theme[0]
        let code = ''

        theme.forEach(token => {
            token = JSON.stringify(token)
            token = token.replace(/[{}]/g, "")
            token = `\n    ${token},`
            code += token
        })

        let wrap = `"workbench.colorCustomizations": {${code}\n}`

        themeCode.value = wrap
    }
    else if (message.type === 'empty') {
        container.classList.add('empty');
    }
}

copyButton.onclick = () => {
    themeCode.select();
    document.execCommand('copy');
}

closeButton.onclick = () => {
    parent.postMessage({ pluginMessage: { type: 'close' } }, '*')
}