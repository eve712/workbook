class ChangeTextBtn {
  constructor({ model }) {
    this.$target = document.createElement('div');
    this.textModel = model;
    this.render();
    this.$target.addEventListener('click', this.handleClick.bind(this));
  }
  render() {
    this.$target.innerHTML = `
        <input type="text" />
        <button>text 변경!</button>
      `;
  }
  handleClick({ target }) {
    if (target.tagName !== 'BUTTON') return;
    const input = this.$target.querySelector('input');
    this.textModel.setText(input.value); // 상태 변경
    input.value = '';
  }
}

export default ChangeTextBtn;
