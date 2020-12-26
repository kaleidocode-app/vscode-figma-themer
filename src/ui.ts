import './ui.css'

let copyButton = <HTMLInputElement>document.getElementById('copy')
let themeCode = <HTMLTextAreaElement>document.getElementById('theme')

onmessage = (event) => {
    const pluginMessage = event.data.pluginMessage

    if (pluginMessage.type == 'loadStyles') {

        let theme = pluginMessage.theme[0]
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
}

copyButton.onclick = () => {
    themeCode.select();
    document.execCommand('copy');
}