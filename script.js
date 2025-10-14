<script>
    const animItems = document.querySelectorAll('.animate');

    function animateOnScroll() {
        animItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            if(rect.top < window.innerHeight - 100) {
                item.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);
</script>
