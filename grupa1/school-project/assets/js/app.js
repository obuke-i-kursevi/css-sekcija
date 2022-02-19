mobileHeader.addEventListener('click', function() {
    if(!this.classList.contains('active')) {
        mobileHeaderContent.classList.remove('not-visible');
        this.classList.add('active');
        backdropWrapper.classList.add('backdrop');
    } else {
        mobileHeaderContent.classList.add('not-visible');
        this.classList.remove('active');
        backdropWrapper.classList.remove('backdrop');
    }
    // console.log(this); // ! SAVET: uvek console logovati THIS
});