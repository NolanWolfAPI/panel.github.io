import {Component, forwardRef, OnInit} from "@angular/core";
import {RoleService} from "../../../../services/role.service";
import {DropDownComponent} from "../dropdown/dropdown.component";
import {NG_VALUE_ACCESSOR} from "@angular/forms";

export const ROLE_DROPDOWN_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RoleDropDownComponent),
  multi: true
};

@Component ({
  selector: "role-dropdown",
  templateUrl: "../dropdown/dropdown.component.html",
  styleUrls: ["../dropdown/dropdown.component.scss"],
  providers: [ROLE_DROPDOWN_CONTROL_VALUE_ACCESSOR]
})
export class RoleDropDownComponent extends DropDownComponent implements OnInit{

  constructor(private roleService:RoleService){
    super()
  }

  ngOnInit() {
    this.roleService.getAll().subscribe(
      data => {
        let values = data.map(item => {return {value:item.id, key:item.name}});
        this.options = values;
      }
    )
  }
}
