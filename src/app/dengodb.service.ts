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


  row = {
    nome: 'NOVOOOOOO CVV - Centro de Valorização da Vida',
    end: 'Apenas online em Salvador',
    tel: '188',
    valor: 'Gratuito',
    servicos: [this.SERVICO.INDIVIDUAL, this.SERVICO.ONLINE],
    descricao_servicos:
      'O CVV – Centro de Valorização da Vida realiza apoio emocional e prevenção do suicídio, atendendo voluntária e gratuitamente todas as pessoas que querem e precisam conversar, sob total sigilo por telefone, email e chat 24 horas todos os dias.',
  }


  public insert(value){
    this.Estabelecimento.push(this.row)
    this.github.set('/data', JSON.stringify(this.Estabelecimento))
  }

  
  Estabelecimento = [
    {
      video:
        '<iframe width="100%" height="315" src="https://www.youtube.com/embed/1rNueM-JqCQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
      servicos: [this.SERVICO.CAPS]
    },
    {
      nome: 'CVV - Centro de Valorização da Vida',
      end: 'Apenas online em Salvador',
      tel: '188',
      valor: 'Gratuito',
      servicos: [this.SERVICO.INDIVIDUAL, this.SERVICO.ONLINE],
      descricao_servicos:
        'O CVV – Centro de Valorização da Vida realiza apoio emocional e prevenção do suicídio, atendendo voluntária e gratuitamente todas as pessoas que querem e precisam conversar, sob total sigilo por telefone, email e chat 24 horas todos os dias.',
    },
    {
      nome: 'COFAM - Centro de  Orientação Familiar.',
      end:
        'Av.  Joana  Angélica,  n°124,  Nazaré  (Próximo  ao  colégio  central  e  curso opção).',
      tel: '3242-5959',
      valor:
        'Acordado  entre  terapeuta  e  atendido  de  acordo  com  condição socioeconômica  do  mesmo',
      servicos: [this.SERVICO.INDIVIDUAL, this.SERVICO.GRUPO, this.SERVICO.FAMILIAR, this.SERVICO.CRIANCAS_E_ADOLESCENTES],
      descricao_servicos:
        'Psicoterapia  de  família,  casal,  adolescente,  individual e  em  grupo.',
      mapa:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.861241087727!2d-38.51263624930484!3d-12.980725563465388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71604eb76dc1d9b%3A0x8d29f926c01e5948!2sAv.+Joana+Ang%C3%A9lica%2C+124+-+Nazar%C3%A9%2C+Salvador+-+BA%2C+40050-003!5e0!3m2!1spt-BR!2sbr!4v1531318273919" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
    },
    {
      nome: 'CEFAC - Centro de  Estudos  de  Família  e  Casal',
      end: 'Parque  Lucaia,  n  281,  Edf.  WM,  Sala  404,  Horto  Florestal.',
      tel: '3022-3149',
      valor: 'Triagem  gratuita. Valor  do  atendimento  gratuito ou negociado.',
      servicos: [this.SERVICO.INDIVIDUAL, this.SERVICO.GRUPO, this.SERVICO.CONJUGAL, this.SERVICO.FAMILIAR],
      descricao_servicos: 'Às terças-feiras das 8h às 12h. Psicoterapia  individual, de  família  e  casal.',
      mapa:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.461910601058!2d-38.49029245753272!3d-13.00623072811388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71603560859f611%3A0xd6b7ca8e618b7557!2sR.+Lucaia%2C+281+-+Rio+Vermelho%2C+Salvador+-+BA%2C+41940-660!5e0!3m2!1spt-BR!2sbr!4v1531318996417" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
    },
    {
      nome: 'MARGARETE ARAUJO DONIN',
      end: 'Av. Prof. Magalhães Neto, 1450 sala 406, Pituba, Salvador, Bahia. Brasil',
      tel: '(71) 982325329',
      whatsapp: '(71) 982325329',
      valor: 'Valor social (valor acessível)',
      servicos: [this.SERVICO.INDIVIDUAL],
      descricao_servicos: 'Especialista em Psicologia Clinica, psicoterapia Focal, Consultora em Saúde. E Educação Sexual (Abrasex) Atendimento adulto',
      email: 'marga.araujo@gmail.com',
      mapa:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.7542202858!2d-38.45155258517778!3d-12.987565790845363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161b0e9511d30f%3A0x1708013b12b438f!2sAv.+Prof.+Magalh%C3%A3es+Neto%2C+1450+-+Pituba%2C+Salvador+-+BA%2C+41810-011!5e0!3m2!1spt-BR!2sbr!4v1537598149991" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
    },
    {
      nome: 'Margaret',
      end: ' R. Alceu Amoroso Lima, Caminho das Árvores, Salvador, Bahia. Brasil',
      tel: '(71) 986646888',
      whatsapp: '(71) 986646888',
      valor: 'Valor social (valor acessível)',
      servicos: [this.SERVICO.INDIVIDUAL],
      descricao_servicos: 'Especialista em terapia cognitiva e neuropsicóloga',
      email: 'margassouza@gmail.com',
      mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.875503874736!2d-38.45758328517785!3d-12.97981369085049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161b1ae36a7025%3A0xae9e3bbcde47895d!2sR.+Alceu+Amoroso+Lima+-+Caminho+das+%C3%81rvores%2C+Salvador+-+BA%2C+40301-155!5e0!3m2!1spt-BR!2sbr!4v1538559598304" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
    },
    {
      nome: 'Roqueleide Batista de Jesus',
      end: 'Avenida Antônio Carlos Magalhães, 3213, Em frente a MC Donald\'s,Salvador, Cep: 40280000',
      tel: '(71) 984073911',
      whatsapp: '(71) 984073911',
      valor: 'Valor social',
      email: 'psicologaleide2014@hotmail.com',
      servicos: [this.SERVICO.INDIVIDUAL, this.SERVICO.CRIANCAS_E_ADOLESCENTES],
      descricao_servicos: 'Especialista em terapia cognitivo comportamental. Atendimento infantil, adulto e idoso',
      mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.7593850970497!2d-38.47014905007476!3d-12.987235763596246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161b3ec283d77f%3A0x43df1707df68661e!2sAv.+Ant%C3%B4nio+Carlos+Magalh%C3%A3es%2C+3213+-+Parque+Bela+Vista%2C+Salvador+-+BA%2C+40279-030!5e0!3m2!1spt-BR!2sbr!4v1537598375367" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
    },
    {
      nome: 'Graça - Suporte a família de alcoólicos',
      tel: '(71) 991044172',
      whatsapp: '(71) 991044172',
      valor:
        'Gratuito',
      servicos: [this.SERVICO.FAMILIAR, this.SERVICO.DROGAS],
      email: 'alanonbaresponde@gmail.com',
      descricao_servicos:
        'Através do e-mail ou WhatsApp informamos os grupos que atendem familiares e amigos de alcoólicos, que sofrem com a maneira de beber dessa pessoa.',
    },
    {
      nome: 'Associação de Pais e Amigos dos Excepcionais (Apae) Salvador',
      end: 'Rua Rio Grande do Sul, 545, Pituba,Salvador - Ba, Brasil CEP: 41.830-141',
      tel: '(71) 3270-8300',
      // whatsapp: '',
      valor: 'Plano de saúde e talvez valor social (valor acessível), ligue para confirmar.',
      servicos: [this.SERVICO.PLANO],
      descricao_servicos: 'Atendimento pelo plano Sul América e outros',
      email: 'apae@apaesalvador.org.br',
      mapa:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15550.166641139314!2d-38.46562169252954!3d-13.00114106014606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161b6611d9de9d%3A0xc8e5d590764725cd!2sApae+Laborat%C3%B3rio+de+An%C3%A1lises+Cl%C3%ADnicas!5e0!3m2!1spt-BR!2sbr!4v1535588226182" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
    },
    {
      nome: 'Daiana Sá Teles',
      end: 'Edifício Fernandez, Av. 7 de Setembro, 302, 8° andar, Sala 815, Salvador/BA',
      tel: '(71) 99718-2866',
      whatsapp: '+5571997182866',
      valor: 'Valor social (valor acessível)',
      servicos: [this.SERVICO.INDIVIDUAL, this.SERVICO.CRIANCAS_E_ADOLESCENTES, this.SERVICO.GRUPO],
      descricao_servicos: 'Psicoterapia individual (criança, adolescente, adulto e idoso) & grupos (max. 5 pessoas) de bate-papo sobre temas relevantes no contexto da Psicologia.',
      email: 'contatodaianapsicologia@gmail.com',
      mapa:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1943.942745436484!2d-38.515709091933424!3d-12.979175147712732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sEdif%C3%ADcio+Fernandez%2C+Av.+7+de+Setembro%2C+302%2C+8%C2%B0+andar%2C+Sala+815%2C+Salvador%2FBa!5e0!3m2!1spt-BR!2sbr!4v1535587271294" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
    },
    {
      nome: 'Amat Associacao Multidisciplinar De Atendimentos Terapeuticos',
      end: 'Rua São Paulo, 434 Pituba, Salvador/BA 41830-181',
      tel: '(71) 3248-2025',
      // whatsapp: '',
      valor: 'Atendimento pelo plano Sul América e outros',
      servicos: [this.SERVICO.PLANO],
      descricao_servicos: 'Amat Associacao Multidisciplinar De Atendimentos Terapeuticos tem como foco a atividade Terapias Alternativas.',
      // email: '',
      mapa:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.4971873114287!2d-38.458573385177786!3d-13.003979590834618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161b65a9514935%3A0xce6c515a2b535be2!2sR.+S%C3%A3o+Paulo%2C+434+-+Pituba%2C+Salvador+-+BA%2C+41830-180!5e0!3m2!1spt-BR!2sbr!4v1535589639236" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
    },
  
    {
      nome: 'Clínica Cardiológica',
      end: 'R. Mato Grosso, 184 - Pituba, Salvador - BA, 41830-150  ',
      tel: '(71) 3248-0622',
      // whatsapp: '',
      valor: 'Atendimento pelo plano Sul América e outros',
      servicos: [this.SERVICO.PLANO],
      descricao_servicos: 'Psicoterapia individual',
      email: '',
      mapa:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31099.703899527653!2d-38.46745950842312!3d-13.006162016645721!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x50dcccf1a04b1195!2sCl%C3%ADnica+Cardiol%C3%B3gica!5e0!3m2!1spt-BR!2sbr!4v1535589755713" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
    },
    {
      nome: 'Lilliana Sobrinho',
      end: 'Avenida ACM, 772, Torre do Parque Sala 1810 - Ao lado do Fiesta – Salvador – Bahia',
      tel: '(71) 993807286',
      whatsapp: '+5571993807286',
      valor: 'Valor social (valor acessível)',
      servicos: [this.SERVICO.CRIANCAS_E_ADOLESCENTES],
      descricao_servicos: 'Psicologia infantil e Educação',
      email: 'lilianasobrinho@hotmail.com',
      mapa:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6021339730855!2d-38.467779385177636!3d-12.997280290838983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161b69db9a041d%3A0x693fb409a27011cb!2sCondom%C3%ADnio+Empresarial+Torre+do+Parque!5e0!3m2!1spt-BR!2sbr!4v1534021524647" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
    },
    {
      nome: 'Marcos Alves',
      end: 'Shopping Rio Vermelho sala 210',
      tel: '(71) 99259-8121 / (71) 988620991',
      whatsapp: '+557199259-8121',
      email: 'psicologianodiva@bol.com.br',
      valor: 'Valor social (valor acessível)',
      servicos: [this.SERVICO.INDIVIDUAL, this.SERVICO.CONJUGAL, this.SERVICO.FAMILIAR],
      descricao_servicos:
        'Especialista em terapia cognitiva e comportamental especialista em terapia de casais e família. Atende todos os tipos de público.',
      mapa:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.350434873425!2d-38.488727285177596!3d-13.013341890828519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7160352df193b6b%3A0xaab13c28afd0e554!2sShopping+Rio+Vermelho!5e0!3m2!1spt-BR!2sbr!4v1532734618033" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
    },
  
    {
      nome: 'Ariane Casé ',
      end: 'Rua Alceu Amoroso, 470, Edifício Empresarial Niemeyer sala 411.',
      tel: '071987274633 ',
      whatsapp: '+5571987274633',
      valor: 'Valor social (valor acessível)',
      servicos: [this.SERVICO.CRIANCAS_E_ADOLESCENTES, this.SERVICO.INDIVIDUAL],
      descricao_servicos: ' Atendimento clínico psicólogico de crianças, adolescentes, adultos e idosos.',
      email: 'arianecase@hotmail.com',
      mapa:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15551.461060392776!2d-38.454933!3d-12.9804683!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1cd11a03cf792bce!2sEdif%C3%ADcio+Empresarial+Niemeyer!5e0!3m2!1spt-BR!2sbr!4v1534029200873" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
    },
  
    // Da mensagem do whatapp que deu origem ao app!
    {
      nome: 'PROJETO GIRASSOL',
      end: 'Rua Bahia, 450 Pituba Sala 304. Salvador',
      tel: '(71) 99982-1414',
      whatsapp: '+5571999821414',
      email: 'psicologianodiva@bol.com.br',
      valor: 'Valor social (valor acessível)',
      servicos: [this.SERVICO.INDIVIDUAL, this.SERVICO.CONJUGAL, this.SERVICO.FAMILIAR, this.SERVICO.CRIANCAS_E_ADOLESCENTES],
      descricao_servicos:
        'Psicoterapia para adultos, adolescentes e idosos.',
      mapa:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5344329878353!2d-38.45785228517772!3d-13.001602390836199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161b6f86f421e9%3A0x5f9dfd65a5168da8!2sR.+Bahia%2C+450+-+Pituba%2C+Salvador+-+BA%2C+41830-151!5e0!3m2!1spt-BR!2sbr!4v1534023139013" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
    },
    {
      nome: 'NAPSI (Núcleo de Atendimento Psicológico)',
      end: 'Rua Senador Theotônio Vilela, 225, Edf. Cidadela Center III, sala 408 Próximo à Av. ACM',
      tel: '(71)3491-5940',
      valor: 'Valor social (valor acessível)',
      servicos: [this.SERVICO.INDIVIDUAL, this.SERVICO.PROFISSIONAL, this.SERVICO.CRIANCAS_E_ADOLESCENTES],
      descricao_servicos:
        'Atendimento Psicológico, Psicopedagogia, Orientação Profissional',
      mapa:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15550.9564073535!2d-38.4723455!3d-12.9885318!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5fef53266bddc1c0!2sNAPSI+-+Forma%C3%A7%C3%A3o+em+Psican%C3%A1lise!5e0!3m2!1spt-BR!2sbr!4v1534024029409" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
    },
    {
      nome: 'CECOM-Centro Comunitário Batista Clériston Andrade',
      end: 'Praça Lord Cochrane - Garcia, Salvador - BA, 40210-255',
      tel: ' (71) 3194-7777 e 3235-8114',
      // whatsapp: '',
      valor: 'Gratuito ou Valor social (valor acessível)',
      servicos: [this.SERVICO.INDIVIDUAL, this.SERVICO.GRUPO],
      descricao_servicos: 'Atendimento individual e em grupo.',
      email: '',
      mapa:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15550.652841417435!2d-38.5069492!3d-12.9933799!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe83e600405e6a2b2!2sCECOM-Centro+Comunit%C3%A1rio+Batista+Cl%C3%A9riston+Andrade!5e0!3m2!1spt-BR!2sbr!4v1534025193528" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
    },
  
  
    {
      nome: 'CPB - Círculo',
      end: 'Rua Adhemar de Barros, 1156/101 - Edifício Máster Center - Ondina  40170-110 – SALVADOR - BA',
      tel: '(71)3245-6015',
      // whatsapp: '',
      valor: 'Valor social (valor acessível)',
      servicos: [this.SERVICO.INDIVIDUAL],
      descricao_servicos: 'Psicoterapia',
      email: 'circulo.bahia@gmail.com',
      mapa:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31100.248691675588!2d-38.505747!3d-13.001816!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71604a01eb05865%3A0xa4e443e1ff634dcd!2sAv.+Adhemar+de+Barros%2C+1156+-+Ondina%2C+Salvador+-+BA%2C+40170-110!5e0!3m2!1spt-BR!2sbr!4v1534025531681" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
    },
    {
      nome: 'CCVP – Complexo Comunitário Vida Plena',
      end: 'Rua Dr. Arthur Gonzalez, nº 186, Pau da Lima',
      tel: '(71) 3213-7836',
      whatsapp: '',
      valor: 'Gratuito ou Valor social (valor acessível)',
      servicos: [this.SERVICO.INDIVIDUAL],
      descricao_servicos: 'Atendimento em psicologia',
      email: 'complexocvidaplena@yahoo.com.br',
      mapa:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.769523588307!2d-38.44751828517841!3d-12.922529490888094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161061d355602f%3A0xbff8b2ef332ce076!2sComplexo+Comunit%C3%A1rio+Vida+Plena!5e0!3m2!1spt-BR!2sbr!4v1534025916217" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
    },
    {
      nome: 'Lar Harmonia',
      end: 'Rua Dep. Paulo Jacson n° 560 – Piatã. Tel.: 3286-7796, ramal 11',
      tel: '(71)3286-7796',
      valor: 'Não cobra taxa',
      servicos: [this.SERVICO.INDIVIDUAL, this.SERVICO.GRUPO, this.SERVICO.FAMILIAR, this.SERVICO.PROFISSIONAL],
      descricao_servicos: 'Psicoterapia individual, em grupo, familiar e orientação profissional',
      mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.4235619897922!2d-38.382633085178405!3d-12.944726490873519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716175e3cc0ac43%3A0x78de7c67a7796e13!2sR.+Dep.+Paulo+Jackson%2C+560+-+Jardim+Placaford%2C+Salvador+-+BA!5e0!3m2!1spt-BR!2sbr!4v1534026579928" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
    },
  
    // Não atendeu ao telefone
    //   {
    //   nome: 'Centro de Valorização da Vida',
    //   end: 'R. Luis Gama n° 47 – Nazaré',
    //   tel: '3322-4111; 3244-6936',
    //   valor: 'Valor social (valor acessível)',
    //   servicos: [this.SERVICO.CRIANCAS_E_ADOLESCENTES],
    //   descricao_servicos: 'Atendimento por telefone 24 horas e pessoalmente das 7h às 18h.',
    //   email: '',
    //   mapa:
    //     '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.669693086946!2d-38.48412338517853!3d-12.928938490883931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161000f3f0bd5d%3A0x5eda4fbb4f6bf7ee!2sRua+Luiz+Gama%2C+47+-+Capelinha+de+S%C3%A3o+Caetano%2C+Salvador+-+BA%2C+40393-040!5e0!3m2!1spt-BR!2sbr!4v1534026530666" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
    // },
  
    {
      nome: 'Núcleo de Psicologia Pablo Duram',
      end: 'Centro Espírita Cavaleiros da Luz, Pituaçu.',
      tel: '3363-5538/5161',
      valor: 'Valor social (valor acessível)',
      servicos: [this.SERVICO.CRIANCAS_E_ADOLESCENTES],
      descricao_servicos: 'Atendimento para as pessoas de Pituaçu e Boca do Rio',
    },
  
    {
      nome: 'IJBA - Instituto Junguiano da Bahia',
      end: 'Alameda Bons Ares, 15, Candeal Salvador - Bahia - Brasil​',
      tel: '3356 6811',
      whatsapp: '+55(71) 9 9927-8183',
      valor: 'Valor social (valor acessível)',
      servicos: [this.SERVICO.INDIVIDUAL],
      descricao_servicos: 'Psicoterapia',
      email: 'instituto@ijba.com.br',
      mapa:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.652894020108!2d-38.48621588517776!3d-12.994038790841161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161b4cdb537f53%3A0x81048a165e9dd897!2sAlameda+Bons+Ares%2C+15+-+Candeal%2C+Salvador+-+BA%2C+40296-360!5e0!3m2!1spt-BR!2sbr!4v1534027694420" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
    },
    {
      nome: 'ESPAÇO DÁLIA DESENVOLVIMETO INTEGRAL',
      end: ' Av Praia de Itapoan, quadra 03, lote 03- Vilas do Atlântico- Lauro de Freitas , Ba. (terceira casa á direita na Portaria principal de Vilas do Atlântico)',
      tel: '(71) 3024-1306',
      whatsapp: '+557198372 – 8787',
      valor: 'Valor social (valor acessível)',
      servicos: [this.SERVICO.INDIVIDUAL, this.SERVICO.CRIANCAS_E_ADOLESCENTES, this.SERVICO.CONJUGAL, this.SERVICO.FAMILIAR],
      descricao_servicos: ' Individual (adolescente, adulto), casal e família.',
    },
  
    //Fim dos cadastros do whatapp
  
    {
      nome: 'CAPS AD - Centro de Atenção Psicossocial Álcool e Drogas',
      end: 'Rua Conde Pereira Carneiro, 271, Pernambués',
      tel: '3238-2847',
      valor: 'Gratuito',
      servicos: [this.SERVICO.INDIVIDUAL, this.SERVICO.GRUPO, this.SERVICO.DROGAS, this.SERVICO.CAPS, this.SERVICO.CRIANCAS_E_ADOLESCENTES],
      descricao_servicos:
        'Atendimento psiquiátrico e psicoterapia de adultos ou crianças e adolescentes com necessidades decorrentes do uso de crack, álcool e outras drogas, grupos e oficinas. Compreende o território do distrito Cabula Beirú, Boca do Rio, Liberdade e Itapuã.',
      mapa:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0489063423342!2d-38.466854185177986!3d-12.96872239085781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161ade30870785%3A0x2708ee5624f75575!2sR.+Conde+Pereira+Carneiro%2C+271+-+Pernambu%C3%A9s%2C+Salvador+-+BA%2C+41100-010!5e0!3m2!1spt-BR!2sbr!4v1530940558299" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
    },
    {
      nome: 'CETAD - Centro de Estudos e Transtornos do Abuso de Drogas',
      end: 'Av. Pedro Lessa, n 123, Canela.',
      tel: '3283-7180/ 7181',
      valor: 'Gratuito',
      servicos: [this.SERVICO.INDIVIDUAL, this.SERVICO.GRUPO, this.SERVICO.DROGAS],
      descricao_servicos:
        'Atendimento psicológico individual e em grupo ao usuário de drogas,  oficinas, salas de espera, ponto da cidadania, programa de intensificação de cuidados.',
      mapa:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6522207459925!2d-38.525833285177754!3d-12.994081790841182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7160486c4fd4d4b%3A0x9b8b6c3240dc6390!2sR.+Pedro+Lessa%2C+123+-+Canela%2C+Salvador+-+BA%2C+40110-050!5e0!3m2!1spt-BR!2sbr!4v1530940782888" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
    },
    {
      nome:
        'CATA - Centro de Acolhimento e Tratamento de Alcoolista (Hospital Santo Antônio)',
      end: 'Av. Bomfim, 161, Largo de Roma, Portão 7',
      tel: '3310-1195/ 3310-1291',
      valor: 'Gratuito',
      servicos: [this.SERVICO.INDIVIDUAL, this.SERVICO.GRUPO, this.SERVICO.DROGAS],
      descricao_servicos:
        'Psicoterapia individual, grupos terapêuticos, grupos informativos, internação, acompanhamento ambulatorial a pessoas com necessidades decorrentes do uso abusivo de álcool.',
      mapa:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5733980210753!2d-38.509015100706094!3d-12.935117562534588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf3fc696323413476!2sAmbulat%C3%B3rio+Presidente+Jos%C3%A9+Sarney!5e0!3m2!1spt-BR!2sbr!4v1530941046948" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
    },
    {
      nome: 'Hospital Geral Couto Maia',
      end: 'Rua São Francisco, s/n, Monte Serrat',
      tel: '3316-3084',
      valor: 'Gratuito',
      servicos: [this.SERVICO.INDIVIDUAL],
      descricao_servicos:
        'Neurologia e acompanhamento psicológico a pacientes com hanseníase e familiares',
      mapa:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.71451969123!2d-38.515134449204204!3d-12.926061062354414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71605620d7cdfb1%3A0xcb2127d46940bdc0!2sHospital+Couto+Maia!5e0!3m2!1spt-BR!2sbr!4v1530881072450" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
    },
    {
      nome: 'Instituto de Saúde da Faculdade Unijorge',
      end: 'Av. Luís Viana Filho, 6775, Paralela',
      tel: '3206-8015',
      valor: 'Gratuito',
      servicos: [this.SERVICO.INDIVIDUAL, this.SERVICO.GRUPO],
      descricao_servicos:
        'Psicoterapia individual a todas as faixas etárias, Psicodiagnóstico, Avaliação Psiconeurológica, Orientação Profissional e Grupos terapêuticos.',
      mapa:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5362927581573!2d-38.41222634920404!3d-12.937497762586544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71610af309d2219%3A0xbc365de20840c79e!2sAv.+Lu%C3%ADs+Viana%2C+6775+-+S%C3%A3o+Marcos%2C+Salvador+-+BA!5e0!3m2!1spt-BR!2sbr!4v1530877497475" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
    },
    // Thaiane
    {
      nome: 'CREASI - Centro de Referência de Atenção à Saúde do Idoso',
      end: 'Av. Antonio Carlos Magalhães, s/n, Iguatemi',
      tel: '3270-5741/5758',
      valor: 'Gratuito',
      servicos: [this.SERVICO.INDIVIDUAL, this.SERVICO.GRUPO],
      descricao_servicos:
        'Psicoterapia individual e em grupo para idosos, grupos de convivência, atendimento familiar, avaliação cognitiva, atividades educativas e psiquiatria.',
      mapa:
        ' <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31101.253897976643!2d-38.511242241618795!3d-12.993793332773462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161b3c486d22fb%3A0xcf98d6732a5be127!2sCREASI!5e0!3m2!1spt-BR!2sbr!4v1530883858773" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> '
    },
    {
      nome: 'Centro de Referência LGBT',
      end: 'Avenida Oceânica, 3.731, Rio Vermelho',
      tel: '3202-2750',
      valor: 'Gratuito',
      servicos: [this.SERVICO.INDIVIDUAL, this.SERVICO.LGBT],
      descricao_servicos:
        'acompanhamento e orientação jurídica, psicológica e social ao público LGBT',
      mapa:
        ' <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.3967385491915!2d-38.501651249497044!3d-13.010388590785437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716035b98065213%3A0x5506b9f6469feb22!2sCentro+Municipal+de+Refer%C3%AAncia+LGBT!5e0!3m2!1spt-BR!2sbr!4v1530884873584" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> '
    },
    {
      nome: 'ABRE - Associação Baiana de Reabilitação e Educação do Excepcional',
      end: 'Rua Raul Leite, 93, Vila Laura, Matatu de Brotas.',
      tel: '3021-0500',
      valor: 'Gratuito',
      servicos: [this.SERVICO.INDIVIDUAL, this.SERVICO.CRIANCAS_E_ADOLESCENTES],
      descricao_servicos:
        'Reabilitação, Habilitação e educação de crianças e adolescentes portadores de deficiência mental, Serviço Social, Neurologia, Fonoaudiologia, Psiquiatria, Psicoterapia e Psicopedagogia.',
      mapa:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.880474847214!2d-38.50227635092514!3d-12.979495863436535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71604c6c824a1e5%3A0x335b8019a4187f47!2sAssocia%C3%A7%C3%A3o+Baiana+de+Recupera%C3%A7%C3%A3o+do+Excepcional!5e0!3m2!1spt-BR!2sbr!4v1531040998635" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
    },
    {
      nome:
        'INESPI - Associação de Pais e Amigos de Crianças e Adolescentes com Distúrbios de Comportamento',
      end: 'Rua Alberto Fiúza, no 500, Imbuí.',
      tel: '3231-1502',
      valor: 'Gratuito',
      servicos: [this.SERVICO.INDIVIDUAL, this.SERVICO.CRIANCAS_E_ADOLESCENTES],
      descricao_servicos:
        'Avaliação psicológica, pedagógica e psiquiátrica. Grupos pedagógicos e terapêuticos.',
      mapa:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.048465646228!2d-38.43822564949772!3d-12.968750590812864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161a50c23e2471%3A0x91aaa4b6ed532a96!2sR.+Alberto+Fi%C3%BAsa%2C+500+-+Imbu%C3%AD%2C+Salvador+-+BA!5e0!3m2!1spt-BR!2sbr!4v1530886579980" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>  '
    },
    //Ester
    {
      nome: 'IBR - Instituto Baiano de Reabilitação',
      end: ' Av. Presidente Vargas, no 2947, Ondina.',
      tel: 'Tel: 3504-5900',
      // E-mail: ibr@fjs.org.br
      valor: 'Gratuito',
      servicos: [this.SERVICO.INDIVIDUAL, this.SERVICO.FAMILIAR],
      descricao_servicos:
        'Reabilitação e atendimento psicossocial a pessoa com deficiência física',
      mapa:
        '<iframe src="https://www.google.com/maps/embed?pb" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> '
    },
  
    {
      nome: 'Centro de Atendimento Educacional Especializado Pestalozzi da Bahia',
      end: ' Av. Ademar de Barros, s/n, Ondina.',
      tel: ' 3247-0049/3331-9456',
      valor: 'Gratuito',
      servicos: [this.SERVICO.INDIVIDUAL, this.SERVICO.FAMILIAR, this.SERVICO.GRUPO],
      descricao_servicos:
        'Serviços: Educacionais, pedagógicos e psicopedagógicos a pessoas de 6 a 35 anos com necessidades educacionais especiais em deficiência intelectual e TGB - Transtorno Global em Desenvolvimento (autismo). Núcleos de arte-cultura, esporte e lazer, apoio pedagógico e de tecnologia e informação.',
      mapa:
        ' <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.46869232791!2d-38.511250049144174!3d-13.00579799078847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716036094a21545%3A0x9af813f09a75851f!2sAv.+Adhemar+de+Barros+-+Ondina%2C+Salvador+-+BA!5e0!3m2!1sen!2sbr!4v1530883126152" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> '
    },
  
    {
      nome: 'Instituto Guanabara',
      end: 'Rua Frederico Costa, n 93, Brotas.',
      tel: '3244-1142',
      valor: 'Gratuito',
      servicos: [this.SERVICO.GRUPO, this.SERVICO.CRIANCAS_E_ADOLESCENTES],
      descricao_servicos:
        ' Reabilitação, habilitação, educação e tratamento de crianças, adolescentes e adultos portadores de deficiência mental e transtornos nas áreas emocional, psicomotora e neurológica.',
      mapa:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8477617282606!2d-38.50219964914424!3d-12.981587290804386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71604c6c4346085%3A0xf0f0e745dfd2786e!2sR.+Frederico+Costa%2C+93+-+Engenho+Velho+de+Brotas%2C+Salvador+-+BA%2C+40243-045!5e0!3m2!1sen!2sbr!4v1530883353890" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>  '
    },
  
    {
      nome: 'Centro Estadual de Prevenção de Deficiência (SUS)',
      end: 'Av. ACM, s/n, Iguatemi',
      tel: '3351-2330/ 3270-5601',
      valor: 'Gratuito',
      servicos: [this.SERVICO.FAMILIAR, this.SERVICO.PROFISSIONAL],
      descricao_servicos:
        'Acompanhamento psicossocial, oficina terapêutica e atendimento psicopedagógico, visando à reabilitação física e neuroevolutiva de pessoas com deficiência.',
      mapa:
        ' <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62205.564779135166!2d-38.535121637809524!3d-12.98158492755927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa440c6fe29a3af6e!2sAvenida+Ant%C3%B4nio+Carlos+Magalh%C3%A3es%2C+S%2FN!5e0!3m2!1sen!2sbr!4v1530884342503" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> '
    },
  
    // Flávia
    {
      nome: 'NACPC - Núcleo de Atendimento à Criança com Paralisia Cerebral',
      end: 'Rua do Corte Grande, 160, Alto de Ondina',
      tel: '3611-2902',
      valor: 'Gratuito',
      servicos: [this.SERVICO.INDIVIDUAL, this.SERVICO.FAMILIAR, this.SERVICO.CRIANCAS_E_ADOLESCENTES],
      descricao_servicos:
        'Acompanhamento psicológico a crianças com paralisia cerebral e seus familiares.',
      mapa:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.450451539659!2d-38.50325274949709!3d-13.006961890787682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716035ec9190fe9%3A0x44bbe300230168ba!2sNACPC!5e0!3m2!1sen!2sbr!4v1530795898069" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
    },
  
    {
      nome: 'Escola Bahiana de Medicina e Saúde Pública',
      end: 'Av. Dom João VI, 275, Brotas',
      tel: '3276-8259/8298',
      valor: 'Gratuito',
      servicos: [this.SERVICO.INDIVIDUAL, this.SERVICO.GRUPO],
      descricao_servicos:
        'Psicoterapia individual (todas as faixas etárias) e Grupo terapêuticos.',
      mapa:
        ' <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.7056640692804!2d-38.49023994949735!3d-12.990668090798456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71604b468305749%3A0x72a5e386090aeb20!2sBAHIANA+-+School+of+Medicine+and+Public+Health!5e0!3m2!1sen!2sbr!4v1530796297375" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> '
    },
  
    {
      nome: 'Núcleo de Estudos e Práticas Psicológicas (NEPSI) da Unifacs',
      end: 'Rua Solimões, 181, Saboeiro',
      tel: '3271-8119',
      valor: 'Gratuito',
      servicos: [
        this.SERVICO.INDIVIDUAL,
        this.SERVICO.CONJUGAL,
        this.SERVICO.FAMILIAR,
        this.SERVICO.PROFISSIONAL
      ],
      descricao_servicos:
        'Psicoterapia individual, conjugal, familiar, psicodiagnóstico e orientação profissional',
      mapa:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0610173228656!2d-38.444615349497695!3d-12.967947390813427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161a56347e5f53%3A0x2e23aca9bc3c28e1!2sUnifacs+PA+10!5e0!3m2!1sen!2sbr!4v1530796458956" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
    },
  
    {
      nome: 'FTC - Faculdade de Tecnologia e Ciências',
      end: 'Av. Luís Viana Filho, 8812, Paralela',
      tel: '3281-8073',
      valor: 'Gratuito',
      servicos: [this.SERVICO.INDIVIDUAL],
      descricao_servicos:
        'Psicodiagnóstico, psicoterapia individual (todas as faixas etárias) e psicoterapia em grupos, família e casal',
      mapa:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5754021517782!2d-38.39477344949795!3d-12.934988990835148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716174fae89b33b%3A0x163e53b115d615cd!2sFTC+-+Faculdade+de+Tecnologia+e+Ci%C3%AAncias%2C+Campus+Salvador!5e0!3m2!1sen!2sbr!4v1530796580180" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
    },
  
    //Naiara
  
    {
      nome: 'UFBA - Universidade Federal da Bahia',
      end: 'Rua Professor Aristides Novis, 197, Federação (São Lázaro)',
      tel: '3235-4589',
      valor: 'Gratuito ou Preço Negociado',
      servicos: [this.SERVICO.INDIVIDUAL, this.SERVICO.PROFISSIONAL, this.SERVICO.CRIANCAS_E_ADOLESCENTES],
      descricao_servicos:
        'Atendimento psicológico individual (adolescente, adulto psicodiagnóstico e orientação profissional e idoso)',
      mapa:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.54935361837!2d-38.513638949529465!3d-13.000649963871066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716049de15a3b17%3A0xe744f5fde0253b33!2sR.+Prof.+Arist%C3%ADdes+Novis%2C+197+-+Federa%C3%A7%C3%A3o%2C+Salvador+-+BA%2C+40210-630!5e0!3m2!1spt-BR!2sbr!4v1530883874947" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
    },
  
    {
      nome: 'Faculdade Ruy Barbosa',
      end: 'Rua Theodomiro Batista, 422, Rio Vermelho',
      tel: '3205-1745',
      valor: 'Gratuito',
      servicos: [this.SERVICO.INDIVIDUAL, this.SERVICO.PROFISSIONAL, this.SERVICO.LGBT],
      descricao_servicos:
        'Orientação profissional, psicoterapia individual e familiar (todas as faixas etárias), diagnóstico e reabilitação cognitiva.Atendimento psicológico com enfoque em gênero(núcleo de Direitos Humanos e LGBT).',
      mapa:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1943.7040583534754!2d-38.48220960800574!3d-13.009662778361196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161cabb1e48e97%3A0x2980e20c7b0b64ea!2sRua+Theodomiro+Baptista%2C+422+-+Rio+Vermelho%2C+BA%2C+41940-320!5e0!3m2!1spt-BR!2sbr!4v1530884106686" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
    },
  
    {
      nome: 'Instituto de Saúde da Faculdade Unijorge',
      end: 'Av. Luís Viana Filho, 6775, Paralela',
      tel: '3206-8015',
      valor: 'Gratuito',
      servicos: [this.SERVICO.INDIVIDUAL, this.SERVICO.GRUPO, this.SERVICO.PROFISSIONAL],
      descricao_servicos:
        'Psicoterapia individual a todas as faixas etárias, Psicodiagnóstico, Avaliação Psiconeurológica, Orientação Profissional e Grupos terapêuticos.',
      mapa:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31106.389013382017!2d-38.43724443958639!3d-12.952733188922403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71610af309d2219%3A0xbc365de20840c79e!2sAv.+Lu%C3%ADs+Viana%2C+6775+-+S%C3%A3o+Marcos%2C+Salvador+-+BA!5e0!3m2!1spt-BR!2sbr!4v1530884231477" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
    },
  
    {
      nome: 'Faculdade da Cidade do Salvador',
      end: 'Av. Estados Unidos, 37, 3° andar, Comércio',
      tel: '3254-6916/6943',
      valor: 'Gratuito ou Preço Negociado',
      servicos: [this.SERVICO.INDIVIDUAL, this.SERVICO.GRUPO, this.SERVICO.CRIANCAS_E_ADOLESCENTES],
      descricao_servicos:
        'Psicoterapia individual e em grupo para crianças, adolescentes e adultos.',
      mapa:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.069513768239!2d-38.5115930495299!3d-12.967403663193645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71604e11a5d4391%3A0x3ab90f53e136da6a!2sAv.+Estados+Unidos%2C+37+-+3%C2%B0+andar+-+Comercio%2C+Salvador+-+BA%2C+40010-020!5e0!3m2!1spt-BR!2sbr!4v1530884363209" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
    },
  
    // Beatriz
    {
      nome:
        'Núcleo de Atendimento Psicológico (NAP) da Faculdade Castro Alves/UNIRB',
      end: 'Rua Rubem Berta, 128, Pituba',
      tel: '3033-0009',
      valor: 'Gratuito',
      servicos: [this.SERVICO.INDIVIDUAL, this.SERVICO.CRIANCAS_E_ADOLESCENTES],
      descricao_servicos:
        'Psicoterapia individual para crianças, adolescentes e adultos',
      mapa:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5721685101134!2d-38.45320374949717!3d-12.999193490792829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x450657f3ff4cc65%3A0x9e7c2345cb524bb0!2sFaculdade+Castro+Alves!5e0!3m2!1spt-BR!2sbr!4v1530882231553" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen> </iframe>'
    },
    {
      nome: 'FACULDADE SOCIAL DA BAHIA – FSBA',
      end: 'Av. Oceânica, 2717, Ondina',
      tel: '4009-2937/2935',
      valor: 'Gratuito',
      servicos: [this.SERVICO.INDIVIDUAL],
      descricao_servicos: 'Psicoterapia individual a todas as faixas etárias',
      mapa:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.395059549233!2d-38.510682749497334!3d-13.01049569078536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716036635c57f13%3A0xaabc087e3c266e12!2sFaculdade+Social+da+Bahia!5e0!3m2!1spt-BR!2sbr!4v1530882460413" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
    },
    {
      nome: 'UNIME PARALELA',
      end: 'Rua Jairo Simões, 3172, Imbuí',
      tel: '3879-9155',
      valor: 'Gratuito',
      servicos: [this.SERVICO.INDIVIDUAL, this.SERVICO.PROFISSIONAL, this.SERVICO.CRIANCAS_E_ADOLESCENTES],
      descricao_servicos:
        'Atendimento psicológico individual(criança, adolescente, adulto e idoso) grupos terapêuticos, orientação para pais, orientação profissional(carreira / coaching, inserção no mercado de trabalho, qualidade de vida no trabalho e saúde mental do/a trabalhador/a)',
      mapa:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1748632446975!2d-38.43402704949762!3d-12.960659990818193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161a42d714b603%3A0xdf606e5008e75b2b!2sR.+Prof.+Ja%C3%ADro+Sim%C3%B5es%2C+3172+-+Pitua%C3%A7u%2C+Salvador+-+BA%2C+41720-375!5e0!3m2!1spt-BR!2sbr!4v1530882793957" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
    },
    {
      nome: 'Faculdade Estácio',
      end: 'Rua Xingu, 179, Jd Atalaia, Stiep.',
      tel: '2107-8144',
      valor: 'Gratuito',
      servicos: [this.SERVICO.INDIVIDUAL, this.SERVICO.FAMILIAR],
      descricao_servicos:
        'psicoterapia individual (todas as faixas etárias) e familiar',
      mapa:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.845016404577!2d-38.44905474949743!3d-12.981762790804314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161b06e3eee8a5%3A0x33988cea9946e2e0!2zRXN0w6FjaW8!5e0!3m2!1spt-BR!2sbr!4v1530883024622" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
    },
    {
      nome: 'UNIVERSIDADE DO ESTADO DA BAHIA – UNEB',
      end: 'Rua Silveira Martins, 2555, Cabula',
      tel: '3117-5336/5341',
      valor: 'Gratuito',
      servicos: [this.SERVICO.INDIVIDUAL, this.SERVICO.GRUPO],
      descricao_servicos:
        'psicoterapia individual e em grupo com todas as faixas etárias',
      mapa:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.318776205092!2d-38.46079249843412!3d-12.951442199999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71612308d8d0ea7%3A0xdddaf66ca849c879!2sUniversidade+do+Estado+da+Bahia!5e0!3m2!1spt-BR!2sbr!4v1530883300079" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
    },
  
  
    // Flávia
    {
      nome: 'CAPS II GARCIA/UFBA',
      end: 'R. Leovigildo Filgueiras 392, Garcia Ref. Próx. Colégio 2 de Julho',
      tel: '3328-7408 / 3329-1004',
      valor: 'Gratuito',
      servicos: [this.SERVICO.CAPS],
      descricao_servicos: 'Atendimento das 8h00 às 17h00',
      mapa:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.687480564788!2d-38.519506685685705!3d-12.991829663734729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716048545244633%3A0x659fe50b296e003c!2sCAPS+II+UFBA!5e0!3m2!1spt-BR!2sbr!4v1531403433648" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>  ',
      bairros_atendidos:
        'Alto da Bola, Alto da Sereia, Alto das Pombas, Alto do Areal, Alto do Gantois, Alto do Sobradinho, Amaralina, Avenida Brandão, Baixa Vai quem quer, Banco dos Ingleses, Barra, Barra Avenida, Binóculo, Cardeal da Silva, Calabar, Calabar, Caminho das Arvores, Campo Santo, Canela, Centenário, Chame-Chame, Chapada do Rio Vermelho, Engenho Velho Federação, Federação, Garcia, Garibaldi, Graça, Iguatemi, Invasão do Cai Duro, Invasão do Tubo, Invasão São Lázaro, Itaigara, Jardim América, Jardim Apipema, Jardim Brasil, Jardim Zoológico, Loteamento Aquários, Loteamento IAPSEB, Morro do Conselho, Morro do Cristo, Morro do Gato, Morro Ipiranga, Nordeste de Amaralina, Ondina, Paciência, Parque Cruz Aguiar, Parque Flamboyants, Parque João XXIII, Parque Júlio César, Parque Nossa Sra. da Luz, Parque São Brás, Parque São Paulo, Parque São Vicente, Pedra da Sereia, Pituba, Ponto da Mangueira, Porto da Barra, Rio Vermelho, Roça da Sabina, Santa Cruz, São Gonçalo Federação, São Lázaro, Ubaranas, Vale da Muriçoca, Vale das Pedrinhas, Vale dos Barris, Vasco da Gama, Vila Matos, Vitória.'
    },
    {
      nome: 'CAPS II Oswaldo Camargo',
      end: 'R. Itabuna S/N, Rio Vermelho Prox. Antiga Coca-Cola',
      tel: '3611-5600',
      valor: 'Gratuito',
      servicos: [this.SERVICO.CAPS],
      descricao_servicos: 'Atendimento das 8h00 às 17h00',
      mapa:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.4381307725484!2d-38.49429658517754!3d-13.007747990832177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7160356f731022b%3A0xe01610742ab37e21!2sCentro+de+Saude+Mental+Oswaldo+Camargo!5e0!3m2!1spt-BR!2sbr!4v1531406263467" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>',
      bairros_atendidos:
        'Alto da Bola, Alto da Sereia, Alto das Pombas, Alto do Areal, Alto do Gantois, Alto do Sobradinho, Amaralina, Avenida Brandão, Baixa Vai quem quer, Banco dos Ingleses, Barra, Barra Avenida, Binóculo, Cardeal da Silva, Calabar, Calabar, Caminho das Arvores, Campo Santo, Canela, Centenário, Chame-Chame, Chapada do Rio Vermelho, Engenho Velho Federação, Federação, Garcia, Garibaldi, Graça, Iguatemi, Invasão do Cai Duro, Invasão do Tubo, Invasão São Lázaro, Itaigara, Jardim América, Jardim Apipema, Jardim Brasil, Jardim Zoológico, Loteamento Aquários, Loteamento IAPSEB, Morro do Conselho, Morro do Cristo, Morro do Gato, Morro Ipiranga, Nordeste de Amaralina, Ondina, Paciência, Parque Cruz Aguiar, Parque Flamboyants, Parque João XXIII, Parque Júlio César, Parque Nossa Sra. da Luz, Parque São Brás, Parque São Paulo, Parque São Vicente, Pedra da Sereia, Pituba, Ponto da Mangueira, Porto da Barra, Rio Vermelho, Roça da Sabina, Santa Cruz, São Gonçalo Federação, São Lázaro, Ubaranas, Vale da Muriçoca, Vale das Pedrinhas, Vale dos Barris, Vasco da Gama, Vila Matos, Vitória.'
    },
    {
      nome: 'CAPSi Luis Meira Lessa',
      end: 'Rua das Magaloeiras, 32 - Jaguaribes,',
      tel: '3335-6827 / 3611-7913',
      valor: 'Gratuito',
      servicos: [this.SERVICO.CAPS],
      descricao_servicos: '',
      mapa:
        ' <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.220791818141!2d-38.396048385686214!3d-12.957718913040042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7160353aaaaaaabb%3A0x66519860fb153b6a!2sCAPSi+Luis+Meira+Lessa!5e0!3m2!1spt-BR!2sbr!4v1531403518546" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> ',
      bairros_atendidos:
        'Abaeté, Aeroporto, Aldeia Jaguaribe, Alto do Coqueiro, Alto do Girassol, Alto do São João, Areia  Branca, Bairro da Paz, Baixa do Dendê, Barro Duro, Cajueiro, Campinas, Capelão, Ceasa, Costa Verde, Itapuã, Jardim Atalaia, Jardim das Margaridas, Jardim Jaguaribe, Jardim Piatã, Jardim tropical, Loteamento Alameda Praia, Loteamento Cassangê, Loteamento Colina Fonte, Loteamento Farol Itapuã, Loteamento Pedra do sal, Loteamento Praia do Flamengo, Loteamento Stela Maris, Malvinas, Mussurunga, Nova Brasília, Paralela, Patamares, Piatã, Placaford, São Cristóvão, Vila Ex-Combatentes.'
    },
  
    // Vanessa
    {
      nome: 'CAPS II Rosa Garcia',
      end:
        ' R. Prof. Euclides Alipio de Oliveira 236, Jd Armação Atrás do Rest. Bargaço, 1a Rua a Direita',
      tel: '3611-2968',
      valor: 'Gratuito',
      servicos: [this.SERVICO.CAPS],
      descricao_servicos: '08hrs às 17hrs',
      mapa:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8433425995895!2d-38.440675549497406!3d-12.981869790804227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161ba945007a01%3A0xd747d0828cbddd04!2sCAPS+Rosa+Garcia!5e0!3m2!1sen!2sbr!4v1531404220176" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>',
      bairros_atendidos:
        'Armação, Aeroclube, Alto da Alegria, Alto do São Francisco, Baixa Fria, Barreiro, Bate Facho, Boca do Rio, Caxundé,Bolandeira, Conjunto Marback, Conjunto Rio das Pedras, Conjunto Solarium, Conjunto Solarium, Conjunto Vale dos Rios, Corsário, Costa Azul, Imbui, Invasão Alto de São João, Invasão Baixa Cajueiro, Invasão Bananal, Invasão da Rocinha, Invasão Golfo Pérsico, Invasão Irmã Dulce, Invasão Kwait, Invasão Novo Paraíso, Invasão Sonho Dourado, Jardim Imperial, Loteamento Vela Branca, Pituaçu.'
    },
    {
      nome: 'CAPS II Aristides Novis',
      end:
        'R. Almirante Alves Camara S/N, Engenho Velho de Brotas. Prox. Secret.Educação do Município',
      tel: '3611-2956 / 3611-2953',
      valor: 'Gratuito',
      servicos: [this.SERVICO.CAPS],
      descricao_servicos: '08hrs às 17hrs',
      mapa:
        ' <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.7954055875744!2d-38.5037336431724!3d-12.984933854235305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71604c72421ba5f%3A0xb4cc0ed7e8f3cdbf!2sCentro+de+Sa%C3%BAde+Aristides+N%C3%B3vis!5e0!3m2!1sen!2sbr!4v1531404148736" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> ',
      bairros_atendidos:
        'Acupe, Alto do Formoso, Alto do Saldanha, Baixa Candeal Pequeno, Brotas, Buraco da Gia, Campinas de Brotas, Engenho Velho de Brotas, Galés, Parque Florestal, Parque Bela Vista, Baixa do Cacau – 2, Baixa do Tubo –1, Bandeirantes, Boa Vista de Brotas, Bonocô, Candeal, Castro Neves, Cosme de Farias, Cruz da Redenção, Daniel Lisboa, Dois Leões, Invasão Ogunjá, Invasão Pela Porco, Invasão Polêmica, Jardim Caiçara, Luís Anselmo, Matatu, Ogunjá, Pepino, Pitangueiras, Santa Rita, Santo Agostinho, Sete Portas, Vila América, Vila Laura.'
    },
    {
      nome: 'CAPS II Eduardo Saback',
      end:
        'R. Conde Pereira Carneiro 148, Pernambues. Em Frente a Rádio Metrópole',
      tel: '3460-1957 / 3611-7912',
      valor: 'Gratuito',
      servicos: [this.SERVICO.CAPS],
      descricao_servicos: '08hrs às 17hrs',
      mapa:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0469966500646!2d-38.46702844949765!3d-12.968844590812864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161ade309b038f%3A0x3c39b34f3a1ee5e1!2sCAPS+Eduardo+Saback!5e0!3m2!1sen!2sbr!4v1531403640550" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>  ',
      bairros_atendidos:
        'Alto da Ventosa, Alto do Arraial, Alto do Calabetão, Alto do Cruzeiro – 1, Arenoso, Arraial do Retiro, Baixa da Paz, Baixa de Santo Antônio, Baixa do Calabetão, Baixa do Cruzeiro, Baixa do Manú, Baixa do Manú, Baixa do Sapo, Baixa do Tubo – 2, Baixinha Santo Antônio, Barreiras, Bate Folha, Beco da Coruja, Beco do Fuxico, Beirú-Tancredo Neves, Bom Futuro, CAB, Cabula, Cabula I, Cabula II, Cabula III, Cabula IV, Cabula VI, Cabula VII, Cabula IX, Cabula X, Calabetão, Campo Seco, Chácara Perseverança, Chácara Senhor do Bonfim, Cocheira, Invasão Barreiras, Invasão Barreiras, Invasão CAB, Invasão Narandiba, Cj. Baia de Todos os Santos, Conjunto J. S. Cavalcante, Conjunto Jardim Cabula, Conjunto João Durval, Conjunto Novo Horizonte, Conjunto Parque Flamengo, Conjunto Salvador, Conjunto Santa Edwirgens, Doron, Engomadeira, Fazenda Pompilio Bittencourt, Jardim Guiomar, Jardim Pampulha, Jardim Santo Inácio, João Caldas, Loteamento Jardim Brasília, Loteamento Jardim Iara, Mata Escura, Narandiba, Nova Sussuarana, Parque Jacélia, Parque Residencial  Vale Mangueira, Pedreira S. G. Retiro, Pernambués, Saboeiro, São Gonçalo, Sussuarana, Tesoura, Vila Aberlado Magalhães, Vila Dois Irmãos.'
    },
    //Thaiane
    {
      nome: 'CAPS II Aristides Novis',
      end:
        'R. Almirante Alves Camara S/N, Engenho Velho de Brotas. Prox. Secret.Educação do Município',
      tel: ' 3611-2956',
      valor: 'Gratuito',
      servicos: [this.SERVICO.CAPS],
      descricao_servicos: '8 às 18 horas ',
      mapa:
        ' <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.7954053018484!2d-38.503728278494485!3d-12.98493387249636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71604c72421ba5f%3A0xb4cc0ed7e8f3cdbf!2sCentro+de+Sa%C3%BAde+Aristides+N%C3%B3vis!5e0!3m2!1sen!2sbr!4v1531401539389" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> ',
      bairros_atendidos:
        'Alto da Bola, Alto da Sereia, Alto das Pombas, Alto do Areal, Alto do Gantois, Alto do Sobradinho, Amaralina, Avenida Brandão, Baixa Vai quem quer, Banco dos Ingleses, Barra, Barra Avenida, Binóculo, Cardeal da Silva, Calabar, Calabar, Caminho das Arvores, Campo Santo, Canela, Centenário, Chame-Chame, Chapada do Rio Vermelho, Engenho Velho Federação, Federação, Garcia, Garibaldi, Graça, Iguatemi, Invasão do Cai Duro, Invasão do Tubo, Invasão São Lázaro, Itaigara, Jardim América, Jardim Apipema, Jardim Brasil, Jardim Zoológico, Loteamento Aquários, Loteamento IAPSEB, Morro do Conselho, Morro do Cristo, Morro do Gato, Morro Ipiranga, Nordeste de Amaralina, Ondina, Paciência, Parque Cruz Aguiar, Parque Flamboyants, Parque João XXIII, Parque Júlio César, Parque Nossa Sra. da Luz, Parque São Brás, Parque São Paulo, Parque São Vicente, Pedra da Sereia, Pituba, Ponto da Mangueira, Porto da Barra, Rio Vermelho, Roça da Sabina, Santa Cruz, São Gonçalo Federação, São Lázaro, Ubaranas, Vale da Muriçoca, Vale das Pedrinhas, Vale dos Barris, Vasco da Gama, Vila Matos, Vitória.'
    },
    {
      nome: 'CAPS II Eduardo Saback',
      end:
        'R. Conde Pereira Carneiro 148, Pernambues. Em Frente a Rádio Metrópole',
      tel: '3460-1957 / 3611-7912',
      valor: 'Gratuito',
      servicos: [this.SERVICO.CAPS],
      descricao_servicos: ' 8 às 18 horas ',
      mapa:
        '<iframe src="https://www.google.com/maps/embed?pb" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>  ',
      bairros_atendidos:
        'Alto da Ventosa, Alto do Arraial, Alto do Calabetão, Alto do Cruzeiro – 1, Arenoso, Arraial do Retiro, Baixa da Paz, Baixa de Santo Antônio, Baixa do Calabetão, Baixa do Cruzeiro, Baixa do Manú, Baixa do Manú, Baixa do Sapo, Baixa do Tubo – 2, Baixinha Santo Antônio, Barreiras, Bate Folha, Beco da Coruja, Beco do Fuxico, Beirú-Tancredo Neves, Bom Futuro, CAB, Cabula, Cabula I, Cabula II, Cabula III, Cabula IV, Cabula VI, Cabula VII, Cabula IX, Cabula X, Calabetão, Campo Seco, Chácara Perseverança, Chácara Senhor do Bonfim, Cocheira, Invasão Barreiras, Invasão Barreiras, Invasão CAB, Invasão Narandiba, Cj. Baia de Todos os Santos, Conjunto J. S. Cavalcante, Conjunto Jardim Cabula, Conjunto João Durval, Conjunto Novo Horizonte, Conjunto Parque Flamengo, Conjunto Salvador, Conjunto Santa Edwirgens, Doron, Engomadeira, Fazenda Pompilio Bittencourt, Jardim Guiomar, Jardim Pampulha, Jardim Santo Inácio, João Caldas, Loteamento Jardim Brasília, Loteamento Jardim Iara, Mata Escura, Narandiba, Nova Sussuarana, Parque Jacélia, Parque Residencial  Vale Mangueira, Pedreira S. G. Retiro, Pernambués, Saboeiro, São Gonçalo, Sussuarana, Tesoura, Vila Aberlado Magalhães, Vila Dois Irmãos.'
    },
    {
      nome: 'CAPS AD Pernambues',
      end: 'Conde Pereira Carneiro 271, Pernambues. Em Frente a Rádio Metrópole',
      tel: '3238-2847',
      valor: 'Gratuito',
      servicos: [this.SERVICO.CAPS, this.SERVICO.DROGAS],
      descricao_servicos: 'segunda a sexta-feira',
      mapa:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.045907398281!2d-38.466969249497694!3d-12.968914290812785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161ade305f1ce1%3A0x724a308e96882ce!2sCaps-ad!5e0!3m2!1sen!2sbr!4v1531402269181" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>',
      bairros_atendidos:
        'Alto da Ventosa, Alto do Arraial, Alto do Calabetão, Alto do Cruzeiro – 1, Arenoso, Arraial do Retiro, Baixa da Paz, Baixa de Santo Antônio, Baixa do Calabetão, Baixa do Cruzeiro, Baixa do Manú, Baixa do Manú, Baixa do Sapo, Baixa do Tubo – 2, Baixinha Santo Antônio, Barreiras, Bate Folha, Beco da Coruja, Beco do Fuxico, Beirú-Tancredo Neves, Bom Futuro, CAB, Cabula, Cabula I, Cabula II, Cabula III, Cabula IV, Cabula VI, Cabula VII, Cabula IX, Cabula X, Calabetão, Campo Seco, Chácara Perseverança, Chácara Senhor do Bonfim, Cocheira, Invasão Barreiras, Invasão Barreiras, Invasão CAB, Invasão Narandiba, Cj. Baia de Todos os Santos, Conjunto J. S. Cavalcante, Conjunto Jardim Cabula, Conjunto João Durval, Conjunto Novo Horizonte, Conjunto Parque Flamengo, Conjunto Salvador, Conjunto Santa Edwirgens, Doron, Engomadeira, Fazenda Pompilio Bittencourt, Jardim Guiomar, Jardim Pampulha, Jardim Santo Inácio, João Caldas, Loteamento Jardim Brasília, Loteamento Jardim Iara, Mata Escura, Narandiba, Nova Sussuarana, Parque Jacélia, Parque Residencial  Vale Mangueira, Pedreira S. G. Retiro, Pernambués, Saboeiro, São Gonçalo, Sussuarana, Tesoura, Vila Aberlado Magalhães, Vila Dois Irmãos.'
    },
    //Ester:
    {
      nome: 'CAPS AD Gregório de Matos ',
      end:
        'Faculdade de Medicina da UFBA - Pavilhão Carneiro de Campos - Terreiro de Jesus',
      tel: '3283-5547 / 3322-0235/ 3322-0304 ',
      valor: 'Gratuito',
      servicos: [this.SERVICO.CAPS, this.SERVICO.DROGAS],
      descricao_servicos:
        'Focam no atendimento a pessoas que utilizam o álcool de maneira prejudicial e outras drogas',
      mapa:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15551.282243560197!2d-38.52321792264122!3d-12.983326052851451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161a43294d8bbb%3A0x1cb6cfc0d17a0ff8!2sFaculdade+de+Medicina+da+Universidade+Federal+da+Bahia+-+FMB!5e0!3m2!1sen!2sbr!4v1531403447080" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>  ',
      bairros_atendidos:
        'Água de Meninos, Aflitos, Ajuda, Alto da Esperança, Aquidabã, Baixa dos Sapateiros, Barbalho, Barris, Barroquinha, BoulevardSuisso, Campo da Pólvora, Campo Grande, Carmo, Centro, Comércio, Conceição da Praia, Curva Grande, Desterro, Djalma Dutra, Faísca, Fonte Nova, Forte de São Pedro, Gamboa, Jardim Bahiano, Lapa, Largo Dois de Julho, Loteamento Lanat, Macaúbas, Mercado do Ouro, Mercês, Misericórdia, Mouraria, Nazaré, Paço, Palma, Pelourinho, Piedade, Pilar, Poeira, Politeama, Rosário, Santa Tereza, Santana, Santo Antônio, São Bento, São Francisco, São Joaquim, São José, São Pedro, São Raimundo, Saúde, Sé, Taboão, Tororó.'
    },
    {
      nome: 'CAPS II Ant° Roberto Pellegrino ',
      end: 'R. Arquimedes Gonçalves 226, Jardim Baiano. Prox. Campo da Pólvora',
      tel: '3321-3679',
      valor: 'Gratuito',
      servicos: [this.SERVICO.CAPS],
      descricao_servicos:
        'O público-alvo são adultos com transtornos mentais persistentes.Opera com uma equipe mínima de doze profissionais, com nível médio e superior, tendo um suporte para acompanhar cerca de 360 indivíduos por mês, de segunda a sexta-feira, com horário de funcionamento das 8 às 18 horas – pode oferecer um terceiro período, funcionando até as 21 horas.',
      mapa:
        ' <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.859294817778!2d-38.508594949144445!3d-12.980849990804924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71604ea7b97ef61%3A0x75f86c3364f550ab!2sR.+Arquimedes+Gon%C3%A7alves%2C+226+-+Nazar%C3%A9%2C+Salvador+-+BA%2C+40050-300!5e0!3m2!1sen!2sbr!4v1531403746249" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> ',
      bairros_atendidos:
        'Água de Meninos, Aflitos, Ajuda, Alto da Esperança, Aquidabã, Baixa dos Sapateiros, Barbalho, Barris, Barroquinha, BoulevardSuisso, Campo da Pólvora, Campo Grande, Carmo, Centro, Comércio, Conceição da Praia, Curva Grande, Desterro, Djalma Dutra, Faísca, Fonte Nova, Forte de São Pedro, Gamboa, Jardim Bahiano, Lapa, Largo Dois de Julho, Loteamento Lanat, Macaúbas, Mercado do Ouro, Mercês, Misericórdia, Mouraria, Nazaré, Paço, Palma, Pelourinho, Piedade, Pilar, Poeira, Politeama, Rosário, Santa Tereza, Santana, Santo Antônio, São Bento, São Francisco, São Joaquim, São José, São Pedro, São Raimundo, Saúde, Sé, Taboão, Tororó.'
    },
    // Felipe Oliveira
    {
      nome: 'CAPS II Pau da Lima',
      end:
        'Estrada das Muriçocas Cond. Dom Bosco, 1a Casa. De frente pro Shopping Ponto Alto.',
      tel: '3259-2556',
      valor: 'Gratuito',
      servicos: [this.SERVICO.CAPS],
      descricao_servicos: 'das 08 as 17 hrs',
      mapa:
        ' <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.583220730003!2d-38.41992974949788!3d-12.934487390835486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71610a39de36d89%3A0x2b67f9b7a709c373!2sCondo+Don+Bosco!5e0!3m2!1sen!2sbr!4v1531392704516" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> ',
      bairros_atendidos:
        'Canabrava, São Marcos, Fazenda Mocambo, Mansão do Caminho, Castelo Branco, Invasão Brasilgás, Mata dos Oitis, Sete de Abri, Colina de Pituaçu, Invasão Caraíba Metais, Moradas do Campo, Conjunto Recanto das Ilhas, Invasão São Rafael, Lagos, Nova Brasília Ipitanga, Conjunto Trobogy, Canária, Coroado, Flamboyants, Jaguaribe II, Dom Avelar, Jardim Cajazeira, Novo Marotinho, Jardim Nova Esperança, Pau da Lima, Porto Seco Pirajá, Estrada Velha do Aeroporto, loteamento São José, Vivenda dos Pássaros.'
    },
    {
      nome: 'CAPS II São Caetano',
      end:
        'Rua prof° Goes Calmon s/n . Antigo Instituto Helena Jambeir, próx a 4 Delegacia, Esquina com a Policlinica de São Caetano.',
      tel: '3259-2556',
      valor: 'Gratuito',
      servicos: [this.SERVICO.CAPS],
      descricao_servicos: 'das 08 as 17 hrs',
      mapa:
        ' <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5763654616057!2d-38.48179314949799!3d-12.934927190835102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161aabe0ace397%3A0x419482a3a2bf82aa!2sRua+Professor+Francisco+G%C3%B3es+Calmon+-+S%C3%A3o+Caetano%2C+Salvador+-+BA%2C+40390-675!5e0!3m2!1sen!2sbr!4v1531393267662" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> ',
      bairros_atendidos:
        'Alto da Boa Vista, Alto do Bom Viver, Alto do Peru, Baixa do Cacau, Baixa do Camurugipe, Bentivi, Boa Vista São Caetano, Bom Juá, Brasilgás, Calafate, Campinas de Pirajá, Capelinha de São Caetano, Cj. Dos Rodoviários, Fazenda Grande do Retiro, Formiga, Goméia, Jaqueira do Carneiro, Jardim Lobato, Largo do Retiro, Largo do Tanque, Loteamento Profilurb, Marechal Rondon, Marotinho, Para, Parque Schindler, Pirajá, Retiro, San Martin, Santa Luzia do Lobato, São Bartolomeu, São Caetano, Sussunga, Usiba, Valéria, Vila Leal.'
    },
    {
      nome: 'Caps AD III Gey Espinheira',
      end: 'Estrada Velha de Campinas, n61, Pirajá',
      tel: '3239-1178',
      valor: 'Gratuito',
      servicos: [this.SERVICO.CAPS, this.SERVICO.DROGAS],
      descricao_servicos: '24 hrs',
      mapa:
        ' <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15554.305471555159!2d-38.48838605723118!3d-12.934927035121607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716100e428e141f%3A0xe0c3af6a67dcae36!2sCAPS+AD+III+Gey+Espinheira!5e0!3m2!1sen!2sbr!4v1531393503388" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> ',
      bairros_atendidos:
        'Alto da Boa Vista, Alto do Bom Viver, Alto do Peru, Baixa do Cacau, Baixa do Camurugipe, Bentivi, Boa Vista São Caetano, Bom Juá, Brasilgás, Calafate, Campinas de Pirajá, Capelinha de São Caetano, Cj. Dos Rodoviários, Fazenda Grande do Retiro, Formiga, Goméia, Jaqueira do Carneiro, Jardim Lobato, Largo do Retiro, Largo do Tanque, Loteamento Profilurb, Marechal Rondon, Marotinho, Para, Parque Schindler, Pirajá, Retiro, San Martin, Santa Luzia do Lobato, São Bartolomeu, São Caetano, Sussunga, Usiba, Valéria, Vila Leal.'
    },
  
    // Adryan
    {
      nome: 'CAPS Franco Basaglia',
      end: 'Rua Aristóteles Costa Leal no 36 - Piatã (Atrás do Habib ́s).',
      tel: '3611-3546',
      valor: 'Gratuito',
      servicos: [this.SERVICO.CAPS],
      descricao_servicos: '',
      mapa:
        ' <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.3119637525165!2d-38.38215334949757!3d-12.95187869082394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71619e0a1c9aa21%3A0x41960895b550d616!2sCAPS+II+-+Franco+Basaglia!5e0!3m2!1sen!2sbr!4v1531316139520" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> ',
      bairros_atendidos:
        'Abaeté, Aeroporto, Aldeia Jaguaribe, Alto do Coqueiro, Alto do Girassol, Alto do São João, Areia  Branca, Bairro da Paz, Baixa do Dendê, Barro Duro, Cajueiro, Campinas, Capelão, Ceasa, Costa Verde, Itapuã, Jardim Atalaia, Jardim das Margaridas, Jardim Jaguaribe, Jardim Piatã, Jardim tropical, Loteamento Alameda Praia, Loteamento Cassangê, Loteamento Colina Fonte, Loteamento Farol Itapuã, Loteamento Pedra do sal, Loteamento Praia do Flamengo, Loteamento Stela Maris, Malvinas, Mussurunga, Nova Brasília'
    },
    {
      nome: 'CAPS II Liberdade',
      end: 'Rua Jardim Vera Cruz, Quadra 01, Lote 06- IAPI. Rua da Clínica Bom',
      tel: '3611-4140',
      valor: 'Gratuito',
      servicos: [this.SERVICO.CAPS],
      descricao_servicos: '3611-4140',
      mapa:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2817449301624!2d-38.48548530080978!3d-12.95381471183436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161acb570189e1%3A0xe6cec0288de4755c!2sSpace+Healing!5e0!3m2!1sen!2sbr!4v1531316906445" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>  ',
      bairros_atendidos:
        'Baixa de Quintas, Bairro Guarani, Baixa dos Frades, IAPI, Barros Reis, Caixa D’Água, Cidade Nova, Curuzú, Estrada da Rainha, Freitas Henrique, IAPI, Japão, Jardim Eldorado, Jardim Joana D’Arc, Jardim Vera Cruz, Lapinha, Liberdade, Nova Divinéia, Pau Miúdo, Pero Vaz, Queimadinho, Rocinha do IAPI, Santa Mônica, Sertanejo, Sieiro.'
    },
    {
      nome: 'CAPS IA Liberdade',
      end: 'R. Conde de Porto Alegre 11, IAPI. Prox. Ao Hospital Mário Leal.',
      tel: '3611-9011',
      valor: 'Gratuito',
      servicos: [this.SERVICO.CAPS],
      descricao_servicos: '3611-9011',
      mapa:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2183297441557!2d-38.49022514949762!3d-12.957876590820021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716053276469845%3A0xd7122a7ad270df35!2sHospital+Especializado+Mario+Leal!5e0!3m2!1sen!2sbr!4v1531317201945" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>  ',
      bairros_atendidos:
        'BARRA, RIO VERMELHO,BROTAS, CABULA,BEIRU, CENTRO HISTÓRICO, ITAPAGIPE, LIBERDADE, SÃO CAETANO, VALÉRIA, SUBÚRBIO FERROVIÁRIO'
    },
  
    // Gabriel
    {
      nome: 'CAPS II Maria Celia da Rocha',
      end:
        'Sub. Ferroviário Rua José Pires Castelo Branco, n 30 Praia Grande. CEP 40720-720',
      tel: '3397-2689',
      valor: 'Gratuito',
      servicos: [this.SERVICO.CAPS],
      descricao_servicos: '08hrs às 17hrs',
      mapa:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6473746735232!2d-38.52519498517775!3d-12.99439129084095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7160486c8000045%3A0xf5d303c0b8532d51!2sObservat%C3%B3rio+Baiano+sobre+Subst%C3%A2ncias+Psicoativas+-+CETAD%2FUFBA!5e0!3m2!1spt-BR!2sbr!4v1531414914900" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>',
      bairros_atendidos:
        'Alto da Boa Vista do Lobato, Alto do Cabrito, Alto do Cruzeiro – 2, Alto do Lobato, Alto Santa Terezinha, Baixa da Boa Vista do Lobato, Bariri, Base Naval de Aratu, Beira Mangue, Bela Vista do Lobato, Bela Vista Periperi, Coutos, Escada, Felicidade, Gameleira, Ilha Amarela, Ilha de Maré, Itacaranha, Lobato, Loteamento Fazenda Coutos, Mirantes de Periperi, Novos Alagados, Paripe, Parque São Bartolomeu, Pedrinhas, Periperi, Plataforma, Ponta da Sapoca, Praia Grande, Rio Sena, São Tomé de Paripe, Setúbal, Tubarão, Vista'
    },
    {
      nome: 'CAPS II Nzinga (ONG)',
      end: 'R. Santa Filomena em frente ao PSF de São Tomé de Paripe',
      tel: '3521-4706',
      email: 'capsnzinga@ig.com.br',
      valor: 'Gratuito',
      servicos: [this.SERVICO.CAPS],
      descricao_servicos: '08hrs às 17hrs',
      mapa: '',
      bairros_atendidos:
        'Alto da Boa Vista do Lobato, Alto do Cabrito, Alto do Cruzeiro – 2, Alto do Lobato, Alto Santa Terezinha, Baixa da Boa Vista do Lobato, Bariri, Base Naval de Aratu, Beira Mangue, Bela Vista do Lobato, Bela Vista Periperi, Coutos, Escada, Felicidade, Gameleira, Ilha Amarela, Ilha de Maré, Itacaranha, Lobato, Loteamento Fazenda Coutos, Mirantes de Periperi, Novos Alagados, Paripe, Parque São Bartolomeu, Pedrinhas, Periperi, Plataforma, Ponta da Sapoca, Praia Grande, Rio Sena, São Tomé de Paripe, Setúbal, Tubarão, Vista'
    },
  
    // Evandro
    {
      nome: 'Consultório de Psicologia Adam Pereira',
      end:
        'Estrada Guandu do Sapê, 112, sl 201, Campo Grande, Rio de Janeiro - RJ',
      tel: '(21)99246-8979',
      whatsapp: '(21)99246-8979',
      email: 'adam.psique@gmail.com',
      valor: 'Valor social (valor acessível)',
      servicos: [this.SERVICO.ONLINE, this.SERVICO.INDIVIDUAL],
      descricao_servicos:
        'Psicologia. Atendimento online de diversas cidades do Brasil e exterior. www.psicologiaviva.com.br/adampereira',
      mapa:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.752594523973!2d-43.563493985034825!3d-22.885595985022633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9be3d8b1d97801%3A0x4bde266ba454f14c!2sEstr.+Guand%C3%BA+do+Sap%C3%A9%2C+112+-+Campo+Grande%2C+Rio+de+Janeiro+-+RJ%2C+23075-000!5e0!3m2!1spt-BR!2sbr!4v1531978532356" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
    },
  
    //Williams
    {
      nome: 'A. A. Grupo - 26',
      end: 'R. Elmano Silveira Castro, 1A',
      tel: '(71) 3322-2963',
      valor: 'Contribuição voluntária',
      servicos: [this.SERVICO.DROGAS],
      descricao_servicos: 'Auxílio a individuo com problemas alcoólicos',
      mapa:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.257528236325!2d-38.48325668517819!3d-12.955365990866555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161acc7378dbc9%3A0xc2f2ccf2abcbca04!2sA.+A.+Grupo+-+26!5e0!3m2!1spt-BR!2sbr!4v1531927300676" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
    },
    {
      nome: 'Grupo Brotas',
      end: 'Av. Dom João VI, 423',
      tel: '(71) 98213-1953',
      valor: 'Contribuição voluntária',
      servicos: [this.SERVICO.DROGAS],
      descricao_servicos: 'Auxílio a individuo com problemas alcoólicos',
      mapa:
        ' <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.732428717619!2d-38.484210949558204!3d-12.9889581636326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161b4a674c07a7%3A0x4951edf977d21e07!2sGrupo+Brotas+de+Narc%C3%B3ticos+An%C3%B4nimos!5e0!3m2!1spt-BR!2sbr!4v1531927536286" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
    },
    {
      nome: 'A. A. Grupo Libertação ',
      end: 'Rua Nelson Antonio Bahia, s/n',
      tel: '(71) 3322-2963',
      valor: 'Contribuição voluntária',
      servicos: [this.SERVICO.DROGAS],
      descricao_servicos: 'Auxílio a individuo com problemas alcoólicos',
      mapa:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8360543033577!2d-38.36761724955931!3d-12.91825656219534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161703f4cbe311%3A0xe3ef967e29329c3c!2sA.+A.+Grupo+Liberta%C3%A7%C3%A3o+-+26!5e0!3m2!1spt-BR!2sbr!4v1531927594266" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
    },
    {
      nome: 'A. A. Grupo Unidos de Brotas',
      end: 'R. Cosme de Farias, 42',
      tel: '(71) 3322-2963',
      valor: 'Contribuição voluntária',
      servicos: [this.SERVICO.DROGAS],
      descricao_servicos: 'Auxílio a individuo com problemas alcoólicos',
      mapa:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.888649864694!2d-38.49734524955829!3d-12.978973163429142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71604cf7b513c8b%3A0xf64869a42dd39f27!2sA.+A.+Grupo+Unidos+de+Brotas+-+26!5e0!3m2!1spt-BR!2sbr!4v1531927638706" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
    },
    {
      nome: 'A. A. Grupo Sete ',
      end: 'Avenida José Joaquim Seabra, s/n',
      tel: '(71) 3322-2963',
      valor: 'Contribuição voluntária',
      servicos: [this.SERVICO.DROGAS],
      descricao_servicos: 'Auxílio a individuo com problemas alcoólicos',
      mapa:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.978233227609!2d-38.50972404955828!3d-12.973243963312461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71604e7c32fe977%3A0xbe83a5c30baa470d!2sA.+A.+Grupo+Sete+Portas+-+26!5e0!3m2!1spt-BR!2sbr!4v1531927810186" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
    },
    {
      nome: 'A. A. Grupo Caminho',
      end: 'R. Marujos do Brasil, 5',
      tel: '(71) 3322-2963',
      valor: 'Contribuição voluntária',
      servicos: [this.SERVICO.DROGAS],
      descricao_servicos: 'Auxílio a individuo com problemas alcoólicos',
      mapa:
        '<iframe src="https://www.google.com/maps/embed?pb" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
    },
    {
      nome: 'A. A. Grupo Cabula VI',
      end: 'R. Teódulo de Albuquerque, 298',
      tel: '(71) 3322-2963',
      valor: 'Contribuição voluntária',
      servicos: [this.SERVICO.DROGAS],
      descricao_servicos: 'Auxílio a individuo com problemas alcoólicos',
      mapa:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2847568162692!2d-38.444730549558685!3d-12.953621762913238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161a61da0de185%3A0xcd329b4a690d47c7!2sA.+A.+Grupo+Cabula+VI+-+26!5e0!3m2!1spt-BR!2sbr!4v1531928209598" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
    },
    // Williams
    {
      nome: 'Narcóticos Anônimos',
      end: 'Praça da Matriz, 04 - São Cristóvão, Salvador - BA, 41510-090',
      tel: '(71) 3322-7757',
      valor: 'Contribuição voluntária',
      servicos: [this.SERVICO.DROGAS],
      descricao_servicos:
        'Auxílio ao indivíduo com problemas relativos as drogas',
      mapa:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9381034876596!2d-38.355463449559345!3d-12.911699762062517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161653897e6229%3A0x9700805773f10ead!2zTmFyY8OzdGljb3MgQW7DtG5pbW9z!5e0!3m2!1spt-BR!2sbr!4v1532092895985" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
    },
    {
      nome: 'Narcoticos Anonimos',
      end: 'D, R. J St. H Mussurunga I, 1 - Mussurunga II, Salvador - BA',
      tel: '(71) 98213-1953',
      valor: 'Contribuição voluntária',
      servicos: [this.SERVICO.DROGAS],
      descricao_servicos:
        'Auxílio ao indivíduo com problemas relativos as drogas',
      mapa:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8465945110356!2d-38.36755058517858!3d-12.917579490891352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71617038abed2cb%3A0xdf544489cf7478bd!2sNarcoticos+Anonimos!5e0!3m2!1spt-BR!2sbr!4v1532093692247" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
    },
    {
      nome: 'Grupo Esperança de Narcóticos Anônimos',
      end: 'R. Esperança, 290 - Stiep, Salvador - BA',
      tel: '(71) 98213-1953',
      valor: 'Contribuição voluntária',
      servicos: [this.SERVICO.DROGAS],
      descricao_servicos:
        'Auxílio ao indivíduo com problemas relativos as drogas',
      mapa:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.4848399690122!2d-38.48514394955811!3d-13.004767563955092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161b55052101cb%3A0xa0bd6ed35077e916!2sGrupo+Esperan%C3%A7a+de+Narc%C3%B3ticos+An%C3%B4nimos!5e0!3m2!1spt-BR!2sbr!4v1532093797118" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
    },
    {
      nome: 'Grupo Milagres de Narcóticos Anônimos',
      end: 'Água de Meninos, Salvador - State of Bahia, 40301-155',
      tel: '(71) 98213-1953',
      valor: 'Contribuição voluntária',
      servicos: [this.SERVICO.DROGAS],
      descricao_servicos:
        'Auxílio ao indivíduo com problemas relativos as drogas',
      mapa:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.179616175057!2d-38.50529104955855!3d-12.960355663050233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7160523d5fa6d35%3A0x57cfd50aadf2391a!2sGrupo+Milagres+de+Narc%C3%B3ticos+An%C3%B4nimos!5e0!3m2!1spt-BR!2sbr!4v1532093874593" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
    },
    {
      nome: 'Grupo Lapa de Praça Conselheiro Almeida Couto',
      end: 'Praça Conselheiro Almeida Couto - Nazaré, Salvador - BA, 40025-390',
      tel: '(71) 98213-1953',
      valor: 'Contribuição voluntária',
      servicos: [this.SERVICO.DROGAS],
      descricao_servicos:
        'Auxílio ao indivíduo com problemas relativos as drogas',
      mapa:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9576108583824!2d-38.504350949558464!3d-12.974563063339346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71604dcca3df9f7%3A0x907abba08694ca0d!2sGrupo+Lapa+de+Narc%C3%B3ticos+An%C3%B4nimos!5e0!3m2!1spt-BR!2sbr!4v1532093992414" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
    },
    {
      nome: 'Grupo Narcoticos Anonimos Itapua',
      end: 'R. do Céu, 12 - Itapuã, Salvador - BA, 41610-450',
      tel: '(71) 98213-1953',
      valor: 'Contribuição voluntária',
      servicos: [this.SERVICO.DROGAS],
      descricao_servicos:
        'Auxílio ao indivíduo com problemas relativos as drogas',
      mapa:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31108.947797914814!2d-38.41002564142727!3d-12.932225436343277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716177dd266c1ed%3A0x9d82981de3fb46a2!2sGrupo+Narcoticos+Anonimos+Itapua!5e0!3m2!1spt-BR!2sbr!4v1532094051294" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
    },
    {
      nome: 'Grupo Brotas de Narcoticos Anonimos',
      end: 'Av. Dom João VI, 423 - Brotas, Salvador - BA, 40285-000',
      tel: '(71) 98213-1953',
      valor: 'Contribuição voluntária',
      servicos: [this.SERVICO.DROGAS],
      descricao_servicos:
        'Auxílio ao indivíduo com problemas relativos as drogas',
      mapa:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.7324287176093!2d-38.48421094955817!3d-12.988958163632601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161b4a674c07a7%3A0x4951edf977d21e07!2sGrupo+Brotas+de+Narc%C3%B3ticos+An%C3%B4nimos!5e0!3m2!1spt-BR!2sbr!4v1532094184290" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
    },
    {
      nome: 'Grupo Itapuã Narcóticos Anônimos',
      end: 'R. Ivana, s/n - Itapuã, Salvador - BA, 40610-450',
      tel: '(71) 98213-1953',
      valor: 'Contribuição voluntária',
      servicos: [this.SERVICO.DROGAS],
      descricao_servicos:
        'Auxílio ao indivíduo com problemas relativos as drogas',
      mapa:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d124407.5288544306!2d-38.5522398!3d-12.9887762!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71610e9a3d16a29%3A0x72190debbf1ec98f!2sGrupo+Itapu%C3%A3+Narc%C3%B3ticos+An%C3%B4nimos!5e0!3m2!1spt-BR!2sbr!4v1532094341184" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
    },
  
    // Evandro
    {
      nome: 'Clínica Semdor',
      end: 'Av. Garibaldi, nº 1815, CME sala 101-B, Ondina – Salvador – Bahia',
      tel: '(71)3332-3165 | 98122-1203',
      valor: 'Planos de saúde ou particular',
      servicos: [this.SERVICO.PLANO, this.SERVICO.INDIVIDUAL],
      descricao_servicos: 'Psicologia',
      mapa:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.4958240792207!2d-38.504465385177646!3d-13.004066590834594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716035f68fd4fa5%3A0xcc461d33a2edf719!2sCl%C3%ADnica+SEMDOR!5e0!3m2!1spt-BR!2sbr!4v1532249067082" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
    },
    {
      nome: 'Clínica Viterbo',
      end: 'SALVADOR TRADE, BOULEVARD SIDE, COMÉRCIO, HANGAR - PARALELA, ITAIGARA, CALÇADA e SALVADOR NORTE SHOPPING',
      tel: '(71) 3016-3015',
      whatsapp: '(71) 99991-5525',
      valor: 'Planos de saúde ou particular',
      servicos: [this.SERVICO.PLANO, this.SERVICO.INDIVIDUAL],
      descricao_servicos: 'Psicologia',
    },
    {
      nome: 'Ambulatório Oswaldo Camargo',
      end: 'R. Itabuna S/N, Rio Vermelho Prox. Antiga Coca-Cola',
      tel: '3611-5600',
      valor: 'Gratuito',
      servicos: [this.SERVICO.MEDICAMENTOS],
      descricao_servicos: 'Fornece Medicamentos Psiquiátricos. Neurologia (a partir de 13 anos) Psiquiatria Psicologia: Psicoterapia individual/ Psicoterapia de Grupo/ Psicoterapia Familiar Serviço Social e Enfermagem',
      mapa:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.4381307725484!2d-38.49429658517754!3d-13.007747990832177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7160356f731022b%3A0xe01610742ab37e21!2sCentro+de+Saude+Mental+Oswaldo+Camargo!5e0!3m2!1spt-BR!2sbr!4v1531406263467" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>',
    },
    {
      nome: 'Centro de Saúde Mental Alvaro Rubin de Pinho',
      end: 'Rua Augusto Mendonça, 15, Dendezeiros, Bonfim, Salvador - BA, CEP: 40415-031',
      tel: '3611-5600',
      valor: 'Gratuito',
      servicos: [this.SERVICO.MEDICAMENTOS],
      descricao_servicos: 'Fornece Medicamentos Psiquiátricos. Neurologia (a partir de 13 anos) Psiquiatria Psicologia: Psicoterapia individual/ Psicoterapia de Grupo/ Psicoterapia Familiar Serviço Social e Enfermagem',
      mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62209.0867957901!2d-38.51289994717869!3d-12.967505354509665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7160560c2abde69%3A0x522296afe0bdc1df!2sR.+Augusto+de+Mendon%C3%A7a%2C+15+-+Bonfim%2C+Salvador+-+BA%2C+40301-155!5e0!3m2!1spt-BR!2sbr!4v1538731790531" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>',
    },
    {
      nome: 'Hospital Juliano Moreira',
      end: 'Rua Prof. Edgar Santos, s/n, Narandiba (próximo ao Cabula VI).',
      tel: '3231-6644 / 3231-2359 3256-0869 / 3386-4385/3386-0696',
      valor: 'Gratuito',
      servicos: [this.SERVICO.EMERGENCIA, this.SERVICO.INDIVIDUAL, this.SERVICO.GRUPO],
      descricao_servicos: 'Psiquiatria, Emergência Psiquiátrica, Psicoterapia individual e em grupo',
      mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15553.19070998105!2d-38.4495004!3d-12.952794!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x91e90b3e71a74c92!2sHospital+Juliano+Moreira!5e0!3m2!1spt-BR!2sbr!4v1538154861244" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>',
    },
    {
      nome: 'Hospital Especializado Mário Leal',
      end: 'Rua Conde de Porto Alegre, no 11, IAPI.',
      tel: '3256-0869 / 3386-4385/0696',
      valor: 'Gratuito',
      servicos: [this.SERVICO.EMERGENCIA, this.SERVICO.INDIVIDUAL, this.SERVICO.GRUPO],
      descricao_servicos: 'Atendimento psiquiátrico e psicológico em regime de internamento e ambulatorial, psicoterapia individual e em grupo para adultos, terapia ocupacional.',
      mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15552.87331840325!2d-38.4880311!3d-12.9578766!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd7122a7ad270df35!2sHospital+Especializado+Mario+Leal!5e0!3m2!1spt-BR!2sbr!4v1538155176605" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
    },
    {
      nome: '5º Centro de Saúde Clementino Fraga - Pronto Atendemento Psiquiatrico',
      end: 'Av. Centenário, s/n - 5º Centro',
      tel: '(71) 3321-0800',
      valor: 'Gratuito',
      email: 'papsiquiatrico@gmail.com',
      servicos: [this.SERVICO.EMERGENCIA, this.SERVICO.INDIVIDUAL, this.SERVICO.GRUPO, this.SERVICO.MEDICAMENTOS],
      descricao_servicos: 'Emergência psiquiátrica, Internação, Atendimento em Enfermagem, Atendimento em Grupo, Atendimento Psiquiátrico, Serviço Social.',
      mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15550.8054554341!2d-38.5111966!3d-12.9909428!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xaf1f5ff524879677!2s5%C2%BA+Centro+de+Sa%C3%BAde+Clementino+Fraga+%3A+Pronto+Atendemento+Psiquiatrico!5e0!3m2!1spt-BR!2sbr!4v1539774725145" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
    },
    {
      nome: 'Clínica Ápice',
      end: 'R. Macapá, 181 - Ondina, Salvador - BA, 40170-150',
      tel: '(71) 3028-8350',
      valor: 'Plano de Saúde',
      email: 'contato@clinicaapice.com.br',
      servicos: [this.SERVICO.EMERGENCIA, this.SERVICO.INDIVIDUAL, this.SERVICO.PLANO],
      descricao_servicos: 'Emergência psiquiátrica, Internação Atendimento Psiquiátrico.',
      mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15549.765443851622!2d-38.5080197!3d-13.0075419!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x192378876d4d830d!2sCl%C3%ADnica+APICE+IN!5e0!3m2!1spt-BR!2sbr!4v1539775854117" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
    },
    {
      nome: 'Ambulatório CSM Aristides Novis',
      end: 'R. Almirante Alves Camara S/N, Engenho Velho de Brotas. Prox. Secret. Educação do Município',
      tel: '(71) 3611-2954',
      valor: 'Gratuito',
      servicos: [this.SERVICO.INDIVIDUAL, this.SERVICO.MEDICAMENTOS],
      descricao_servicos: 'Ambulatório e medicamentos gratuitos.',
      mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15551.324336633877!2d-38.4998635!3d-12.9826534!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb4cc0ed7e8f3cdbf!2sCentro+de+Sa%C3%BAde+Aristides+N%C3%B3vis!5e0!3m2!1spt-BR!2sbr!4v1539776423263" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
    },
  ];

}
