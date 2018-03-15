import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppleComponent } from './apple/apple.component';
import { FormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';
import { MatSnackBarModule } from '@angular/material';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { InputComponent } from './input/input.component';
import { MatInputModule } from '@angular/material/input';
import { RadioComponent } from './radio/radio.component';
import { MatRadioModule } from '@angular/material/radio';
import { SelectComponent } from './select/select.component';
import { MatSelectModule } from '@angular/material/select';
import { SliderComponent } from './slider/slider.component';
import { MatSliderModule } from '@angular/material/slider';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MenuComponent } from './menu/menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ListComponent } from './list/list.component';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { CardComponent } from './card/card.component';
import { StepperComponent } from './stepper/stepper.component';
import { MatStepperModule } from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { TabsComponent } from './tabs/tabs.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { ButtonComponent } from './button/button.component';
import { MatButtonModule } from '@angular/material/button';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ChipsComponent } from './chips/chips.component';
import { MatChipsModule } from '@angular/material/chips';
import { ForobservableComponent } from './forobservable/forobservable.component';
import { HttpClientModule } from '@angular/common/http'
import { NewserviceService } from './newservice.service';
import { TableComponent } from './table/table.component'
import { MatTableModule } from '@angular/material/table';
import { ForServiceComponent } from './for-service/for-service.component';
import { ServiceOneService } from './service-one.service';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PassParametersComponent } from './pass-parameters/pass-parameters.component';
import { HighlightDirective } from './highlight.directive';
import { ForNgSwitchDirectivesComponent } from './for-ng-switch-directives/for-ng-switch-directives.component';
import { ForpipesComponent } from './forpipes/forpipes.component';
import { CustomPipePipe } from './custom-pipe.pipe';
import { HeroComponent } from './hero/hero.component';
import { ForLifeEventsComponent } from './for-life-events/for-life-events.component';
import { AuthGuard } from './auth.guard';
import { HttpModule } from '@angular/http';

const appRoutes: Routes = [
  { path: '', component: ButtonComponent },
  { path: 'button', component: ButtonComponent,canActivate:[AuthGuard] },
  { path: 'chips', component: ChipsComponent },
  { path: 'list', component: ListComponent },
  { path: 'select', component: SelectComponent },
  { path: 'silder', component: SliderComponent },
  { path: 'autocomplete', component: AutocompleteComponent },
  { path: 'checkbox', component: CheckboxComponent },
  { path: 'date', component: DatepickerComponent },
  { path: 'radio', component: RadioComponent },
  { path: 'input', component: InputComponent },
  { path: 'pipes', component: ForpipesComponent },
  { path: 'case', component: ForNgSwitchDirectivesComponent },
  { path: 'pass/:id/:name', component: PassParametersComponent },
  { path: 'life', component: ForLifeEventsComponent },
  { path: '**', component: PageNotFoundComponent }

];


@NgModule({
  declarations: [
    AppComponent,
    AppleComponent,
    AutocompleteComponent,
    CheckboxComponent,
    DatepickerComponent,
    InputComponent,
    RadioComponent,
    SelectComponent,
    SliderComponent,
    SlideToggleComponent,
    MenuComponent,
    SidenavComponent,
    ListComponent,
    CardComponent,
    StepperComponent,
    TabsComponent,
    ExpansionPanelComponent,
    ButtonComponent,
    ButtonToggleComponent,
    ChipsComponent,
    ForobservableComponent,
    TableComponent,
    ForServiceComponent,
    PageNotFoundComponent,
    PassParametersComponent,
    HighlightDirective,
    ForNgSwitchDirectivesComponent,
    ForpipesComponent,
    CustomPipePipe,
    HeroComponent,
    ForLifeEventsComponent
  ],
  imports: [MatSnackBarModule, MatAutocompleteModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule, MatInputModule,
    BrowserModule, BrowserAnimationsModule, FormsModule, MatRadioModule,
    MatSelectModule, MatSliderModule, MatSlideToggleModule, MatMenuModule, MatSidenavModule, MatIconModule, MatToolbarModule,
    MatListModule, MatCardModule, MatStepperModule, ReactiveFormsModule, MatTabsModule, MatExpansionModule, MatButtonModule,
    MatButtonToggleModule, MatChipsModule, HttpClientModule, MatTableModule,
    RouterModule.forRoot(appRoutes),HttpModule
  ],
  providers: [NewserviceService, ServiceOneService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {


}
