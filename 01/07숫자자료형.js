let a = 100; //NaN Not a Number 숫자가 아님
a = a + 10; //  a 재선언 현재의a= 이전의a(100) + 10 이므로= 110
document.write(`${a}<br>`); //110 출력
a = a / 10; // 현재의 a= 이전의a(110)/10이므로 = 11
document.write(`${a}<br>`); //11출력
document.write(`a-10=${a - 10}<br>a*10=${a*10}`);
              //a-10=1 출력  <줄바꿈>  a*10=110 출력
