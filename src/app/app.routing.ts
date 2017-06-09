import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ShardersComponent } from './components/sharders/sharders.component';
import { NewsComponent } from './components/news/news.component';
import { ToptenComponent } from './components/topten/topten.component';
import { HomeComponent } from './components/home/home.component';
const appRoutes: Routes = [
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'news', component: NewsComponent
    },
    {
        path: 'sharders', component: ShardersComponent
    },
    {
        path: 'topten', component: ToptenComponent
    }
];
export const appRoutingProviders: any[] = [];
export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash: true});