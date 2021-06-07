function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {

    const tabs = document.querySelectorAll(tabsSelector),
          tabContent = document.querySelectorAll(tabsContentSelector),
          tabParent = document.querySelector(tabsParentSelector);

    function hideTabContent() {
        tabContent.forEach(item => {
            item.style.display = 'none';
        }); 

        tabs.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    function showTabsContent(i = 0) {
        tabContent[i].style.display = 'block';
        tabs[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabsContent();

    tabParent.addEventListener('click', (event) => {
        if (event.target && event.target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((item, i) => {
                if (event.target == item) {
                    hideTabContent();
                    showTabsContent(i); 
                }
            });
        }
    });
}
export default tabs;