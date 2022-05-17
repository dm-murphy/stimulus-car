import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "source", "hideable", "showable" ]

  copy() {
    navigator.clipboard.writeText(this.sourceTarget.value)
  }

  hide() {
    this.hideableTarget.hidden = true
    this.showableTarget.hidden = false
  }
}
