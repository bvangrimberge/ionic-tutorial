import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SqlLiteTestPage } from './sql-lite-test';

@NgModule({
  declarations: [
    SqlLiteTestPage,
  ],
  imports: [
    IonicPageModule.forChild(SqlLiteTestPage),
  ],
})
export class SqlLiteTestPageModule {}
