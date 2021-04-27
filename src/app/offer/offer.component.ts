import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.sass']
})
export class OfferComponent implements OnInit {
  faqs: any;
  healthServices: any;
  environmentalServices: any;
  healthServicesMaintitle: any;
  healthServicesMainbody: any;
  environmentalServicesMaintitle: any;
  environmentalServicesMainbody: any;
  constructor() { }

  ngOnInit() {
  this.healthServicesMaintitle = 'Health and safety solutions for your business';
  this.healthServicesMainbody = 'The effective management of work health and safety should primarily lead to a reduction in illness and injury followed by the sustainment of such reductions. Such an outcome often results in cost saving, higher profits and a motivated workforce that yields more product of a higher quality:';
  this.healthServices = [
    { title: 'Health and safety', body: 'Designing policy and work health and safety management systems (stand-alone or integrated with other business systems)' },
    { title: 'Designing statutory', body: 'Designing statutory (construction) management plans and safe work method statements for high-risk construction work' },
    { title: 'Safe work', body: 'The design of safe work and standard operating procedures (SAFETY FILES)' },
    { title: 'Emergency management', body: 'The design of emergency management and disaster recovery plans' },
    { title: 'Traffic management', body: 'The design of project traffic management plans' },
    { title: 'Business and action plans', body: 'The design of business and action plans for the implementation of work health and safety management systems and risk controls and barriers' },
    { title: 'Monitoring', body: 'Monitoring and review through compliance auditing by qualified and certified SHEQ auditors' },
    { title: 'Analysis', body: 'Analysis of non-conformances arising out of audit activity; and accident and incident investigations to determine' },
  ];
  this.environmentalServicesMaintitle = 'Environmental Management solutions for your business';
  this.environmentalServicesMainbody = 'Your business is probably increasingly concerned with achieving and demonstrating sound environmental performance by controlling the impacts of your activities, products and services on the environment, GSHEP is an organization that offers services in environmental management including:';
  this.environmentalServices = [
    { title: 'Health and safety', body: 'The design of policy and environmental management systems and Facilitation of statutory environmental impact studies' },
    { title: 'Designing statutory', body: 'The design of project environmental management plans based on environmental impact studies' },
    { title: 'Safe work', body: 'The undertaking and documenting of impact analysis and evaluation in circumstances where environmental impact studies is not a statutory requirement ' },
    { title: 'Emergency management', body: 'The design of environmental impact emergency management, disaster recovery plans and the design of action plans' },
    { title: 'Traffic management', body: 'Monitoring and review through compliance auditing by qualified and certified auditors' },
    { title: 'Monitoring', body: 'Analysis of non-conformances arising out of audit activity; and assistance with, review of or conduct of environmental incident investigations to determine active failures, contributing latent conditions and systemic omission and oversight' },
    { title: 'Analysis', body: 'Design of employee induction programs in the context of environmental management.' },
  ];
 }
}
