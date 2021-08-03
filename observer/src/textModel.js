import Observer from './observer.js';

class TextModel extends Observer {
  constructor() {
    super();
    this.text = 'default text';
  }
  getText() {
    return this.text;
  }
  setText(text) {
    this.text = text; // 상태 변경
    this.notify(); // 등록된 렌더링 함수들 호출
  }
}

export default TextModel;
