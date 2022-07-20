export const FadeInItems = (isMounted = false, delay = 0) => `
  opacity: ${isMounted ? 1 : 0};
  transform: translateY(${isMounted ? '0' : '10px'});
  transition: all 700ms ease-out ${delay}ms;
  `

//transition 은 css property 가 변할 때, 값의 변화가 일정 시간에 걸쳐 일어나도록
//하는 것이다.
//css 표시 변화를 부드럽게 하기 위해 애니메이션 속도를 조절한다.
//ease-out : ease 옵션 중 하나로 베지에 곡선이라고 한다. 보통-천천
//일정한 속도의 등속으로 시작해서 점점 느려지면서 종료한다.
//(끝에가 천천히 올라가야 되므로)

//transition-property : 대상이 되는 프로퍼티 지정
// duration : 트랜지션이 일어나는 지속시간 지정
//timing-function : 효과를 위한 수치함수 지정
//delay : 프로퍼티가 변화한 시점과 트랜지션이 실제로 시작하는 사이에 대기하는 시간을 지정
//transition 축약 표현 가능
