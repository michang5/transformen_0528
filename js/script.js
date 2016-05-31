$(function() {
	$('.nav-open').on("click", function (e) {
		e.preventDefault();

		$(this).toggleClass('nav-close');
	});
	
//	$('.nav-open').click(function (e) {      
//		e.preventDefault();
//		$('.navbar-default').addClass('gray-shadow')
//	});
	
});

let videoCover = selector => {
    if ('objectFit' in document.documentElement.style) return

    let $elements = typeof selector === "string"
                    ? document.querySelectorAll(selector)
                    : selector

    $elements = Array.from($elements)

    let cover = () => {
        $elements.forEach(el => {
            let videoRatio = el.videoWidth / el.videoHeight
            let viewportRatio = window.innerWidth / window.innerHeight

            el.style.width  = viewportRatio >= videoRatio ? '100%' : ''
            el.style.height = viewportRatio <= videoRatio ? '100%' : ''
        })
    }

    $elements.forEach(el => {
        el.parentElement.style.overflow = 'hidden'
        el.classList.add('js-polyfill-fit--cover')
        el.onloadeddata = cover
    })

    window.addEventListener('resize', cover)
}

videoCover('.u-fit--cover')
