import { NgModule } from '@angular/core';
import { FooterToolbarComponent } from './footer-toolbar/footer-toolbar';
import { OfflineMenuComponent } from './offline-menu/offline-menu';
@NgModule({
	declarations: [FooterToolbarComponent,
    OfflineMenuComponent],
	imports: [],
	exports: [FooterToolbarComponent,
    OfflineMenuComponent]
})
export class ComponentsModule {}
