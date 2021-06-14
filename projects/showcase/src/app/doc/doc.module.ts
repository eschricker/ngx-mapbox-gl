import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule, Routes } from '@angular/router';
import 'prismjs/components/prism-typescript';
import 'prismjs/prism';
import { LayoutModule } from '../shared/layout/layout.module';
import { DocComponent } from './doc.component';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';

const DOC_ROUTES: Routes = [
  {
    path: '',
    component: DocComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DOC_ROUTES),
    FormsModule,

    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),

    MatFormFieldModule,
    MatSelectModule,

    LayoutModule,
  ],
  declarations: [DocComponent],
})
export class DocModule {}
