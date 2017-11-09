import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppsComponent } from './apps.component';
import { AppsDetailComponent } from './apps-detail/apps-detail.component';
import { AppsLogsComponent } from './apps-detail//apps-logs/apps-logs.component';
import { AppsConfigComponent } from './apps-detail//apps-config/apps-config.component';
import { AppsBuildsComponent } from './apps-detail//apps-builds/apps-builds.component';
import { AppsDomainsComponent } from './apps-detail//apps-domains/apps-domains.component';
import { AppsReleasesComponent } from './apps-detail//apps-releases/apps-releases.component';
import { AppsPodsComponent } from './apps-detail//apps-pods/apps-pods.component';

const routes: Routes = [
  {
    path: '',
    component: AppsComponent
  },
  {
    path: ':id',
    component: AppsDetailComponent,
    children: [
      {
        path: 'logs',
        component: AppsLogsComponent
      },
      {
        path: 'config',
        component: AppsConfigComponent
      },
      {
        path: 'builds',
        component: AppsBuildsComponent
      },
      {
        path: 'domains',
        component: AppsDomainsComponent
      },
      {
        path: 'releases',
        component: AppsReleasesComponent
      },
      {
        path: 'pods',
        component: AppsPodsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppsRoutingModule {}
