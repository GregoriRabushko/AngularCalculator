import { Injectable } from '@angular/core';

@Injectable()
export class CalculatorService {

  constructor() { }

  calculate(inputString: string):number {
    return calculateCharsArrayWithBrackets(inputString.split(''));
  }
}

function calculateCharsArrayWithBrackets(charsArray: string[] = [], returnOnCloseBracket = false): number {
  const expressionArray: string[] = [];

  let countOfOpenedBrackets = 0; // количество открытых скобок
  for (let currentIndex = 0; currentIndex < charsArray.length; currentIndex++) {
    const char = charsArray[currentIndex];
    switch (char) {
      case ('('):
        countOfOpenedBrackets++;
        returnOnCloseBracket = false;
        if (countOfOpenedBrackets === 1) {
          expressionArray.push(
            calculateCharsArrayWithBrackets(charsArray.slice(currentIndex + 1, charsArray.length), true)
              .toString()
          );
        }
        break;
      case (')'):
        if (countOfOpenedBrackets === 0 && returnOnCloseBracket) {
          return calculateCharsArrayWithoutBrackets(expressionArray);
        }
        if (countOfOpenedBrackets > 0) {
          countOfOpenedBrackets--;
          if (countOfOpenedBrackets === 0) {
            returnOnCloseBracket = true;
          }
        }
        break;
      default:
        if (countOfOpenedBrackets === 0) {
          expressionArray.push(char);
        }
        break;
    }
  }

  return calculateCharsArrayWithoutBrackets(expressionArray);
}

function calculateCharsArrayWithoutBrackets(charsArray: string[] = []):number {
  const arrayLength = charsArray.length;
  if (arrayLength === 0) {
    return NaN;
  }


  // спросить про число которое эта функции возвращает в return, почему 0 индекс а не 1
  if (arrayLength === 1 && !isNaN(Number(charsArray[0]))) {
    return Number(charsArray[0]);
  }

  const argumentsArray = [];
  const operators = [];

  let lastWas = '';
  for (let currentIndex = 0; currentIndex < charsArray.length; currentIndex++) {
    const char = charsArray[currentIndex];
    const charIsNumber = !isNaN(Number(char));
    if (charIsNumber) {
      if (lastWas === 'argument') {
        argumentsArray[argumentsArray.length - 1] += char //делает слияние последнего и текущего эелемента
      }

      if (lastWas === 'operator' || lastWas === '') {
        argumentsArray[argumentsArray.length] = char;
        lastWas = 'argument';
      }
    } else {
      if (lastWas === 'argument') {
        operators[operators.length] = char; //добавляет в конец массива новый элемент
        lastWas = 'operator';
        continue;
      }

      if (char === '-' && (lastWas === 'operator' || lastWas === '')) {
        argumentsArray[argumentsArray.length] = char;
        lastWas = 'argument';
        continue;
      }

      return NaN;
    }
  }

  if (lastWas === 'operator') {
    return NaN;
  }

  return calculateArraysOfArgumentsAndOperators(argumentsArray, operators);
}

function calculateTwoNumbers(first:string, second:string, operator:string):number {
  switch (operator) {
    case '+':
      return Number(first) + Number(second);
    case '-':
      return Number(first) - Number(second);
    case '*':
      return Number(first) * Number(second);
    case '/':
      return Number(first) / Number(second);
    default:
      return NaN;
  }
}

function positionOfPrioritisedOperator(first:string|undefined, second:string|undefined):number {
  if (first === '*' || first === '/') return 1;
  if (second === '*' || second === '/') return 2;
  return 1;
}

function calculateArraysOfArgumentsAndOperators(incomingArguments:string[] = [], operators:string[] = []):number {
  if (operators.length === 0 && (incomingArguments.length === 0 || incomingArguments.length > 1)) {
    return NaN;
  }

  if (incomingArguments.length === 1 && operators.length === 0) {
    return Number(incomingArguments[0]);
  }

  if (incomingArguments.length - operators.length === 1) {
    const reverseArguments = incomingArguments.reverse(); //зачем по сто раз переворачивать массив , делао в производительности ?
    const reverseOperators = operators.reverse();

    let firstArgument = reverseArguments.pop(); // извлекакет элемент с конца
    let secondArgument = reverseArguments.pop();
    let firstOperator = reverseOperators.pop();
    let secondOperator = reverseOperators.pop();

    while (firstArgument && secondArgument) {
      if (positionOfPrioritisedOperator(firstOperator, secondOperator) === 1) {
        if (firstOperator) {
          firstArgument = calculateTwoNumbers(firstArgument, secondArgument, firstOperator).toString();
          secondArgument = reverseArguments.pop();
          firstOperator = secondOperator;
          secondOperator = reverseOperators.pop();
        }
      } else {
        const thirdArgument = reverseArguments.pop();
        if (thirdArgument && secondOperator) {
          secondArgument = calculateTwoNumbers(secondArgument, thirdArgument, secondOperator).toString();
          secondOperator = reverseOperators.pop();
        }
      }
    }

    return Number(firstArgument);
  }

  return NaN
}
