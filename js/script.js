document.addEventListener('DOMContentLoaded', () => {
    
    const track = document.getElementById('carouselTrack');
    const btnPrev = document.getElementById('btnPrev');
    const btnNext = document.getElementById('btnNext');

    if (track && btnPrev && btnNext) {
        btnNext.addEventListener('click', () => {
            track.scrollBy({ left: 300, behavior: 'smooth' });
        });

        btnPrev.addEventListener('click', () => {
            track.scrollBy({ left: -300, behavior: 'smooth' });
        });
    }

    const storeGalleryTrack = document.getElementById('storeGalleryTrack');
    const storeGalleryPrev = document.getElementById('storeGalleryPrev');
    const storeGalleryNext = document.getElementById('storeGalleryNext');

    if (storeGalleryTrack && storeGalleryPrev && storeGalleryNext) {
        storeGalleryNext.addEventListener('click', () => {
            const slideWidth = storeGalleryTrack.clientWidth;
            storeGalleryTrack.scrollBy({ left: slideWidth, behavior: 'smooth' });
        });

        storeGalleryPrev.addEventListener('click', () => {
            const slideWidth = storeGalleryTrack.clientWidth;
            storeGalleryTrack.scrollBy({ left: -slideWidth, behavior: 'smooth' });
        });
    }

    const menuItems = document.querySelectorAll('.sidebar-nav .menu-item');
    const mainViews = document.querySelectorAll('.main-view');

    if(menuItems.length > 0 && mainViews.length > 0) {
        menuItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                
                menuItems.forEach(i => i.classList.remove('active'));
                item.classList.add('active');

                const targetId = item.getAttribute('data-target');
                mainViews.forEach(view => {
                    if (view.id === targetId) {
                        view.classList.remove('hidden');
                        view.classList.add('active-view');
                    } else {
                        view.classList.add('hidden');
                        view.classList.remove('active-view');
                    }
                });
            });
        });
    }

    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    if(tabBtns.length > 0 && tabContents.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                tabBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const tabId = btn.getAttribute('data-tab');
                tabContents.forEach(content => {
                    if (content.id === tabId) {
                        content.classList.remove('hidden');
                        content.classList.add('active-content');
                    } else {
                        content.classList.add('hidden');
                        content.classList.remove('active-content');
                    }
                });
            });
        });
    }
});