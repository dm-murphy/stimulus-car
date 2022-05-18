import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "source" ]

  warn() {
    let characters = this.sourceTarget.value.length
    if (characters > 15) {
      this.sourceTarget.classList.add("bg-orange")
    } if (characters > 20) {
      this.sourceTarget.classList.add("bg-orangered")
    } if (characters >=25) {
      this.sourceTarget.classList.add("bg-red")
    }
  }
}
