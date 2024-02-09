
class Calculator {
    constructor(displayElement) { // 생성자. Calculator 객체 초기화
        this.displayElement = displayElement
        this.operatorCheck  = true // 연산자 입력 여부. 숫자가 입력되면 false로 변경
        this.equalsCheck = false // 이전에 = 버튼을 눌렀는지 여부(눌렀으면 true)
        this.clear() // 생성 시에는 clear 호출하여 디스플레이 초기화
    }

    appendNumber(number){ // 숫자 입력할 때 호출
        if (this.equalsCheck){ // 처음엔 false
            this.displayContent = number // 마지막 입력이 =라면 새로운 식 입력
            this.equalsCheck = false // 버튼 클릭 여부 관리
        } else {
            this.displayContent += number // 마지막 입력이 =가 아니라면 숫자 추가
        }
        this.operatorCheck = false // 숫자 입력시 false로 변경
    }

    appendOperator(operator){ // 연산자 입력할 때 호출
        if (this.operatorCheck) return false // 숫자 입력 전에는 false
        if (this.equalsCheck) this.equalsCheck = false // 새로운 식 입력을 알림
        this.displayContent += operator
        return this.operatorCheck = true // 숫자가 입력되기 전 연산자 입력방지
    }

    updateDisplay() { // 숫자가 연산자를 입력할 때마다 호출되어 화면 업데이트
        this.displayElement.value = this.displayContent
    }

    clear() {
        this.displayContent = ''
        this.displayElement.value = 0
        this.operatorCheck = true
    }

    compute() { // = 버튼 클릭시 호출
        if (this.operatorCheck) return
        this.displayContent = eval(this.displayContent
            .replace('\u00D7', '*') // 유니코드 분자를 연산자로 변경
            .replace('\u00F7', '/')
        )
        this.equalsCheck = true
    }
}

const buttons = document.querySelectorAll('button')
const displayElement = document.querySelector(".zero input"); // 클래스 'zero'를 가진 div 내부의 input 요소를 선택


const calculator = new Calculator(displayElement)

// 버튼에 클릭 이벤트 리스너 추가
// 버튼의 data-type 속성에 따라 적절한 메소드 호출
buttons.forEach(button => {
    button.addEventListener('click', () => {
        switch (button.dataset.type) {
            case 'operator':
                // appendOperator가 true를 반환하면 updateDisplay 호출
                if (calculator.appendOperator(button.innerText)) {
                    calculator.updateDisplay()
                }                                            
                break
            case 'ac':
                calculator.clear()
                break
            case 'equals':
                calculator.compute()
                calculator.updateDisplay()
                break
            default:
                calculator.appendNumber(button.innerText)
                calculator.updateDisplay()
                break
        }
    })      
})