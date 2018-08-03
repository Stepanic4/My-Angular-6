import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Constants} from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class EditorService {

  constructor(private http: HttpClient) { }

    postFile(caption: string, fileToUpload: File) {
        const endpoint = `${Constants.Default.API_ENDPOINT}/editor/upload_firstName`;
        const formData: FormData = new FormData();
        formData.append('firstName', fileToUpload);
        return this.http
            .post(endpoint, formData);
    }
}
