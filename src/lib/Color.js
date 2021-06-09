export class Color {
    isValid(testingColor) {
        let style = new Option().style;
        style.color = testingColor;
        return !!style.color;
    }
}