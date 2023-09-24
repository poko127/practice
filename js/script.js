//link
jQuery('a[href^="#"]').on('click', function () {
  var id = jQuery(this).attr('href');
  var position = 0;
  if (id != '#') {
    position = jQuery(id).offset().top;
  }
  var headerHeight = jQuery('.header').innerHeight();
  var scrollOffset = 16; // 16pxのオフセットを追加
  jQuery('html, body').animate({
    scrollTop: position - headerHeight - scrollOffset
  }, 300);
});

//drawer
jQuery('.drawerIcon, .drawerClose, .drawer__bg').on('click', function (e) {
  e.preventDefault();
  jQuery('.drawer__bg').toggleClass('is-active')
  jQuery('.drawer__body').toggleClass('is-active')
  return false;
});
// メニュー（a[href^="#"]）をクリックしたときの処理
jQuery('.drawer__link,.drawer__logo-link').on('click', function () {
  jQuery('.drawer__bg').removeClass('is-active'); // メニューをクリックしたらハンバーガーメニューを閉じる
  jQuery('.drawer__body').removeClass('is-active');
});

//loading
window.addEventListener('load', function () {
  gsap.timeline()
    .to('.loading img', { autoAlpha: 0, scale: 1.2, delay: .5 })
    .to('.loading', { autoAlpha: 0 })
})



//eSTUIOスライダー
const aboutSplide = new Splide(".about__splide", {
  autoplay: true, // 自動再生
  type: "fade", // ループ
  rewind: true, // スライダーの終わりまで行ったら先頭に巻き戻す（デフォルトはfalse）
  pauseOnHover: false, // カーソルが乗ってもスクロールを停止させない
  pauseOnFocus: false, // 矢印をクリックしてもスクロールを停止させない
  interval: 3000, // 自動再生の間隔
  speed: 1000, // スライダーの移動時間
}).mount();


//支援員からのメッセージ
const programSplide = new Splide(".program__splide", {
  // autoplay: true, // 自動再生
  type: "loop", // ループ
  pauseOnHover: false,
  pauseOnFocus: false,
  interval: 3000,
  speed: 1000,
}).mount()

//アコーディオン
$(document).ready(function () {
  $('.voice__accordion-header').click(function () {
    var accordionBody = $(this).next('.voice__accordion-body');
    var toggleText = $(this).find('.toggle-text');
    $(this).toggleClass('is-active');
    accordionBody.slideToggle(200);
    if (toggleText.text() === '詳しく見る') {
      toggleText.text('閉じる');
    } else {
      toggleText.text('詳しく見る');
    }
  });
});

//追従cta
document.addEventListener('DOMContentLoaded', function () {
  const mm = gsap.matchMedia();
  mm.add('(max-width:1024px)', () => {
    gsap.fromTo('.cta__box-bottom', { autoAlpha: 0 }, {
      autoAlpha: 1, duration: .1, scrollTrigger: {
        trigger: '.cta--top',
        start: 'bottom top',
        toggleActions: 'play none none reverse'
    }})
  })
})

//fadeIn
CustomEase.create("custom", "0.165, 0.84, 0.44, 1")
gsap.utils.toArray('.js-fadeIn').forEach((target) => {
  gsap.fromTo(target, { autoAlpha: 0, y:25 }, {
    autoAlpha: 1, y:0,duration:.8, ease: 'custom', scrollTrigger: {
      trigger: target,
      start: 'top 80%'
    }
  });

})
gsap.utils.toArray('.js-fadeIns').forEach((element) => {
  let target = element.querySelectorAll(':scope > *');
  gsap.fromTo(target, { autoAlpha: 0, y:25 }, {
    autoAlpha: 1, y:0,duration:.8, ease: 'custom', stagger: .05, scrollTrigger: {
      trigger: target,
      start: 'top 80%'
    }
  });
})

//parallax
gsap.set('.parallax__img',{xPercent:-50,yPercent:-50})
gsap.utils.toArray('.parallax').forEach((target) => {
  let img = target.querySelector('.parallax__img')
  gsap.fromTo(img, { y: 20 }, {
    y: -20, ease: 'none', scrollTrigger: {
      trigger: target,
      start: 'top bottom',
      end: 'top top',
      scrub: 1
    }
  });
})
