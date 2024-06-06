import { Component, HostListener, OnDestroy, OnInit, QueryList, ViewChild, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalComponent } from './components/modal/modal.component';
import { DynamicComponentDirective } from './directives/dynamic-component.directive';
import { UtilitiesService } from './services/utilities.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'website';
  items = [...Array(100).keys()]
  private subscription!: Subscription;

  @ViewChild(DynamicComponentDirective) modal!: any

  constructor(
    private utilitiesService: UtilitiesService
  ) {}

  @HostListener('document:click', ['$event.target'])
  documentClick(eventTarget: any): void {
    this.utilitiesService.documentClickedTarget.next(eventTarget)
  }

   

  ngOnInit() {
    this.subscription = this.utilitiesService.clearViewContainer.subscribe({
      next: () => {
        if (!this.modal.viewContainerRef) return

        this.modal.viewContainerRef.clear()
      }
    })
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe()
  }

  onOpenModal() {
    if (!this.modal) {
      console.log('Error: modal not defined!')
      return
    }

    console.log(this.modal.viewContainerRef)

    const viewContainerRef = this.modal.viewContainerRef
    viewContainerRef.clear()
    viewContainerRef.createComponent(ModalComponent)
    // this.modal.clear()
    // this.modal.createComponent(ModalComponent)
  }
}
