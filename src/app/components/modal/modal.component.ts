import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {

  private subscription!: Subscription
  private outsideClickCount = 0;

  @ViewChild('modal', { read: ElementRef, static: false}) modal!: ElementRef

  constructor(
    private utilitiesService: UtilitiesService
  ) { }

  ngOnInit(): void {
    this.subscription = this.utilitiesService.documentClickedTarget.subscribe({
      next: (target: HTMLElement) => {
        if (this.modal.nativeElement.contains(target)) {
          console.log('clicked inside')
        } else {
          this.outsideClickCount += 1;
          if (this.outsideClickCount < 2) return
          this.utilitiesService.clearViewContainer.next();
        }
      }
    })
  }

  ngOnDestroy(): void {
      if (!this.subscription) return
      this.subscription.unsubscribe()
  }

}
