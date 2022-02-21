import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { PokemonPagination } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'app-control-navigation',
  templateUrl: './control-navigation.component.html',
  styleUrls: ['./control-navigation.component.scss']
})
export class ControlNavigationComponent implements OnInit {

  @Input() limit: number  = 9

  @Input() total: number  = 0;

  @Input() offset: number = 0;

  @Output() change: EventEmitter<PokemonPagination> = new EventEmitter<PokemonPagination>()

  public page: number = 1;

  constructor() { }

  get totalPages(): number[] {
    return Array.from(new Array(Math.round(this.total / this.limit)).fill(1).keys(), (_, i) => i + 1);
  }

  ngOnInit(): void {
  }

  pageChange(currentPage: number){
    this.page = currentPage
    this.emitChanges()
  }

  emitChanges(){
    this.change.emit({
      offset: (this.page * this.limit) - this.limit,
      limit: this.limit
    })
  }

  next(){
    this.page = this.page + 1;
    this.emitChanges()
  }

  prev(){
    if(this.page == 1) return;

    this.page = this.page - 1;
    this.emitChanges()
  }

}
