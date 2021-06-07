import {getResours} from '../services/services';
function cards() {


    getResours('http://localhost:3000/menu')
        .then(data => {
            data.forEach(({img, altimg, title, descr, price}) => {
                new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
            });
        });


    class MenuCard {
        constructor(src, alt, title, info, prise, parentSelector) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.info = info;
            this.prise = prise;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 19;
            this.changeToUAH();
            
        }
        changeToUAH() {
            this.prise = this.prise * this.transfer;
        }
        render() {
            const element = document.createElement('div');
            element.innerHTML = `
            <div class="menu__item">
                    <img src="${this.src}" ${this.alt}">
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.info}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.prise}</span> грн/день</div>
                    </div>
                </div>
            `;
            this.parent.append(element);
        }   
    }
}
export default cards;