import { Injectable } from '@angular/core';
import { GithubService } from './github.service';

@Injectable({
  providedIn: 'root'
})
export class DengodbService {

  constructor(private github: GithubService) { }

  SERVICO = {
    CAPS: 'CAPS',
    INDIVIDUAL: 'Terapia individual',
    GRUPO: 'Terapia de Grupo',
    FAMILIAR: 'Terapia Familiar',
    CONJUGAL: 'Terapia Conjugal',
    PROFISSIONAL: 'Orientação Profissional',
    LGBT: 'LGBT',
    DROGAS: 'Drogas',
    ONLINE: 'Online',
    PLANO: 'Planos de saúde - Psicologos',
    CRIANCAS_E_ADOLESCENTES: 'Crianças e adolescentes',
    MEDICAMENTOS: 'Medicamentos gratúitos',
    EMERGENCIA: 'Emergência Psiquiátrica',
  };

  public insert(value, file) {
    this.github.get(`/src/assets/data/${file}.json`).subscribe(data => {
      console.log('rawData', data);
      this.github.raw(file).subscribe(rawData => {
        console.log('rawData', rawData);
        let contents = rawData;
        contents.push(value);
        this.github.update(`/src/assets/data/${file}.json`, JSON.stringify(contents), data.sha)
      });
    });
  }

}
