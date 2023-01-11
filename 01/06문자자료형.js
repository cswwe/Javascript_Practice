//데이터형 활용
//문자자료형 string
//let x;
//let y;
let x, y;
x = 7 + 5;
y = "7" + 5;
document.write(x + y + "<hr>"); //1275 출력 x=7+5=12 와 y의 "7(문자)", 5 가 출력된것
document.write(x + "<hr>"); //12 출력
document.write(y + "<hr>"); //75 출력 문자자료형 "7", 숫자자료형 5가 출력된것

//자바스크립트에서 표현식 작성시 문자는 따옴표"", 숫자는 안묶음
//자바스크립트에서는 태그도 문자열

const wakeup = "밥먹고 학교가라"; //wakeup 상수(const)선언
//대상.함수() -> 메서드 -> 임자있는 함수
//메서드(method)란 자바스크립트에서는 일반적으로 객체 안에 프로퍼티로 정의된 함수를 메서드라고 부른다.

document.write('<h1 style="color:green">' + wakeup + "</h1>");
//h1 초록글자 밥먹고학교가라 출력

//es6에 추가된 템플릿 리터럴
document.write(`<h1 style="color:green">${wakeup}</h1>`);
//위와 동일하게 h1 초록글자 밥먹고학교가라 출력
