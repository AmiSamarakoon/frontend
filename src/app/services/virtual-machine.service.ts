import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VirtualMachine } from '../class/virtual-machine';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VirtualMachineService {

  private baseURL ="http://localhost:8080/api/virtualMachines";

  constructor(private httpClient: HttpClient) { }

  addVirtualMachine(virtualMachine:VirtualMachine):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, virtualMachine);
  }

  getVirtualMachineList():Observable<VirtualMachine[]>{
    return this.httpClient.get<VirtualMachine[]>(`${this.baseURL}`)
  }

  getVirtualMachinebyId( virtualMachineId: number):Observable<VirtualMachine>{
    return this.httpClient.get<VirtualMachine>(`${this.baseURL}/${virtualMachineId}`)
  }




}
