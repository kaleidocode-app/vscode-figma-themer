figma.showUI(__html__, { width: 350, height: 280 });
let theme = [];
let index = [];
for (let n of figma.currentPage.selection) {
    if (n.type === 'FRAME') {
        // grab all token children
        let children = n.findChildren(n => n.name.startsWith('$'));
        children.forEach(c => {
            let node = c;
            let colorName = node.name.substring(1);
            let colors = node.fills[0].color;
            let colorHex = findTheHEX(colors.r, colors.g, colors.b);
            if (index.includes(colorName) === false) {
                index.push(colorName);
                theme.push({
                    [colorName]: '#' + colorHex
                });
            }
            ;
        });
        // post in UI
        figma.ui.postMessage({ type: 'loadStyles', theme: [theme] });
    }
}
function findTheHEX(red, green, blue) {
    var redHEX = rgbToHex(red);
    var greenHEX = rgbToHex(green);
    var blueHEX = rgbToHex(blue);
    return redHEX + greenHEX + blueHEX;
}
function rgbToHex(rgb) {
    rgb = Math.floor(rgb * 255);
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
        hex = '0' + hex;
    }
    return hex;
}
