import { NgModule } from "@angular/core";
import { FocusTrapDirective } from "./focus-trap.directive";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [FocusTrapDirective],
    imports: [CommonModule],
    exports: [FocusTrapDirective]
})
export class FocusTrapModule{}