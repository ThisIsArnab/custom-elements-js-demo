export class ExpandingList extends HTMLUListElement {

    constructor() {
        // Always call super() in custom element constructor
        super();

        const uls = Array.from(this.querySelectorAll('ul'));
        const lis = Array.from(this.querySelectorAll('li'));

        // Hide all ULs
        // These lists will be shown when user clicks on a high level container
        uls.forEach(ul => ul.style.display = 'none');

        // Look through each LI element in UL.
        // If li has ul as a child, decorate it and add a click handler.
        lis.forEach(li => {
            if (li.querySelectorAll('ul').length > 0) {
                li.className = 'closed';

                // Wrap the li element's text in a new span element
                // so we can assign style and event handlers to the span
                const childText = li.childNodes[0];
                const newSpan = document.createElement('span');

                // Copy text from li to span, set cursor style
                newSpan.textContent = childText.textContent;
                newSpan.style.cursor = 'pointer';

                // Add click handler to this span
                newSpan.onclick = this.showUI;

                // Add the span and remove the bare text node from the li
                childText.parentNode.insertBefore(newSpan, childText);
                childText.parentNode.removeChild(childText);
            }
        });
    }

    private showUI(event: MouseEvent) {
        const nextul = (event.target as HTMLElement).nextElementSibling as HTMLElement;

        // Toggle visible state and update class attribute on ul
        if (nextul.style.display == 'block') {
            nextul.style.display = 'none';
            (nextul.parentNode as HTMLElement).setAttribute('class', 'closed');
        } else {
            nextul.style.display = 'block';
            (nextul.parentNode as HTMLElement).setAttribute('class', 'open');
        }
    }
}