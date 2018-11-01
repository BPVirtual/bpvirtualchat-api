import { get } from '@loopback/openapi-v3';
import * as fs from 'fs';
import * as path from 'path';
import { inject } from '@loopback/context';
import { RestBindings, Response } from '@loopback/rest';

export class UploadsProponentesPageController {
  private html: string;
  constructor(@inject(RestBindings.Http.RESPONSE) private response: Response) {
    this.html = fs.readFileSync(
      path.join(__dirname, '../../../public/uploads/proponentes.html'),
      'utf-8',
    );
  }

  @get('/uploads/proponentes', {
    responses: {
      '200': {
        description: 'Upload Proponentes Page',
        content: { 'text/html': { schema: { type: 'string' } } },
      },
    },
  })
  UploadsProponentesPage() {
    this.response
      .status(200)
      .contentType('html')
      .send(this.html);
    return this.response;
  }
}
