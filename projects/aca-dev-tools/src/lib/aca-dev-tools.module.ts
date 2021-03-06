import { NgModule } from '@angular/core';
import { CodeEditorModule } from '@ngstack/code-editor';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AcaDevToolsComponent } from './aca-dev-tools.component';
import { CoreModule } from '@alfresco/adf-core';
import { ContentModule } from '@alfresco/adf-content-services';
import { ExtensionService } from '@alfresco/adf-extensions';

export function components() {
    return [
        AcaDevToolsComponent
    ];
}

@NgModule({
    imports: [
        FlexLayoutModule,
        CodeEditorModule.forChild(),
        CoreModule.forChild(),
        ContentModule.forChild()
    ],
    declarations: components(),
    exports: components(),
    entryComponents: components()
})
export class AcaDevToolsModule {
    constructor(extensions: ExtensionService) {
        extensions.setComponents({
            'dev.tools.component': AcaDevToolsComponent
        });
    }
}
