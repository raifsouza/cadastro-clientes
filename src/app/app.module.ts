import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgIconsModule } from '@ng-icons/core';
import { heroUsers } from '@ng-icons/heroicons/outline';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ClientListComponent } from './components/pages/client-list/client-list.component';
import { CadastroComponent } from './components/pages/cadastro/cadastro.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrModule } from 'ngx-toastr';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { MessageService } from 'primeng/api';
@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    CadastroComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgIconsModule.withIcons({ heroUsers }),
    ToastrModule.forRoot(),
    FontAwesomeModule,
    NgxMaskDirective,
    NgxMaskPipe,
    ReactiveFormsModule,
    MessageModule,
    MessagesModule,
  ],
  providers: [provideNgxMask(),MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
