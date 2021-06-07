function slider({slide, indicaporSelector, dotSelector, prevArrow, nextArrow, totalCaunter, currentCaunter}) {
    const slides = document.querySelectorAll(slide),
          indicators = document.querySelector(indicaporSelector),
          dot = document.querySelectorAll(dotSelector),
          prev = document.querySelector(prevArrow),
          next = document.querySelector(nextArrow),
          total = document.querySelector(totalCaunter),
          current = document.querySelector(currentCaunter);
    let sliderIndex = 1;


    showSlider(sliderIndex);

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
    } else {
        total.textContent = slides.length;
    }
    


    function showSlider(n) {
        if (n > slides.length) {
            sliderIndex = 1;
        }

        if (n < 1) {
            sliderIndex = slides.length;
        }

        slides.forEach(item => item.style.display = 'none');

        slides[sliderIndex -1].style.display = 'block';

        if (slides.length < 10) {
            current.textContent = `0${sliderIndex}`;
        } else {
            current.textContent = sliderIndex;
        }
        dot.forEach(item => item.style.opacity = '.5');
        dot[sliderIndex - 1].style.opacity = '1';
    }

    function plusSlider(n) {
        showSlider(sliderIndex += n);
    }

    prev.addEventListener('click', () => {
        plusSlider(-1);
    });
    next.addEventListener('click', () => {
        plusSlider(1);
    });

    dot.forEach(item => {
        item.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            sliderIndex = slideTo;
            dot.forEach(item => item.style.opacity = '.5');
            dot[sliderIndex - 1].style.opacity = '1';
            showSlider();
        });
    });
}
export default slider;