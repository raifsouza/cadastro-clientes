
import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../client.service';

import { Message } from 'primeng/api';
@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css'],
  providers: []
})
export class ClientListComponent implements OnInit {
  clients$ = this.clientService.getClients();
  messages: Message[] | undefined;
  totalClients: number = 0;
  displayedClients: number = 0;

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.clients$.subscribe(clients => {
      this.totalClients = clients.length;
      this.displayedClients = this.totalClients;
    });
  }

  formatCnpj(cnpj: string): string {
    return cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
  }

  formattedCnpj(client: any): string {
    return this.formatCnpj(client.cnpj || '');
  }

}