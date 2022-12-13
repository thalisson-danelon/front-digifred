import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TableService } from './components/table-products.service';


export interface ProductData {
  id: string;
  title: string;
  price: string;
  brand: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'front-digifred';
  displayedColumn: string[] = ['id', 'title', 'price', 'brand'];
  dataSource!: MatTableDataSource<ProductData>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  posts: any;
  error: any;


  constructor(private service: TableService) {
    this.service.getData().subscribe({
      next: (data) => {
        console.log(data.products);
        this.posts = data.products;

        this.dataSource = new MatTableDataSource(this.posts);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
  });
  }

  applyFilter(event: Event) {
    const filtrarValor = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtrarValor.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
