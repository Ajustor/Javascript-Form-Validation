export class Color {
    isValid(testingColor) {
        const { style } = new Option();
        style.color = testingColor;
        return !!style.color;
    }
}