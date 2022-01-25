import { environment } from './../../environments/environment';
import { EncurtadorService } from './services/encurtador.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-encurtador',
  templateUrl: './encurtador.component.html',
  styleUrls: ['./encurtador.component.scss'],
})
export class EncurtadorComponent implements OnInit {
  formGroup = new FormGroup({
    url: new FormControl(null, Validators.required),
  });
  backend: string = environment.backend + '/';
  urlEncurtada: string = '';

  constructor(
    private encurtadorService: EncurtadorService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log(this.router.url);
  }

  validarBotao() {
    // retorna se o campo da url e diferente de nulo
    return this.formGroup.valid;
  }

  encurtar() {
    this.urlEncurtada = '';
    // faz a chamada para o servico de encurtar a url, e com o resultado monta a url gerada
    this.encurtadorService
      .encurtarURL(this.formGroup.get('url')?.value)
      .subscribe((resp) => {
        this.urlEncurtada = this.backend + resp;
      });
  }
}
