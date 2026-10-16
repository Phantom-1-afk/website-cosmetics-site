function initCommentsSlider() {
    const slides = document.querySelectorAll('.comments_slide');
    const prevBtn = document.querySelector('.comments_btn_prev');
    const nextBtn = document.querySelector('.comments_btn_next');
    const sliderContainer = document.querySelector('.comments_slider_container');
    
    if (!slides.length || !prevBtn || !nextBtn || !sliderContainer) return;
    
    let currentSlide = 0;
    
    // Выравниваем кнопки по вертикали
    function alignButtons() {
        const containerHeight = sliderContainer.offsetHeight;
        prevBtn.style.top = `${containerHeight / 2}px`;
        nextBtn.style.top = `${containerHeight / 2}px`;
    }
    
    // Показываем слайд
    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('comments_slide_active');
                slide.style.display = 'block';
            } else {
                slide.classList.remove('comments_slide_active');
                slide.style.display = 'none';
            }
        });
        
        currentSlide = index;
        
        // После смены слайда перевыравниваем кнопки
        setTimeout(alignButtons, 10);
    }
    
    // Следующий
    function nextSlide() {
        const nextIndex = (currentSlide + 1) % slides.length;
        showSlide(nextIndex);
    }
    
    // Предыдущий
    function prevSlide() {
        const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(prevIndex);
    }
    
    // Инициализация
    showSlide(0);
    alignButtons();
    
    // События
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    
    // При ресайзе и загрузке изображений
    window.addEventListener('resize', alignButtons);
    window.addEventListener('load', alignButtons);
}

document.addEventListener('DOMContentLoaded', initCommentsSlider);