import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-doc-help',
  standalone: true,
  imports: [],
  templateUrl: './doc-help.component.html',
  styleUrl: './doc-help.component.css'
})
export class DocHelpComponent implements OnInit{

  helpUrl!: SafeResourceUrl;

  constructor(private route: ActivatedRoute, private  sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const page = params['page'] || 'index.htm';
      const url = `assets/help/${page}`;
      this.helpUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    });
  }
}
