import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoApiService} from './todo-api.service';
import {HttpClientModule} from '@angular/common/http';
import {LoaderComponent} from './loader/loader.component';

@NgModule({
  declarations: [LoaderComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ], providers: [
    TodoApiService
  ], exports: [
    LoaderComponent
  ]
})
export class SharedModule {

}

