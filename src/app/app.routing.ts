import { Routes, RouterModule } from '@angular/router';
import { AppUrl } from './app.url';
import { LoginComponent } from './components/login/login.component';
import { SummaryComponent } from './components/summary/summary.component';
import { SaleInfoComponent } from './components/sale-info/sale-info.component';
// import { ExamChartComponent } from './components/exam-chart/exam-chart.component';
import { MonthlyMeetingComponent } from './components/monthly-meeting/monthly-meeting.component';
import { NewsManagementComponent } from './components/news-management/news-management.component';
import { NewsEditComponent } from './components/news-edit/news-edit.component';
import { NewsContentComponent } from './components/news-content/news-content.component';

import { TestSignalrComponent } from './components/test-signalr/test-signalr.component';
import { MobileComponent } from './components/mobile/mobile.component';
import { ContractComponent } from './components/contract/contract.component';
import { ContractPaymentComponent } from './components/contract-payment/contract-payment.component';
import { TargetReportComponent } from './components/target-report/target-report.component';
import { PayReportComponent } from './components/pay-report/pay-report.component';
import { BanksComponent } from './components/banks/banks.component';

const RouteList: Routes = [
    // { path: '', redirectTo: AppUrl.Home, pathMatch: 'full' },
    // { path: '', redirectTo: AppUrl.Contract, pathMatch: 'full'},
    { path: AppUrl.Login, component: LoginComponent },
    { path: AppUrl.Summary, component: SummaryComponent },
    { path: '', redirectTo: AppUrl.Summary, pathMatch: 'full' },
    { path: AppUrl.SaleInfo, component: SaleInfoComponent },
    // { path: AppUrl.ExamChart, component: ExamChartComponent },
    { path: AppUrl.MonthlyMeeting, component: MonthlyMeetingComponent },
    { path: AppUrl.NewsManagement, component: NewsManagementComponent },
    { path: AppUrl.NewsEdit, component: NewsEditComponent },
    { path: AppUrl.NEWSContent, component: NewsContentComponent},
    { path: AppUrl.Chat, component: TestSignalrComponent },
    { path: AppUrl.Mobile, component: MobileComponent },
    { path: AppUrl.Contract, component: ContractComponent },
    { path: AppUrl.ContractPayment, component: ContractPaymentComponent },
    { path: AppUrl.TargetReport, component: TargetReportComponent },
    { path: AppUrl.PayReport, component: PayReportComponent },
    { path: AppUrl.BankSelection, component: BanksComponent }
];

export const AppRouting = RouterModule.forRoot(RouteList);
