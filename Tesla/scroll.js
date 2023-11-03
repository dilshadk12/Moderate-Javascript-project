document.lastScrollPosition = 0;
document.lastCentered = 0;
document.onWayTo = null;

document.addEventListener('scroll', () => {

    const direction = window.pageYOffset - document.lastScrollPosition > 0 ? 'down' : 'up';
    //    const section= document.querySelectorAll('section'); // this return an object but we want an array
    const sections = [...document.querySelectorAll('section')];

    if (document.onWayTo === null) {
        const destIndex = direction === 'up' ? document.lastCentered - 1 : document.lastCentered + 1;
        if (destIndex >= 0 && destIndex < sections.length) {
            document.onWayTo = destIndex;
            window.scroll(0, sections[destIndex].offsetTop);
        }
    }

    sections.forEach((section, index) => {
        if (window.pageYOffset === section.offsetTop) {
            document.lastCentered = index;
            if (document.onWayTo === index) {
                document.onWayTo = null;
            }
        }
    })

    document.lastScrollPosition = window.pageYOffset;   // current position
})