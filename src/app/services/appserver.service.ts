import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppserverService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  public baseUrl = `http://10.192.192.10:8042`;  // don't use local in case of cross domain or ip address
  // public baseUrl = 'http://localhost:8042';
  private apiUrl = `${this.baseUrl}api/v2`;
  // private loginUrl = `${this.apiUrl}/login`;
  // private logoutUrl = `${this.apiUrl}/logout`;
  private branchUrl = `${this.baseUrl}/api/information/getBranch`;
  private saleInfoUrl = `${this.baseUrl}/api/information/getSaleInfo`;
  private saleInfo2 = `${this.baseUrl}/api/information/getSaleInfo2`;
  private getMonthylyMeeting = `${this.baseUrl}/api/information/getMonthlyMeeting`;
  private getPath = `${this.baseUrl}/api/information/getPathInfo`;
  private getPathSaleInfoUrl = `${this.baseUrl}/api/information/getPathInfo2`;
  private createNews = `${this.baseUrl}/api/news/createNews`;
  // private getnews = `${this.baseUrl}/api/news/getNews`;
  private getCate = `${this.baseUrl}/api/news/getCategory`;
  private delNews = `${this.baseUrl}/api/news/deleteNews`;
  private updateNews = `${this.baseUrl}/api/news/editNews`;
  private addThumbnail = `${this.baseUrl}/api/new/album`;
  public foodMenuDate = new Date('12-25-2018');
  private tarAmtUrl = `${this.baseUrl}/api/information/getTarAmt`;
  private payAmtUrl = `${this.baseUrl}/api/information/getPayAmt`;

  constructor(private http: HttpClient) { }



  getBranchs(): Observable<any[]> {
    return this.http.get<any[]>(this.branchUrl, { headers: this.headers });
  }
  // getBranch(brh_id: string): Observable<any> {
  //   const url = this.branchUrl;
  //   return this.http.post<any>(url, brh_id, { headers: this.headers });
  // }
  getSaleInfo(startDate, endDate): Observable<any> {
    return this.http.get<any[]>(`${this.saleInfoUrl}?startDate=${startDate}&endDate=${endDate}`, { headers: this.headers });
  }
  getSaleInfo2(startDate, endDate, sort = '%', filter = []): Observable<any> {
    // tslint:disable-next-line:max-line-length
    return this.http.get<any[]>(`${this.saleInfo2}?startDate=${startDate}&endDate=${endDate}&sort=${sort}&filter=${filter}`, { headers: this.headers });
  }
  getPathSaleInfo(brh, startDate, endDate, sort = '%', filter = []): Observable<any> {
    // tslint:disable-next-line:max-line-length
    return this.http.get<any[]>(`${this.getPathSaleInfoUrl}?branch_id=${brh}&startDate=${startDate}&endDate=${endDate}&sort=${sort}&filter=${filter}`, { headers: this.headers });
  }
  getBranch(brh_id: string): Observable<any> {
    const url = this.branchUrl + `?branch_id=${brh_id}`;
    return this.http.get<any[]>(url, { headers: this.headers });
  }

  getTarAmt(year, sort = '%', branch = '%', filter = []): Observable<any> {
    return this.http.get<any>(`${this.tarAmtUrl}?year=${year}&sort=${sort}&filter=${filter}&pBranch=${branch}`, { headers: this.headers });
  }

  getPayAmt(startDate, endDate, sort = '%', filter = []): Observable<any> {
    return this.http.get<any>(`${this.payAmtUrl}?startDate=${startDate}&endDate=${endDate}&sort=${sort}&filter=${filter}`);
  }

  getChart(brh_id: string): Observable<any> {
    return this.http.post<any>(this.saleInfoUrl, brh_id, { headers: this.headers });
  }

  addNews(data: any): Observable<any> {
    return this.http.post<any>(this.createNews, data, { headers: this.headers });
  }

  // getNews(): Observable<any> {
  //   return this.http.get<any[]>(this.getnews, { headers: this.headers });
  // }

  deleteNews(data: any): Observable<any> {
    return this.http.post<any>(this.delNews, data, { headers: this.headers });
  }

  editNews(data: any): Observable<any> {
    return this.http.post<any>(this.updateNews, data, { headers: this.headers });
  }

  getCategory(): Observable<any> {
    return this.http.get<any[]>(this.getCate, { headers: this.headers });
  }

  getMonthlyMeeting(startDate, endDate): Observable<any> {
    return this.http.get<any[]>(`${this.getMonthylyMeeting}?startDate=${startDate}&endDate=${endDate}`, { headers: this.headers });
  }

  getPathInfo(startDate, endDate): Observable<any> {
    return this.http.get<any[]>(`${this.getPath}?startDate=${startDate}&endDate=${endDate}`, { headers: this.headers });
  }

  addImgThumbnail(data: any): Observable<any> {
    return this.http.post<any>(this.addThumbnail, data, { headers: this.headers });
  }

}
