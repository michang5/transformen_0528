$(function() {
	$('.nav-open').on("click", function (e) {
		e.preventDefault();

		$(this).toggleClass('nav-close');
	});
	
//	$('.nav-open').click(function (e) {      
//		e.preventDefault();
//		$('.navbar-default').addClass('gray-shadow')
//	});
	$(".btn-close").click(function () {
			$(".modal").hide();
		idleTime = 0;
	});
	
	var idleTime = 0;

		$(document).ready(function () {
			var idleInterval = setInterval(timerIncrement, 1000);
			$(this).mousemove(function (e) {
				idleTime = 0;
			});
			$(this).keypress(function (e) {
				idleTime = 0;
			});
		    $(".close").click(function () {
		        $(".sleepy-overlay").hide();
		        idleTime = 0;
		    });
			$('.sleepy-modal').click(function (event) {
				event.stopPropagation();
			});
		});

		function timerIncrement() {
			idleTime = idleTime + 1;
			if (idleTime > 1) {
				$('.sleepy-overlay').fadeIn('slow');
				idleTime = 0;
			}
		}
	
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


