import { NgModule } from '@angular/core';
import { AcaMarkdownViewerComponent } from './aca-markdown-viewer.component';
import { ExtensionService } from '@alfresco/adf-extensions';

@NgModule({
  imports: [],
  declarations: [AcaMarkdownViewerComponent],
  exports: [AcaMarkdownViewerComponent],
  entryComponents: [AcaMarkdownViewerComponent]
})
export class AcaMarkdownViewerModule {
  constructor(extensions: ExtensionService) {
    extensions.setComponents({
      'aca.markdown.viewer.component': AcaMarkdownViewerComponent
    });
  }
}
