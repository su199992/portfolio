const main = document.querySelector(".main");
new Pageable(main);

AOS.init();

// 범위 랜덤 함수(소수점 2자리까지)
const random = (min, max) => {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
};

const floatingObject = (selector, delay, size) => {
  //gsap.to(요소, 시간, 옵션);
  gsap.to(
    selector, // 선택자
    random(1.5, 2.5),
    {
      // 애니메이션 동작 시간
      // 옵션
      y: size,
      repeat: -1, // 무한 반복
      yoyo: true,
      ease: Power1.easeInOut,
      //ease: "power1.inOut"
      delay: random(0, delay),
    }
  );
};

floatingObject(".skill1", 1, 10);
floatingObject(".skill2", 0.5, 15);
floatingObject(".skill3", 2.5, 20);
floatingObject(".skill4", 0.5, 15);
floatingObject(".skill5", 2, 20);
floatingObject(".skill6", 1.5, 25);
