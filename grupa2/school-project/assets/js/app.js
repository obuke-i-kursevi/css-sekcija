mobileHeader.addEventListener('click', function() {
    // console.log(this); // ! SAVET: Uvek console logovati THIS, cisto da znate na sta se odnosi u scope-u u kojem ga koristite
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