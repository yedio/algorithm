/*
유형: 스택/큐
문제: https://school.programmers.co.kr/learn/courses/30/lessons/42587
날짜: 22.09.26

[매개변수]

[return]

[조건]
*/

function solution(priorities, location) {
  const arr = priorities.map((priority, index) => {
    return [priority, location === index ? 1 : 0];
  });
  const newArr = [];

  for (let i = 0; i < priorities.length; i++) {
    const [first, firstLo] = arr[0];
    arr.shift();
    console.log('arr', arr);

    const find = arr.some(e => first < e[0]);

    if (find) {
      newArr.push([first, firstLo]);
      break;
    } else {
    }
  }
  console.log('firstNum++', arr);
  console.log('first', newArr);
  return [];
}

const arr = [2, 1, 3, 2];
const num = 2; // 1

// const priorities = [1, 1, 9, 1, 1, 1];
// const location = 0; // 5

console.log('*RESULT*', solution(arr, num));
