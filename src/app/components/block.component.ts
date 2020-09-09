import { Component } from "@angular/core";

@Component({
    selector: 'block-app',
    templateUrl: './block.component.html',
    styleUrls: ['./block.component.css']
})
export class BlockApp {
    title:string = "block";

    nom:string = "Bob";    
    imageSrc:string = "../../assets/img/A8FAIns.png";

    show:boolean = true;
    hidden:boolean = false;
    visibility:string = "visible";

    toggleShow = () => {
        this.show = !this.show;
    }

    toggleHidden = () => {
        this.hidden = !this.hidden;
    }

    toggleVisible = () => {
        this.visibility = this.visibility == "visible" ? "hidden" : "visible"; 
    }

    isColor:boolean = false;

    isThisIngredientVital:boolean = true;

    displayGuestList:boolean = true;

    songList:string[] = ['Enrique Iglesias', 'Céline Dion', 'Maitre Gims'];
}