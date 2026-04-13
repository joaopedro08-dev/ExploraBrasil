import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'sul/parana',
    loadChildren: () => import('./sul/parana/parana.module').then( m => m.ParanaPageModule)
  },
  {
    path: 'sul/santacatarina',
    loadChildren: () => import('./sul/santacatarina/santacatarina.module').then( m => m.SantacatarinaPageModule)
  },
  {
    path: 'sul/riograndedosul',
    loadChildren: () => import('./sul/riograndedosul/riograndedosul.module').then( m => m.RiograndedosulPageModule)
  },
  {
    path: 'sudeste/sao-paulo',
    loadChildren: () => import('./sudeste/sao-paulo/sao-paulo.module').then( m => m.SaoPauloPageModule)
  },
  {
    path: 'sudeste/rio-de-janeiro',
    loadChildren: () => import('./sudeste/rio-de-janeiro/rio-de-janeiro.module').then( m => m.RioDeJaneiroPageModule)
  },
  {
    path: 'sudeste/minas-gerais',
    loadChildren: () => import('./sudeste/minas-gerais/minas-gerais.module').then( m => m.MinasGeraisPageModule)
  },
  {
    path: 'sudeste/espirito-santo',
    loadChildren: () => import('./sudeste/espirito-santo/espirito-santo.module').then( m => m.EspiritoSantoPageModule)
  },
  {
    path: 'centrooeste/mato-grosso',
    loadChildren: () => import('./centrooeste/mato-grosso/mato-grosso.module').then( m => m.MatoGrossoPageModule)
  },
  {
    path: 'centrooeste/mato-grosso-do-sul',
    loadChildren: () => import('./centrooeste/mato-grosso-do-sul/mato-grosso-do-sul.module').then( m => m.MatoGrossoDoSulPageModule)
  },
  {
    path: 'centrooeste/goias',
    loadChildren: () => import('./centrooeste/goias/goias.module').then( m => m.GoiasPageModule)
  },
  {
    path: 'centrooeste/distrito-federal',
    loadChildren: () => import('./centrooeste/distrito-federal/distrito-federal.module').then( m => m.DistritoFederalPageModule)
  },
  {
    path: 'norte/amazonas',
    loadChildren: () => import('./norte/amazonas/amazonas.module').then( m => m.AmazonasPageModule)
  },
  {
    path: 'norte/para',
    loadChildren: () => import('./norte/para/para.module').then( m => m.ParaPageModule)
  },
  {
    path: 'norte/rondonia',
    loadChildren: () => import('./norte/rondonia/rondonia.module').then( m => m.RondoniaPageModule)
  },
  {
    path: 'norte/roraima',
    loadChildren: () => import('./norte/roraima/roraima.module').then( m => m.RoraimaPageModule)
  },
  {
    path: 'norte/acre',
    loadChildren: () => import('./norte/acre/acre.module').then( m => m.AcrePageModule)
  },
  {
    path: 'norte/tocantins',
    loadChildren: () => import('./norte/tocantins/tocantins.module').then( m => m.TocantinsPageModule)
  },
  {
    path: 'norte/amapa',
    loadChildren: () => import('./norte/amapa/amapa.module').then( m => m.AmapaPageModule)
  },
  {
    path: 'nordeste/bahia',
    loadChildren: () => import('./nordeste/bahia/bahia.module').then( m => m.BahiaPageModule)
  },
  {
    path: 'nordeste/sergipe',
    loadChildren: () => import('./nordeste/sergipe/sergipe.module').then( m => m.SergipePageModule)
  },
  {
    path: 'nordeste/alagoas',
    loadChildren: () => import('./nordeste/alagoas/alagoas.module').then( m => m.AlagoasPageModule)
  },
  {
    path: 'nordeste/pernambuco',
    loadChildren: () => import('./nordeste/pernambuco/pernambuco.module').then( m => m.PernambucoPageModule)
  },
  {
    path: 'nordeste/paraiba',
    loadChildren: () => import('./nordeste/paraiba/paraiba.module').then( m => m.ParaibaPageModule)
  },
  {
    path: 'nordeste/rio-grande-do-norte',
    loadChildren: () => import('./nordeste/rio-grande-do-norte/rio-grande-do-norte.module').then( m => m.RioGrandeDoNortePageModule)
  },
  {
    path: 'nordeste/ceara',
    loadChildren: () => import('./nordeste/ceara/ceara.module').then( m => m.CearaPageModule)
  },
  {
    path: 'nordeste/piaui',
    loadChildren: () => import('./nordeste/piaui/piaui.module').then( m => m.PiauiPageModule)
  },
  {
    path: 'nordeste/maranhao',
    loadChildren: () => import('./nordeste/maranhao/maranhao.module').then( m => m.MaranhaoPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
