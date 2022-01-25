import { environment } from './../../../environments/environment.prod';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EncurtadorService {
  constructor(private http: HttpClient) {}

  encurtarURL(url: string) {
    // chamada para encurtar uma url
    const parametros = new HttpParams().append('url', url);
    const urlRequisicao = `${environment.backend}/encurtar/`;
    return this.http.get(urlRequisicao, {
      params: parametros,
      responseType: 'text',
    });
  }
}
