import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { VirtualMachine } from '../class/virtual-machine';
import { VirtualMachineService } from '../services/virtual-machine.service';
import {SortRequestVirtualMachines} from '../class/sort-request-virtual-machines';

@Component({
  selector: 'app-virtual-machine-list',
  templateUrl: './virtual-machine-list.component.html',
  styleUrls: ['./virtual-machine-list.component.css']
})
export class VirtualMachineListComponent implements OnInit {

  filterForm: FormGroup;
  product?: String;
  version?: String;
  region?: String;

  requestBody: SortRequestVirtualMachines;
  virtualMachines: any;
  sortedVirtualMachines: SortRequestVirtualMachines = new SortRequestVirtualMachines();

  constructor(private virtualMachineService:VirtualMachineService) { }

  ngOnInit(): void {
    this.getVirtualMachines();
  }
  private getVirtualMachines(){
    this.virtualMachineService.getVirtualMachineList().subscribe(data=>{
      this.virtualMachines = data;
    })
  }

  onSubmit() {
    this.requestBody= {
      product:this.product,
      version:this.version,
      region:this.region
    };

    console.log(this.requestBody);
    this.virtualMachineService.getSortedVirtualMachines(this.requestBody).subscribe(data => {
      this.virtualMachines = [];
      this.virtualMachines = data;
    })

  }

}
