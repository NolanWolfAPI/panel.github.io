import {Component, forwardRef, OnInit} from "@angular/core";
import {DropDownComponent} from "../../shared/form/dropdown/dropdown.component";
import {NG_VALUE_ACCESSOR} from "@angular/forms";
import {LanguageService} from "../language.service";

export const LANGUAGE_DROPDOWN_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => LanguageDropDownComponent),
  multi: true
};

@Component ({
  selector: "language-dropdown",
  templateUrl: "../../shared/form/dropdown/dropdown.component.html",
  styleUrls: ["../../shared/form/dropdown/dropdown.component.scss"],
  providers: [LANGUAGE_DROPDOWN_CONTROL_VALUE_ACCESSOR]
})
export class LanguageDropDownComponent extends DropDownComponent implements OnInit{

  constructor(private languageService:LanguageService){
    super()
  }

  ngOnInit() {
    this.languageService.getAll().subscribe(
      data => {
        let values = data.map(item => {return {value:item.languageCode, key:item.name}});
        this.options = values;
      }
    )
  }
}
