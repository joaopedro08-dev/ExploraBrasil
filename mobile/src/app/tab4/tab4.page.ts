import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  standalone: false,
})
export class Tab4Page implements OnInit {

  constructor() { }

  sobreProjeto = {
    titulo: 'Sobre o Projeto',
    texto1: 'O aplicativo Explora Brasil nasceu de uma iniciativa conjunta entre alunos e professores do SESI 144 e do SENAI 794, ambos localizados na cidade de Ourinhos, no interior do estado de São Paulo.',
    texto2: 'Essa parceria educacional teve como propósito unir tecnologia, conhecimento e práticas pedagógicas em um projeto inovador que proporciona uma imersão nas riquezas do nosso país.'
  };

  creditosTitulo = 'Créditos';

  equipePesquisa = {
    titulo: 'Equipe de Pesquisa',
    turmaA: [
      'Ana Júlia Martins da Silva',
      'Ana Livia Domingas de Oliveira',
      'André Santos Conte',
      'Caio Mazini Viana',
      'Diego Santiago da Silva',
      'Gabriel Silveira Mariano de Souza',
      'Guilherme Ferreira Matias de Oliveira',
      'Gustavo Bonifácio Ferreira',
      'Igor Schanoski Pedro da Silva',
      'Kauany Gabrieli Ribeiro Cavatoni',
      'Laís Elias da Silva',
      'Leandro de Oliveira Sibim',
      'Lívia Araujo Berlandi',
      'Maria Clara Milhorança Verri',
      'Maria Eduarda Abreu Benedito',
      'Maria Eduarda Da Silva',
      'Maria Eduarda de Andrade Soares',
      'Matheus Guerra Brisola Cardoso',
      'Murilo Mesquita Molina',
      'Nicole dos Santos Moreira',
      'Nicoli de Camargo Miranda Farias',
      'Pedro Henrique Moreira Redondo',
      'Renan Cadamuro Carrara',
      'Vinicius Feliciano Barbosa'
    ],
    turmaB: [
      'Ana Luiza Mello de Oliveira',
      'Ana Luiza Vieira Pazinato',
      'Caique da Silva Campos',
      'Carlos Daniel Veigas Silva',
      'Eliza Praxedes Branco',
      'Gabriel Depizol Brito',
      'Gabriel Silverio de Oliveira',
      'Giovana Gabrielly Mazetto de Oliveira',
      'Giulia Barboza Venerando',
      'Giulianna Tavares de Moraes',
      'Guilherme Delfino de Souza',
      'Guilherme Olmo de Freitas',
      'Gustavo Rocha Pereira',
      'Isabela Antunes de Lira',
      'Isadora de Castro Mussi Beffa',
      'João Vitor Gerim Damiani',
      'Juliana de Almeida Nogueira',
      'Kauã Bachiega Graciano',
      'Kauany Cristina de Assis Santos',
      'Kayky Gabriel Corrêa Vici',
      'Lavínia Cristina Burato',
      'Leticia Nunes Gotardi',
      'Lorena Viganó',
      'Lucas Miranda de Souza',
      'Manuela Alves Felix',
      'Maria Clara Benato Gama',
      'Matheus Batista Stopa',
      'Nathalye Mendes Cardoso dos Reis',
      'Samuel dos Santos Luqueto',
      'Sarah Leocadio Antunes Martins',
      'Thariany dos Santos',
      'Yasmim Domingues da Silva'
    ]
  };

  equipeDesenvolvedores = [
    'Ana Lívia Evangelista da Silva',
    'Arthur Vida Leal',
    'Beatriz Cazula Mantovani',
    'Carlos Eduardo Alexandrino',
    'Gabriel Marcelo Lopes da Fonseca',
    'João Pedro Dala Dea Mello',
    'Lívia Stolses Marreira'
  ];

  professores = [
    'João Paulo de Oliveira - Instrutor do SENAI Ourinhos',
    'Mateus Paixão - Professor de Geografia do SESI Ourinhos'
  ];

  ngOnInit() {}
}
