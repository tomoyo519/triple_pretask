import { useState, useEffect, useRef } from 'react'

const easeOutCirc = (x: number) => {
  return Math.sqrt(1 - Math.pow(x - 1, 2))
}
//easing 함수 시트에서 참고
//x는 0(움직임의 시작)에서 1(움직임의 끝) 사이의 움직임 진척도.
//math.pow base 에 exponent를 제곱한 값
//math sqrt 는  제곱근을 구는 식이다.

//린팅/포매팅 셋업 -> eslint 에서 참고 함 -> eslint 를 켜고 진행을 하니까, 변수명이나 import 순서, 함수명,
//까지 신경쓰게 되서 좋았다. 처음엔 조금 번거로웠지만 누군가에게 빠른 코드 이해가 될 거라고 생각했다.
//그리고 구조 정리에도 도움이 되었다. import 시에도 라이브러리, 외부 함수 순으로 챱챱 누락 없도록 진행 함.

const DURATION = 2000
//2초 동안

const useCountUp = (maximumNum: number, duration = DURATION) => {
  const [count, setCount] = useState(0)
  const requestRef = useRef(0)
  //특정 dom 선택하기
  // 리액트 컴포넌트는  내부 상태가 변할 때마다 다시 랜더링 된다.
  //useRef 함수는 current 속성을 가지고있는 객체를 반환하는데, 인자로 넘어온 초기값을 current 속성에 할당한다.
  //current 속성은 값을 변경해도 컴포넌트가 다시 랜더링 되지 않는다. - 다시 렌더링 되어도 동일한 참조값을 유지
  //react 컴포넌트가 다시 랜더링 될 때에도 이 current 속성 값이 유실되지 않는다.

  let startTime: number
  //변수 선언 후에 넘버 타입 설정

  const animate = (time: DOMHighResTimeStamp) => {
    //DOMHighResTimeStamp 는 double type 이며 밀리세컨즈 단위의 시간을 저장하기 위해 사용된다.
    //
    if (startTime === undefined) {
      startTime = time
    }

    const elapsedTime = time - startTime
    // 경과 시간
    const progress = easeOutCirc(elapsedTime / duration)

    if (elapsedTime <= duration) {
      setCount(() => {
        return progress * maximumNum
      })
    } else {
      return
    }

    requestRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(requestRef.current)
  }, [])

  return Math.round(count)
}

export default useCountUp
