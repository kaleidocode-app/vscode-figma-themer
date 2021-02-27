import './ui.css'

let container = <HTMLElement>document.getElementById('container');
let copyButton = <HTMLInputElement>document.getElementById('copy')
let closeButton = <HTMLInputElement>document.getElementById('close')
let themeTextBox = <HTMLTextAreaElement>document.getElementById('theme')

onmessage = (event) => {
    const message = event.data.pluginMessage

    if (message.type == 'loadStyles') {

        let theme = message.theme[0]
        let themeColors = ''
        let tokenColors = ''

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
        
        let theme10 = Object.values(theme[9]).toString()
        let theme11 = Object.values(theme[10]).toString()
        let theme12 = Object.values(theme[11]).toString()
        let theme13 = Object.values(theme[12]).toString()
        let theme14 = Object.values(theme[13]).toString()

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
            themeColors += `    "${token}": "${theme1}",\n`
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
            themeColors += `    "${token}": "${theme2}",\n`
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
            themeColors += `    "${token}": "${theme3}",\n`
        })

        // theme4
        let theme4Colors = [
            'button.secondaryBackground',
            'dropdown.background',
            'list.inactiveSelectionBackground',
            'input.background',
        ]
        theme4Colors.forEach(token => {
            themeColors += `    "${token}": "${theme4}",\n`
        })

        // theme5
        let theme5Colors = [
            'gitDecoration.ignoredResourceForeground',
            'activityBar.inactiveForeground',
        ]
        theme5Colors.forEach(token => {
            themeColors += `    "${token}": "${theme5}",\n`
        })

        // theme6
        let theme6Colors = [
            'tab.inactiveForeground',
            'panelTitle.inactiveForeground',
        ]
        theme6Colors.forEach(token => {
            themeColors += `    "${token}": "${theme6}",\n`
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
            themeColors += `    "${token}": "${theme7}",\n`
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
            themeColors += `    "${token}": "${theme8}",\n`
        })

        // theme9
        let theme9Colors = [
            'button.hoverBackground',
            'textLink.activeForeground',
        ]
        theme9Colors.forEach(token => {
            themeColors += `    "${token}": "${theme9}",\n`
        })

        

        let theme10Colors = `{
                "scope": [
                    "comment",
                    "punctuation.definition.comment",
                    "string.comment"
                ],
                "settings": {
                    "foreground": "${theme10}"
                }
            },\n`
        tokenColors += theme10Colors


        let theme11Colors = `{
                "scope": [
                    "keyword",
                    "keyword.control",
                    "storage",
                    "storage.type"
                ],
                "settings": {
                    "foreground": "${theme11}"
                }
            },\n`
        tokenColors += theme11Colors


        let theme12Colors = `{
                "scope": [
                    "string",
                    "punctuation.definition.string",
                    "string punctuation.section.embedded source"
                ],
                "settings": {
                    "foreground": "${theme12}"
                }
            },\n`
        tokenColors += theme12Colors


        let theme13Colors = `{
                "scope": [
                    "string.regexp constant.character.escape",
                    "markup.quote",
                    "entity.name.tag",
                    "markup.inserted",
                    "meta.diff.header.to-file",
                    "punctuation.definition.inserted"
                ],
                "settings": {
                    "foreground": "${theme13}"
                }
            },\n`
        tokenColors += theme13Colors


        let theme14Colors = `{
                "scope": [
                    "meta.diff.range",
                    "entity",
                    "entity.name",
                    "entity.name.function",
                    "meta.definition.function",
                    "meta.function",
                    "source",
                ],
                "settings": {
                    "foreground": "${theme14}"
                }
            },\n`
        tokenColors += theme14Colors
        

        // combine
        let colorCustomizations = `"workbench.colorCustomizations": {\n${themeColors}\n},\n`
        let tokenColorCustomizations = `"editor.tokenColorCustomizations": {
            "textMateRules": [
                ${tokenColors}
            ],
        },`
        themeTextBox.value = colorCustomizations + tokenColorCustomizations


    }
    else if (message.type === 'empty') {
        container.classList.add('empty');
    }
}

copyButton.onclick = () => {
    themeTextBox.select();
    document.execCommand('copy');
}

closeButton.onclick = () => {
    parent.postMessage({ pluginMessage: { type: 'close' } }, '*')
}