import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { MinimalNodeEntryEntity } from 'alfresco-js-api';
import { AlfrescoApiService } from '@alfresco/adf-core';
import { Converter } from 'showdown';

@Component({
  selector: 'aca-markdown-view',
  template: `
    <div class="content" [innerHTML]="content"></div>
  `,
  styleUrls: ['aca-markdown-viewer.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: { class: 'aca-markdown-view' }
})
export class AcaMarkdownViewerComponent implements OnInit {
  @Input()
  url: string;

  @Input()
  node: MinimalNodeEntryEntity;

  content: string = null;

  constructor(private apiService: AlfrescoApiService) {}

  ngOnInit() {
    this.apiService.nodesApi.getFileContent(this.node.id).then(
      result => {
        const converter = new Converter({
          tables: true,
          ghCodeBlocks: true,
          ghCompatibleHeaderId: true,
          simplifiedAutoLink: true
        });
        converter.setOption('metadata', true);
        converter.setFlavor('github');

        const html = converter.makeHtml(result);
        this.content = html;
      },
      err => console.log(err)
    );
  }
}
