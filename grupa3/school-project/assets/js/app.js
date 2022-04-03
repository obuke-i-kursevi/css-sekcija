mobileHeader.addEventListener('click', function() {
    // console.log(this); // ! SAVET: Uvek logovati na konzoli THIS referencu, cisto da proverite sta oznacava
    if(!this.classList.contains('active')) {
        mobileHeaderContent.classList.remove('not-visible');
        this.classList.add('active');
        backdropWrapper.classList.add('backdrop');
    } else {
        mobileHeaderContent.classList.add('not-visible');
        this.classList.remove('active');
        backdropWrapper.classList.remove('backdrop');
    }
});