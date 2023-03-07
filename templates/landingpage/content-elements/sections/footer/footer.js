(function() {
    const stickyFooter = () => {
        const element = document.getElementsByClassName("footer-container")[0];
        element.style.bottom = "0px";
        const fromTopToElem = element.offsetTop;
        const blockHeight = element.offsetHeight;
        const screenHeight = document.documentElement.scrollHeight;
        const newBottomShit = fromTopToElem + blockHeight - screenHeight;
        if (newBottomShit < 0) {
            element.style.bottom = newBottomShit + "px";
        }
    };
    const countPageSize = () =>
        addEventListener("resize", event => {
            stickyFooter();
        });
    countPageSize();
    stickyFooter();
})();
