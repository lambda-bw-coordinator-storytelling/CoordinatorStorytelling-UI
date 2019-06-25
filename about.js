class Carousel{
    constructor(carouselElement) {
        this.carouselElement = this.carouselElement;
        console.log('carousel', carouselElement)
        this.leftButton = carousel.querySelector('.left-button')
        this.rightButton = carousel.querySelector('.right-button')
        console.log('leftButton', this.leftButton);
        console.log('rightButton', this.rightButton);

        this.itemList = Array.from(carousel.querySelectorAll('.item'));
        console.log(this.itemList);

        this.currentIndex = 0;
        this.itemList.forEach(item => item.style.display = 'none')
        this.itemList[this.currentIndex].style.display = 'flex';

        this.leftButton.addEventListener('click', () => this.leftClick())

        this.rightButton.addEventListener('click', () => this.rightClick())
    }

    leftClick(){
        if(this.currentIndex <= 0){
            this.currentIndex = this.itemList.length-1;
            this.itemList.forEach(item => item.style.display = 'none')
            this.itemList[this.currentIndex].style.display = 'flex'
        }
        else {
            this.currentIndex--;
            this.itemList.forEach(item => item.style.display = 'none')
            this.itemList[this.currentIndex].style.display = 'flex'
        }
    }

    rightClick(){
        if(this.currentIndex >= this.itemList.length-1){
            this.currentIndex = 0;
            this.itemList.forEach(item => item.style.display = 'none')
            this.itemList[this.currentIndex].style.display = 'flex'
        }
        else {
            this.currentIndex++;
            this.itemList.forEach(item => item.style.display = 'none')
            this.itemList[this.currentIndex].style.display = 'flex'
        }
    }

}

let carousel = document.querySelector('.carousel');
new Carousel(carousel)