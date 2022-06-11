import {
  AfterContentInit,
  Component,
  ContentChildren, Input,
  OnInit,
  QueryList,
  TemplateRef
} from '@angular/core';
import {TemplateTypeDirective} from "../template-type.directive";

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent implements OnInit, AfterContentInit {
  templateHeader!: TemplateRef<TemplateTypeDirective>;
  templateBody!: TemplateRef<TemplateTypeDirective>;
  templateFooter!: TemplateRef<TemplateTypeDirective>;

  data: any = null;
  @Input() items: any = [];

  @ContentChildren(TemplateTypeDirective, {read: TemplateTypeDirective}) templates!: QueryList<TemplateTypeDirective>;

  constructor() {
  }

  ngOnInit() {
    this.data = this.testPromise();
  }

  ngAfterContentInit(): void {
    this.templates.forEach(t => {
      switch (t.type) {
        case 'header':
          this.templateHeader = t.getTemplate();
          break;
        case 'body':
          this.templateBody = t.getTemplate();
          break;
        case 'footer':
          this.templateFooter = t.getTemplate();
          break;
      }
    })
  }

  testPromise() {
      return fetch('https://jsonplaceholder.typicode.com/todos/1').then(r => r.json());
    // return new Promise((resolve, reject) => {
      // let result = 0;
      // for (let i = 0; i < 1000_000; i++) {
      //   result += i;
      // }
      // console.log('work')
      // resolve(`Good Result`);
      // reject(`Bad Result ${result}`);
    // })
  }

  testPromise2() {
      return fetch('https://jsonplaceholder.typicode.com/todos/2').then(r => r.json());
  }

  testPromise4() {
      return fetch('https://jsonplaceholder.typicode.com/todos/3').then(r => r.json());
  }

  async getData() {
    return await this.testPromise();
    //   .then(data => {
    //   console.log(data);
    // })
    //   .then(console.log);
    //   .then(data => this.data = data)
    //   .catch(err => console.log(err))
    //   .finally(() => {
    //     console.log('final')});
    ////----------
    ////----------
    ////----------
    ////----------
  }

  async testPromise3(): Promise<void> {
    //  ---------------------
    //  ---------------------
    //  ---------------------
    //  ---------------------
    try {
      this.data = await this.testPromise();
    } catch (e) {
    } finally {

    }
    // ---------------DDD
    // ---------------DDD
    // ---------------DDD
    // ---------------DDD
  }

  async promiseAll() {
    const data = Promise.resolve(12345);
    const dataError = Promise.reject(new Error('Data not found!'));

    const [results1, results2, results3] = await Promise.all([
      this.testPromise(),
      this.testPromise2(),
      this.testPromise4()
    ]);
  }
}
