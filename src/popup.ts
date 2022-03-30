export class PopUpInfo extends HTMLElement {
    
    static get observedAttributes() {
        return ['x', 'y'];
    }

    constructor() {
        // Always call super first to maintain correct prototype chain        
        super();

        // Create a shadow root
        const shadow = this.attachShadow({ mode: 'open' });

        // Create nested <span> elements
        const wrapper = document.createElement('span');
        wrapper.className = 'wrapper';
        wrapper.classList.add('wrapper');

        const icon = document.createElement('span');
        icon.className = 'icon';
        icon.tabIndex = 0;

        const info = document.createElement('span');
        info.className = 'info';

        // Take the input attribute content and put it inside info span
        const text = this.getAttribute('data-text');
        info.textContent = text;

        // Insert icon
        let imgUrl;
        if (this.hasAttribute('img')) {
            imgUrl = this.getAttribute('img');
        } else {
            imgUrl = 'img/icon-info.png';
        }

        const img = document.createElement('img');
        img.src = imgUrl;
        icon.appendChild(img);

        // Create some CSS to apply to the shadow DOM
        const style = document.createElement('style');
        console.log(`Style before appendChild() is connected : ${style.isConnected}`);

        style.textContent = `
            .wrapper {
                position: relative;
            }
            .info {
                font-size: 0.8rem;
                width: 200px;
                display: inline-block;
                border: 1px solid black;
                padding: 10px;
                background: white;
                border-radius: 10px;
                opacity: 0;
                transition: 0.6s all;
                position: absolute;
                bottom: 20px;
                left: 10px;
                z-index: 3;
            }
            img {
                width: 1.2rem;
            }
            .icon:hover + .info, .icon:focus + .info {
                opacity: 1;
            }
        `;

        // Attach created elements to Shadow DOM
        shadow.appendChild(style);
        console.log(`Style after appendChild() is connected : ${style.isConnected}`);

        shadow.appendChild(wrapper);
        wrapper.appendChild(icon);
        wrapper.appendChild(info);
    }

    connectedCallback() {
        console.log(`connectedCallback args`, arguments);
    }

    disconnectedCallback() {
        console.log(`disconnectedCallback args`, arguments);
    }

    adoptedCallback() {
        console.log(`adoptedCallback args`, arguments);
    }

    attributeChangedCallback() { 
        console.log(`attributeChangedCallback args`, arguments);
    }

}
