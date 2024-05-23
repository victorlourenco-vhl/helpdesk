import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCard } from '@angular/material/card';
import { Tecnico } from 'src/app/models/tecnico';

@Component({
  selector: 'app-tecnico-list',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatCard],
  templateUrl: './tecnico-list.component.html',
  styleUrl: './tecnico-list.component.css'
})
export class TecnicoListComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'nome', 'cpf', 'email', 'senha'];
  dataSource = new MatTableDataSource<Tecnico>(tecnicos);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

const tecnicos: Tecnico[] = [
  { id: "1", nome: "Carlos Silva", cpf: "123.456.789-00", email: "carlos.silva@example.com", senha: "senha123" },
  { id: "2", nome: "Ana Souza", cpf: "234.567.890-11", email: "ana.souza@example.com", senha: "senha123" },
  { id: "3", nome: "Pedro Oliveira", cpf: "345.678.901-22", email: "pedro.oliveira@example.com", senha: "senha123" },
  { id: "4", nome: "Mariana Lima", cpf: "456.789.012-33", email: "mariana.lima@example.com", senha: "senha123" },
  { id: "5", nome: "Lucas Pereira", cpf: "567.890.123-44", email: "lucas.pereira@example.com", senha: "senha123" },
  { id: "6", nome: "Juliana Santos", cpf: "678.901.234-55", email: "juliana.santos@example.com", senha: "senha123" },
  { id: "7", nome: "Rafael Almeida", cpf: "789.012.345-66", email: "rafael.almeida@example.com", senha: "senha123" },
  { id: "8", nome: "Fernanda Costa", cpf: "890.123.456-77", email: "fernanda.costa@example.com", senha: "senha123" },
  { id: "9", nome: "Bruno Rodrigues", cpf: "901.234.567-88", email: "bruno.rodrigues@example.com", senha: "senha123" },
  { id: "10", nome: "Patrícia Moreira", cpf: "012.345.678-99", email: "patricia.moreira@example.com", senha: "senha123" },
  { id: "11", nome: "Thiago Ferreira", cpf: "123.456.789-10", email: "thiago.ferreira@example.com", senha: "senha123" },
  { id: "12", nome: "Gabriela Martins", cpf: "234.567.890-21", email: "gabriela.martins@example.com", senha: "senha123" },
  { id: "13", nome: "Rodrigo Mendes", cpf: "345.678.901-32", email: "rodrigo.mendes@example.com", senha: "senha123" },
  { id: "14", nome: "Laura Ribeiro", cpf: "456.789.012-43", email: "laura.ribeiro@example.com", senha: "senha123" },
  { id: "15", nome: "Marcelo Carvalho", cpf: "567.890.123-54", email: "marcelo.carvalho@example.com", senha: "senha123" },
  { id: "16", nome: "Renata Azevedo", cpf: "678.901.234-65", email: "renata.azevedo@example.com", senha: "senha123" },
  { id: "17", nome: "Gustavo Dias", cpf: "789.012.345-76", email: "gustavo.dias@example.com", senha: "senha123" },
  { id: "18", nome: "Isabela Gomes", cpf: "890.123.456-87", email: "isabela.gomes@example.com", senha: "senha123" },
  { id: "19", nome: "Felipe Teixeira", cpf: "901.234.567-98", email: "felipe.teixeira@example.com", senha: "senha123" },
  { id: "20", nome: "Camila Barros", cpf: "012.345.678-09", email: "camila.barros@example.com", senha: "senha123" },
  { id: "21", nome: "Ricardo Pinto", cpf: "123.456.789-20", email: "ricardo.pinto@example.com", senha: "senha123" },
  { id: "22", nome: "Débora Rocha", cpf: "234.567.890-31", email: "debora.rocha@example.com", senha: "senha123" },
  { id: "23", nome: "André Lopes", cpf: "345.678.901-42", email: "andre.lopes@example.com", senha: "senha123" },
  { id: "24", nome: "Sabrina Freitas", cpf: "456.789.012-53", email: "sabrina.freitas@example.com", senha: "senha123" },
  { id: "25", nome: "Vinícius Vieira", cpf: "567.890.123-64", email: "vinicius.vieira@example.com", senha: "senha123" },
  { id: "26", nome: "Alessandra Castro", cpf: "678.901.234-75", email: "alessandra.castro@example.com", senha: "senha123" },
  { id: "27", nome: "Fernando Monteiro", cpf: "789.012.345-86", email: "fernando.monteiro@example.com", senha: "senha123" },
  { id: "28", nome: "Aline Cardoso", cpf: "890.123.456-97", email: "aline.cardoso@example.com", senha: "senha123" },
  { id: "29", nome: "Daniel Santana", cpf: "901.234.567-08", email: "daniel.santana@example.com", senha: "senha123" },
  { id: "30", nome: "Letícia Reis", cpf: "012.345.678-19", email: "leticia.reis@example.com", senha: "senha123" },
];