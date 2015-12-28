/*Whiteframes: https://www.google.com/design/spec/layout/structure.html#structure-whiteframes*/
/*Shadows: https://www.google.com/design/spec/what-is-material/elevation-shadows.html#elevation-shadows-shadows*/
class Layout {
    constructor() {
        this.card = 'rgba(0, 0, 0, 0.258824) 0px 2px 5px 0px';
        this.shadowBtn = '0 3px 1px -2px rgba(0, 0, 0, 0.14), 0 2px 2px 0 rgba(0, 0, 0, 0.098), 0 1px 5px 0 rgba(0, 0, 0, 0.084)';
        this.shadowBtnHover = '0 2px 4px -1px rgba(0, 0, 0, 0.14), 0 4px 5px 0 rgba(0, 0, 0, 0.098), 0 1px 10px 0 rgba(0, 0, 0, 0.084)';
        this.card2 = "0 1px 8px 0 rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 3px 3px -2px rgba(0,0,0,.12)";
        this.card8 = "0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12)";
        this.card24 = "0 11px 15px -7px rgba(0,0,0,.2), 0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)";

    }
}
var layout = new Layout();
export default layout;
