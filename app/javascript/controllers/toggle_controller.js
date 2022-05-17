import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "source", "hideable", "showable", "box" ]

  copy() {
    navigator.clipboard.writeText(this.sourceTarget.value)
  }

  hide() {
    this.hideableTarget.hidden = true
    this.showableTarget.hidden = false
  }

  highlight() {
    this.boxTarget.classList.add("bg-yellow")
  }
}
