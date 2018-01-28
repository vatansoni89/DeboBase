import { Component, Input, OnChanges } from "@angular/core";

@Component({
    selector: 'star-rating',
    templateUrl: './star.component.html',
    styleUrls:['./star.component.css']
})
export class star implements OnChanges {
    @Input() rating: number;
    starWidth: number;

    ngOnChanges(): void {
        this.starWidth = (86/5)*(this.rating);
    }



}