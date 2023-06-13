
import { NgModule } from "@angular/core";
import { FocusBackDirective } from "./focus-back.directive";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [FocusBackDirective],
    imports: [CommonModule],
    exports: [FocusBackDirective]
})
export class FocusBackModule{}