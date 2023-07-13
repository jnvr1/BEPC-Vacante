export class FileUpload {
  key!: string;
  name!: string;
  url!: string;
  file: File;
static url: any;

  constructor(file: File) {
    this.file = file;
  }
}
