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

        // define colors
        let theme1 = Object.values(theme[0]).toString()
        let theme2 = Object.values(theme[1]).toString()
        let theme3 = Object.values(theme[2]).toString()
        let theme4 = Object.values(theme[3]).toString()
        let theme5 = Object.values(theme[4]).toString()
        let theme6 = Object.values(theme[5]).toString()
        let theme7 = Object.values(theme[6]).toString()
        let theme8 = Object.values(theme[7]).toString()
        let theme9 = Object.values(theme[8]).toString()
        // let theme10 = Object.values(theme[9]).toString()

        // theme1
        let theme1Colors = [
            'activityBar.border',
            'dropdown.border',
            'editorGroupHeader.border',
            'panel.border',
            'sideBar.border',
            'statusBar.border',
            'tab.border',
            'titleBar.border',
        ]
        theme1Colors.forEach(token => {
            code += `    "${token}": "${theme1}",\n`
        })

        // theme2
        let theme2Colors = [
            'notifications.background',
            'sideBar.background',
            'sideBarSectionHeader.border',
            'editorGroupHeader.tabsBackground',
            'tab.inactiveBackground',
            'panel.background',
        ]
        theme2Colors.forEach(token => {
            code += `    "${token}": "${theme2}",\n`
        })

        // theme3
        let theme3Colors = [
            'button.secondaryBackgroundHover',
            'titleBar.activeBackground',
            'activityBar.background',
            'statusBar.background',
            'statusBar.noFolderBackground',
            'tab.activeBackground',
            'editor.background',
            'list.hoverBackground',
        ]
        theme3Colors.forEach(token => {
            code += `    "${token}": "${theme3}",\n`
        })

        // theme4
        let theme4Colors = [
            'button.secondaryBackground',
            'dropdown.background',
            'list.inactiveSelectionBackground',
            'input.background',
        ]
        theme4Colors.forEach(token => {
            code += `    "${token}": "${theme4}",\n`
        })

        // theme5
        let theme5Colors = [
            'gitDecoration.ignoredResourceForeground',
            'activityBar.inactiveForeground',
        ]
        theme5Colors.forEach(token => {
            code += `    "${token}": "${theme5}",\n`
        })

        // theme6
        let theme6Colors = [
            'tab.inactiveForeground',
            'panelTitle.inactiveForeground',
        ]
        theme6Colors.forEach(token => {
            code += `    "${token}": "${theme6}",\n`
        })

        // theme7
        let theme7Colors = [
            'activityBar.foreground',
            'button.foreground',
            'button.secondaryForeground',
            'dropdown.foreground',
            'foreground',
            'input.foreground',
            'inputOption.activeForeground',
            'list.inactiveSelectionForeground',
            'panelTitle.activeForeground',
            'sideBar.foreground',
            'sideBarSectionHeader.foreground',
            'sideBarTitle.foreground',
            'statusBar.foreground',
            'tab.activeForeground',
            'titleBar.activeForeground',
        ]
        theme7Colors.forEach(token => {
            code += `    "${token}": "${theme7}",\n`
        })

        // theme8
        let theme8Colors = [
            'button.background',
            'inputOption.activeBackground',
            'focusBorder',
            'textLink.foreground',
            'activityBar.activeBorder',
            'tab.activeBorderTop',
            'panelTitle.activeBorder',
            'statusBar.debuggingBackground',
        ]
        theme8Colors.forEach(token => {
            code += `    "${token}": "${theme8}",\n`
        })

        // theme9
        let theme9Colors = [
            'button.hoverBackground',
            'textLink.activeForeground',
        ]
        theme9Colors.forEach(token => {
            code += `    "${token}": "${theme9}",\n`
        })

        // theme10
        // let theme10Colors = [
        //     'activityBar.activeBorder',
        //     'tab.activeBorderTop',
        //     'panelTitle.activeBorder',
        //     'statusBar.debuggingBackground',
        // ]
        // theme10Colors.forEach(token => {
        //     code += `    "${token}": "${theme10}",\n`
        // })

        // combine
        let wrap = `"workbench.colorCustomizations": {\n${code}\n}`
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