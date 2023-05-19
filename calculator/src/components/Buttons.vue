<script setup>
import { ref } from 'vue';

// classes
const containerClass = ref("buttons__container");
const numbersBtnClass = ref("number");
const funcsBtnClass = ref("funcs");
const equalsBtnClass = ref("equals");

// input
const props = defineProps({
  result: String,
  history: Array
})

// output
const emit = defineEmits(['response']);

function response(result, history) {
  emit('response', { result: result, history: history });  
}

function addNumber(result, history, key) {
  result === "0" || result === String(history[0])
    ? response(key, history)
    : response((result += key), history)
}

function addPoint(result, history, key) {
  response((result += key), history)
}

function addModule(result, history) {
  response(String((Number(result) * -1)), history)
}

function setPercent(result) {
  const newResult = String(Number(result) / 100);
  response(newResult, [].concat(newResult))
}

function calcFunc(key, firstNumb, secondNumb) {
  switch (key) {
    case "+":
      return String(Number(firstNumb) + Number(secondNumb));

    case "-":
      return String(Number(firstNumb) - Number(secondNumb));

    case "x":
      return String(Number(firstNumb) * Number(secondNumb));

    case "/":
      return String(Number(firstNumb) / Number(secondNumb));

    default:
      break;
  }
}

function setEquals(result, history, key) {
  let resultValue;

  switch (true) {
    case history.length === 0 || history[1] === key:
      response(result, [].concat(result, key))
      logger(result, result, history);
      break;

    case history.length === 2:
      resultValue = calcFunc(history[1], history[0], result);
      response(resultValue, [].concat(history, result, key))
      logger(resultValue, result, history);
      break;

    case history.length === 4:
      resultValue = calcFunc(history[1], history[2], result);
      response(resultValue, [].concat(result, history[1], history[2], key))
      logger(resultValue, result, history);
      break;

    default:
      break;
  }
}

function arithmeticFunc(result, history, key) {
  let resultValue;

  switch (true) {
    case history.length === 0 || history.length === 4 || history.length === 1:
      response(result, [].concat(result, key))
      break;

    case history.length === 2:
      resultValue = calcFunc(history[1], history[0], result);
      response(resultValue, [].concat(resultValue, key))
      logger(resultValue, result, history);
      break;

    default:
      break;
  }
}

function logger(resultValue, result, history) {
  const msg = `
    First operand: ${history[0] ? history[0] : result}
    Second operand: ${result ? result : ""}
    Operation: ${history[1] ? setOperation(history[1]) : "equals"}
    Result: ${resultValue}
    `;
  
  console.log(msg);
}

function setOperation(key) {
  switch (key) {
    case "+":
      return "add, '+'";

    case "-":
      return "subtract, '-'";

    case "/":
      return "divide, '/'";

    case "x":
      return "multiply, 'x'";

    default:
      break;
  }
}

function radical(result) {
  if (Number(result) !== 0) {
    response(String(Math.sqrt(Number(result), 2)), [].concat('√', '(', `${result}`, ')'));
  } else {
    response('0', [])
  }
}

function deleteElem(result, history) {
  result.length === 1 ? response('0', history) : response(result.slice(0, result.length - 1), history)
}

function sqr(result) {
  response(String(Math.pow(Number(result), 2)), [].concat('sqr', '(', `${result}`, ')'))
}

function oneDivideX(result) {
  if (Number(result) !== 0) {
    response(String(1 / Number(result)), [].concat('1/', '(', `${result}`, ')'));
  } else {
    response('0', [])
  }
}
</script>

<template>
  <div :class="containerClass">
          <button
          class="btn-app"
          :class="funcsBtnClass"
          type="button"
          @click="setPercent(result)"
          >
          %
        </button>
        <button
            class="btn-app"
            :class="funcsBtnClass"
            type="button"
            @click="() => response('0', history)">
          CE
        </button>
        <button
            class="btn-app"
            :class="funcsBtnClass"
            type="button"
            @click="() => response('0', [])">
          C
        </button>
        <button
            class="btn-app"
            :class="funcsBtnClass"
            type="button"
            @click="() => deleteElem(result, history)">
          Del
        </button>
        <button
            class="btn-app"
            :class="funcsBtnClass"
            type="button"
            @click="() => oneDivideX(result)">
          <sup>1</sup>/<sub>x</sub>
        </button>
        <button
            class="btn-app"
            :class="funcsBtnClass"
            type="button"
            @click="() => sqr(result)">
          x<sup>2</sup>
        </button>
        <button
            class="btn-app"
            :class="funcsBtnClass"
            type="button"
            @click="() => radical(result)">
          <sup>2</sup>&#8730;x
        </button>
        <button
            class="btn-app"
            :class="funcsBtnClass"
            type="button"
            @click="arithmeticFunc(result, history, '/')">
          &#247;
        </button>
        <button
            class="btn-app"
            :class="numbersBtnClass"
            type="button"
            @click="addNumber(result, history, '7')">
          7
        </button>
        <button
              class="btn-app"
              :class="numbersBtnClass"
              type="button"
              @click="addNumber(result, history, '8')">
          8
        </button>
        <button
              class="btn-app"
              :class="numbersBtnClass"
              type="button"
              @click="addNumber(result, history, '9')">
          9
        </button>
        <button
            class="btn-app"
            :class="funcsBtnClass"
            type="button"
            @click="arithmeticFunc(result, history, 'x')">
          x
        </button>
        <button
              class="btn-app"
              :class="numbersBtnClass"
              type="button"
              @click="addNumber(result, history, '4')">
          4
        </button>
        <button
              class="btn-app"
              :class="numbersBtnClass"
              type="button"
              @click="addNumber(result, history, '5')">
          5
        </button>
        <button
              class="btn-app"
              :class="numbersBtnClass"
              type="button"
              @click="addNumber(result, history, '6')">
          6
        </button>
        <button
            class="btn-app"
            :class="funcsBtnClass"
            type="button"
            @click="arithmeticFunc(result, history, '-')">
          -
        </button>
        <button
              class="btn-app"
              :class="numbersBtnClass"
              type="button"
              @click="addNumber(result, history, '1')">
          1
        </button>
        <button
              class="btn-app"
              :class="numbersBtnClass"
              type="button"
              @click="addNumber(result, history, '2')">
          2
        </button>
        <button
              class="btn-app"
              :class="numbersBtnClass"
              type="button"
              @click="addNumber(result, history, '3')">
          3
        </button>
        <button
            class="btn-app"
            :class="funcsBtnClass"
            type="button"
            @click="arithmeticFunc(result, history, '+')">
          +
        </button>
        <button
              class="btn-app"
              :class="numbersBtnClass"
              type="button"
              @click="addModule(result, history)">
          <sup>+</sup>/<sub>-</sub>
        </button>
        <button
              class="btn-app"
              :class="numbersBtnClass"
              type="button"
              @click="addNumber(result, history, '0')">
          0
        </button>
        <button
              class="btn-app"
              :class="numbersBtnClass"
              type="button"
              @click="addPoint(result, history, '.')">
          .
        </button>
        <button
              class="btn-app"
              :class="equalsBtnClass"
              type="button"
              @click="setEquals(result, history, '=')">
          =
        </button>
  </div>
</template>