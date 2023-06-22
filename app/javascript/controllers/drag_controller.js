import { Controller } from "@hotwired/stimulus"
import Sortable from 'sortablejs';
import { FetchRequest } from '@rails/request.js';

export default class extends Controller {
  connect() {
    this.Sortable=Sortable.create(this.element,{onEnd:this.end.bind(this)});
    console.log("Hello, Stimulus!", this.element)
  }
  async end(event) {
        const id=event.item.dataset.id
        const url="http://127.0.0.1:3000/todos/move/"+id;
        const request = new FetchRequest('patch', url, { body: JSON.stringify({ position: event.newIndex }) })
        const response = await request.perform()
        if (response.ok) {
          const body = await response
        }
  }
  // oldIndex
  // newIndex
}
