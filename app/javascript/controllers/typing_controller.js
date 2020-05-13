import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "content" ]
  
  typein() {

    this.contentTarget.textContent = 'Hello, Stimulus!'

    let myTypeInput = document.querySelector('.keys').value;
    console.log(myTypeInput)
    
    // this.mytimeTarget.textContent = 'Hello, Stimulus!'
  }
}
